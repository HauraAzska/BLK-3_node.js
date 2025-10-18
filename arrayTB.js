let siswa = [
    {nama: "Rose", tinggi: 178},
    {nama: "Magnolia", tinggi: 153},
    {nama: "Daisy", tinggi: 165},
    {nama: "Jasmine", tinggi: 161},
    {nama: "Violet", tinggi: 159}
];

siswa.sort((a, b) => a.nama.localeCompare(b.nama));
console.log(siswa);

// let nama = ["Emily", "Magnolia", "Daisy", "Jasmine", "Violet"];
// nama.sort();
//     console.log(nama);