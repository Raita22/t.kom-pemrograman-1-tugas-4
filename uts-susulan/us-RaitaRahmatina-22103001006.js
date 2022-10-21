let mahasiswa = [true, false];
let ketertarikan = 0;

mahasiswa.filter((PointerEvent) => {
    if(PointerEvent === true) {
        ketertarikan++
    }
})

console.log(ketertarikan);
if(ketertarikan >= 2) {
    console.log(`teknik komputer`)
}
else {
    console.log(`pilih prodi lain`)
}

//kelompok1 