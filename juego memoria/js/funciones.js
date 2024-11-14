//varibles globales 
const d = document;
//imagenes del juego
let imgN1 = [
    {nombre:"Jupiter", url:"img/jupitaer.png"},
    {nombre:"Marte", url:"img/marte.png"},
    {nombre:"Neptuno", url:"img/neptuno.jpg"},
    {nombre:"Pluton", url:"img/pluton.jpg"},
    {nombre:"Saturno", url:"img/saturno.png"},
    {nombre:"Tierra", url:"img/tierra.jpg"},
    {nombre:"Jupiter", url:"img/jupitaer.png"},
    {nombre:"Marte", url:"img/marte.png"},
    {nombre:"Neptuno", url:"img/neptuno.jpg"},
    {nombre:"Pluton", url:"img/pluton.jpg"},
    {nombre:"Saturno", url:"img/saturno.png"},
    {nombre:"Tierra", url:"img/tierra.jpg"}
];
//seleccionar el tablero de html
let tablero = d.querySelector(".tablero");



//funcion para agregar las imagenes al tablero 
function agregarImagenes(){
    //recorrer con un foreach las imagenes del array
    imgN1.forEach((img, i)=>{
        let div = d.createElement("div");
        div.className = "col-3";
        let imagen = d.createElement("img");
        imagen.src = "img/fondo.jpg";
        imagen.className="img-fluid altura"
        div.appendChild(imagen);
        tablero.appendChild(div);
    });
}
agregarImagenes();