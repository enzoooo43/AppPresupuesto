let agregarDato = (event) =>{
event.presentDefault();

let tipo = document.getElementById("tipo");
let descripcion = document.getElementById("descripcion").value;
let valor = document.getElementById("valor").value;

if(descripcion!="" && valor !== ""){
    console.log("Descripcion: "+ descripcion);
    console.log("valor :"+ valor);

}else{
    alert("Debe completar todos los campos")
}
console.log(tipo);
}