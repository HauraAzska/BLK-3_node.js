/**
 * Fungsi: menentukan kategori
 * deskripsi: menentukan kategori kelulusan berdasarkan tahun lulus 
 */

function menentukanKategori(                                                                                                                                                                     tahunLulus) {
    // jika tahun lulus < 2019                          
    if (tahunLulus < 2019) {                          
        return "Lulus Sebelum Covid";                          
    }                          
    // jika tahun lulus antara 2019-2021                          
    else if (tahunLulus >= 2019 && tahunLulus <= 2021) {                          
        return "Lulus Saat Covid";                          
    }                          
    // jika tahun lulus > 2021                          
    else {                          
        return "Lulus Setelah Covid";                          
    }                          
}                          
                          
module.exports = menentukanKategori;                          