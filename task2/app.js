let ad = prompt("Enter ad:");
let soyad = prompt("Enter soyad:");
let adSoyad = ad + " " + soyad;
console.log(adSoyad);

let username = prompt("Enter username:");
// A: eladir, zehmet olmasa, `${}` ile edek
// S: done!
console.log(`~ ~ ${username} ~ ~`);

// A: eded-i Number-e prompt edende cevirek: // Number(prompt()) kimi
// S: done!
// A: perfect!
let width = Number(prompt("Enter width = "));
let length = Number(prompt("Enter length = "));
let cemi = (width + length) * 2;
console.log(cemi);
