// custom.d.ts

// Ini memberitahu TypeScript bahwa impor apa pun yang diakhiri dengan .css adalah sebuah 'module'
// yang valid, sehingga tidak perlu deklarasi tipe.
declare module '*.css' {
    // Anda bisa membiarkannya kosong, atau menambahkan:
    // const content: any;
    // export default content;
  }