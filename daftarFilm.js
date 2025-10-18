const fs = require("fs");

const teks = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(teks);

console.log("Daftar Film ");

data.forEach(function (n,i) {
    console.log(1+i+"."+data[i].judul, "("+data[i].tahun+")" ,data[i].genre);
    // console.log(data);
    
}); 

//  console.log(1+"."+data[0].judul, "("+data[0].tahun+")" ,data[0].genre);

// data.push({judul: "Nezha 2", tahun: 2025, genre: "Fantasi, Animasi"});

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));