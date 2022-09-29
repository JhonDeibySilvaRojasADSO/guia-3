addEventListener("DOMContentLoaded",  ()=>{
    let pes=Number(prompt("ingrese el peso de la gallina"))
    let alt=Number(prompt("ingrese la altura de la gallina"))
    let n=Number(prompt("ingrese el numero de huevos que pone"))
    
    //#proceso
    let calidad=(pes*alt)/n
    
    //#salida
    console.log("el precio de ventas por kilo es: ",calidad)
    
})