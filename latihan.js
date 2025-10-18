function cekGenapGanjil(angka) {
    // validasi input harus berupa angka
    if (typeof angka !== 'number') {
        console.error("Input harus berupa angka");
        return;
    }

    // cek apakah angka genap atau ganjil
    if (angka % 2 === 0) {
        console.log("Bilangan Genap");
    } else { 
      console.log("Bilangan Ganjil");
    }
}


cekGenapGanjil(4);      // Output: Bilangan Genap
cekGenapGanjil(13);     // Output: Bilangan Ganjil
cekGenapGanjil("lima"); // Output: Inpt harus berupa angka