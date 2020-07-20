var tanya = true;
while (tanya) {

    //menangkap pilihan player
    var p = prompt("pilih angka dari 1 - 10 \nkamu punya 3 kesempatan menebak");

    //menangkap pilihan komputer
    var com = Math.floor(Math.random() * 10) + 1;

    //menentukan rules
    var hasil = "";
    var kesempatan = 3;

    for (kesempatan = 3; kesempatan >= 1; kesempatan--) {
        if (p == com) {
            hasil = "Selamat tebakan anda benar";
        } else if (p < com && p <= 10) {
            hasil = "tebakan anda terlalu kecil";
        } else if (p > com && p <= 10) {
            hasil = "tebakan anda terlalu besar";
        } else {
            hasil = "anda memasukkan angka yang salah";
        }

        
    }
    
    //cetak hasil
    alert(hasil + "\nkamu masih punya " + kesempatan + " kesempatan lagi");

    tanya = confirm("lagi??");

}
alert("terimakasih sudah bermain");
