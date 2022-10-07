// let tidak bisa di deklarasi ulang
// let yang di dekalrasi dalam blok{}tidak bisa di akses dari luar sedangkan var bisa
{
    let x=1;
}
// var masih bisa diakses dari luar blok
{
    var y=2;
}
// deklarasi let di dalam blok tidak akan mengubah nilai diluar blok
let a=10
// nilai 10
{
    let a=5;
    // nilai 5
}
// nilai 10
// tapi tidak dengan var var akan tetap mengubah nilai diluar dan dalam
var b=2;
// nilai 2
{
    var b=3;
    // nilai 3
}
// nilai 3
