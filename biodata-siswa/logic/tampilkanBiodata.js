/**
 * Fungsi: menampilkan biodata
 * deskripsi: menapilkan  biodata siswa beserta kategori kelulusan
 */

const menentukanKategori = require("../logic/logikaKategori");

console.log("=== Biodata Siswa ===");
function tampilData(siswa, config){
siswa.forEach((s) => {
const kategori = menentukanKategori(s.tahun);
console.log(`
Nama\t\t: ${s.nama}
Umur\t\t: ${s.umur}
Asal\t\t: ${s.asal}
Sekolah\t\t: ${s.sekolah}
Tahun\t\t: ${s.tahun}
Kategori\t: ${kategori}\n`);
});

console.log(" === Informasi Aplikasi ===");
console.log(`
Versi   \t\t: ${config.APP_VERSION}
Penanggung Jawab\t: ${config.APP_PBJ}\n`);
}

module.exports = tampilData;