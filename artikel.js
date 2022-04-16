const isi = {
    //content

    judul: 'Belajar HTML 1',
    penulis: 'Sukir Santoso',
    p1: 'HTML ( Hyper Text Markup Language) adalah kode atau Bahasa “mark up” untuk menyusun bangunan web. Dengan kode HTML tersebut, kita dapat mendeskripsikan struktur dari halaman web dengan elemen-elemen “mark up”. Elemen-elemen itu akan memerintahkan browser untuk menyajikan konten dari halaman. Elemen itu juga memberi label bagian dari konten, misalnya judul, paragraph, link dan sebagainya.',
    p2: 'HTML menggunakan bahasa "markup" untuk menganotasi teks, gambar, video dan konten lainnya untuk ditampilkan di browser.',
    p3: 'Elemen-elemen itu seperti <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, < img>, <aside>, <audio>, <canvas>, <datalist>, <detail>, <embed>, <nav>, <output>, <progress>, <video>, <ul>, <ol> , <li> dan sebagainya.',
    li1: 'deklarasi <!DOCTYPE html>  menyatakan bahwa dokumen ini menggunakan  HTML5.',
    li2: 'elemen  <html>  wadah dari halaman HTML.',
    li3: 'elemen <head>    berisi meta informasi tentang halaman HTML.',
    li4: 'elemen <title>    memberikan judul untuk halaman HTML (akan terlihat pada jendela judul atau tab halaman).',
    li5: 'elemen <body>  mendefinisikan badan dari halaman, dan berfungsi sebagai wadah bagi konten yang akan terlihat di browser, seperti  judul, paragraf, gambar, hyperlink, tabel, daftar dan sebagainya.',
    li6: 'elemen <h1> menyatakan judul dengan tulisan paling besar.',
    li7: 'elemen <p> yang mendefinisikan paragraph.',
    p4: 'Adapun hasil dari syntax diatas akan menjadi seperti ini',
    tanggal: '30 oktober 2021',


    //artikel2

    judul2: 'Belajar HTML 2',
    penulis2: 'Sukir Santoso',
    tanggal2: '30 oktober 2021',
    p1: 'Untuk membuat dokumen HTML kita membutuhkan editor teks HTML. Editor teks HTML sederhana yang kita butuhkan adalah Notepad untuk program Windows atau TextEdit untuk Mac.',
    p2: 'Langkah-langkah untuk membuat dokumen HTML',
    li1: 'Langkah 1 : Buka Notepad',
    p4: 'Untuk Windows 8, 10 atau sesudahnya:',
    li2: 'Buka Start Screen (tombol Windows yang berada di pojok kiri bawah).',
    li3: 'Lalu tulis Notepad.',
    p5: 'Untuk Windows 7 atau  sebelumnya:',
    li4: 'Buka Start',
    li5: 'Pilih Program',
    li6: 'Pilih Accessoris',
    li7: 'Pilih Notepad',
    li8: 'Langkah 2: Tulis Teks HTML',
    li9: 'Langkah 3 : Simpan Teks HTML',
    li10: 'Simpan file dengan klik File lalu pilih Save as.',
    li11: 'Beri nama  Index.htm atau Index.html',
    li12: 'Setel  encoding pada UTF-8',
    li13: 'Klik Save',
    li14: 'Langkah 4 : Buka Halaman HTML di Browser ',
    li15: 'Double Klik atau Klik Kanan File yang tersimpan tadi',
    li16: 'Pilih Open with',
    li17: 'Pilih browser yang kita sukai',
    li18: 'Kenampakanya akan seperti ini:',
}

const vm = new Vue({
    el: ".bg",
    data: isi
})

function gelep() {
    document.getElementById("cntn").style.backgroundColor = 'black';
    document.getElementById("cntn").style.color = 'white';
    document.getElementById("bg").style.backgroundColor = 'black';
    document.getElementById("bg").style.color = 'white';
    document.getElementById("head").style.backgroundColor = 'black';
    document.getElementById("head").style.color = 'white';
    document.getElementById("foot").style.backgroundColor = 'black';
    document.getElementById("foot").style.color = 'white';
}
function tereng() {
    document.getElementById("cntn").style.backgroundColor = 'white';
    document.getElementById("cntn").style.color = 'black';
    document.getElementById("bg").style.backgroundColor = 'white';
    document.getElementById("bg").style.color = 'black';
    document.getElementById("head").style.backgroundColor = 'white';
    document.getElementById("head").style.color = 'black';
    document.getElementById("foot").style.backgroundColor = 'white';
    document.getElementById("foot").style.color = 'black';
}