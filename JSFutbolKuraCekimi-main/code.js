const takimlar = [
    { ad: "BEŞİKTAŞ", src: "images/besiktas.png" },
    { ad: "FENERBAHÇE", src: "images/fenerbahce.png" },
    { ad: "GALATASARAY", src: "images/galatasaray.png"},
];

const buton=document.getElementById("button1");
const yildiz=document.getElementById("yildiz1");
const yildiz3=document.getElementById("yildiz2");
const yildiz4=document.getElementById("yildiz3");
const takim1=document.getElementById("takim1")

buton.addEventListener("click",rastgelesayi);

function rastgelesayi()
{
    let rastgelesayi1=Math.floor(Math.random()* takimlar.length);
    /*
    takim1=this;
    let adres=this.dataset.src;
    */
    takim1.src=takimlar[rastgelesayi1].src;
    console.log(takim1.src);
}