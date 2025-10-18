function verifikasiLogin(username, password) {
    // validasi input harus berupa angka
try{
    if (typeof username !== "string" || typeof password !== "string") {
        throw new Error("Username atau Password harus berupa teks");
    }

    // cek apakah angka genap atau ganjil
    if (username === "admin" && password === "12345") {
        console.log("Login Berhasil");
    } else { 
      console.log("Username atau Password salah");
    }
} catch (error) {
    console.error("Terjadi kesalahan:", error.message);
}
}

verifikasiLogin("admin", "12345");      // Output: Bilangan Genap
verifikasiLogin("user", "12345");     // Output: Bilangan Ganjil
verifikasiLogin(123, true); // Output: Inpt harus berupa angka