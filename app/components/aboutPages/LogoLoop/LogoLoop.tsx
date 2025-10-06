'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : value ?? undefined;

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => observers.forEach((observer) => observer?.disconnect());
  }, dependencies);
};

const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) onLoad();
    };

    images.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, dependencies);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) lastTimestampRef.current = timestamp;

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover]);
};

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = 'Tech logos',
    className,
    style,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

      if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, []);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

    const cssVars = useMemo(
      () =>
        ({
          '--logoloop-gap': `${gap}px`,
          '--logoloop-logoHeight': `${logoHeight}px`,
          ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = cx(
      'relative overflow-x-hidden group select-none',
      '[--logoloop-gap:32px]',
      '[--logoloop-logoHeight:28px]',
      '[--logoloop-fadeColorAuto:#ffffff]',
      'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
      className
    );

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        const isNodeItem = 'node' in item;
        const content = isNodeItem ? (
          <span
            className={cx(
              'inline-flex items-center justify-center text-[length:var(--logoloop-logoHeight)]',
              'motion-reduce:transition-none',
              scaleOnHover && 'transition-transform duration-300 ease-in-out group-hover/item:scale-125'
            )}
          >
            {item.node}
          </span>
        ) : (
          <img
            src={item.src}
            alt={item.alt ?? item.title ?? ''}
            title={item.title}
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
            draggable={false}
            className={cx(
              'h-[var(--logoloop-logoHeight)] w-auto object-contain',
              'motion-reduce:transition-none',
              scaleOnHover && 'transition-transform duration-300 ease-in-out group-hover/item:scale-110'
            )}
          />
        );

        const inner = item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title || 'logo link'}
            className="inline-flex items-center no-underline hover:opacity-80 focus-visible:outline-none"
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            key={key}
            className={cx('flex-none mr-[var(--logoloop-gap)]', scaleOnHover && 'group/item')}
            role="listitem"
          >
            {inner}
          </li>
        );
      },
      [scaleOnHover]
    );

    const lists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, i) => (
          <ul
            key={i}
            className="flex items-center"
            role="list"
            aria-hidden={i > 0}
            ref={i === 0 ? seqRef : undefined}
          >
            {logos.map((logo, j) => renderLogoItem(logo, `${i}-${j}`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={{ width: toCssLength(width), ...cssVars, ...style }}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={() => pauseOnHover && setIsHovered(true)}
        onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      >
        {fadeOut && (
          <>
            <div
              aria-hidden
              className={cx(
                'pointer-events-none absolute inset-y-0 left-0 z-10 w-[clamp(24px,8%,120px)]',
                'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,transparent_100%)]'
              )}
            />
            <div
              aria-hidden
              className={cx(
                'pointer-events-none absolute inset-y-0 right-0 z-10 w-[clamp(24px,8%,120px)]',
                'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,transparent_100%)]'
              )}
            />
          </>
        )}

        <div ref={trackRef} className="flex w-max will-change-transform">
          {lists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';
export default LogoLoop;
