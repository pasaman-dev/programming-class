// const tidak bisa di deklarasi ulang
const a=a;
// const a=b; 
// const a=c;
// const nilai nya harus ditulis saat deklarasi
const pi=3.14;
// salah
// const b;
// b=c;
// const bisa mengubah isi array tapi tidak bisa deklarasi ulang array
const cars=["audi","toyota","lamborghini"];
cars[0]="honda";
// bisa juga menambah array
cars.push("mazda");
// const bisa mengubah properti
const car={type:"audi",model:"560",color:"red"};
car.color="blue";
// bisa menambah properti
car.owner="habibi";