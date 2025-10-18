let modal=1200000
let sepatu =[
    {nama: "New Balance NB530", harga: 390000},
    {nama: "Nike Vomero 5", harga: 350000},
    {nama: "Adidas Samba", harga: 180000},
    {nama: "Onitsuka Tiger Mexico", harga: 420000}
]

console.log("====Rincian Belanja Sepatu====");


i=0
while (i<sepatu.length) {
    console.log(1+i+". "+sepatu[i].nama+"- Rp."+sepatu[i].harga);
        
    i++
}

let totalHarga=0
for (let i= 0; i < sepatu.length; i++) {
    totalHarga+=sepatu[i].harga
}
console.log();
console.log("Total belanja = Rp.", totalHarga);

if (totalHarga<250000) {
    console.log("Diskon = 0%");
    x_diskon=totalHarga
    console.log("Total Setelah Diskon  = Rp. ",x_diskon);
    console.log("Pembayaran = Rp. ",modal);
    kembalian=modal-total
    console.log( "Kembalian = Rp. ",kembalian);
} else if (totalHarga>=250000 && totalHarga<499999) {
    console.log("Diskon = 5%");
    x_diskon=totalHarga*5/100
    total=totalHarga-x_diskon
    console.log("Total Setelah Diskon  = Rp. ",x_diskon);
    console.log("Pembayaran = Rp. ",modal);
    kembalian=modal-total
    console.log( "Kembalian = Rp. ",kembalian); 
} else if (totalHarga>=500000 && totalHarga<799999) {
    console.log("Diskon = 10%");
    x_diskon=totalHarga*10/100
    total=totalHarga-x_diskon
    console.log("Total Setelah Diskon  = Rp. ",x_diskon);
    console.log("Pembayaran = Rp. ",modal);
    kembalian=modal-total
    console.log( "Kembalian = Rp. ",kembalian);
} else if (totalHarga>=800000) {
    console.log("Diskon = 15%");
    x_diskon=totalHarga*15/100
    total=totalHarga-x_diskon
    console.log("Total Setelah Diskon  = Rp. ",x_diskon);
    console.log("Pembayaran = Rp. ",modal);
    kembalian=modal-total
    console.log( "Kembalian = Rp. ",kembalian);
}