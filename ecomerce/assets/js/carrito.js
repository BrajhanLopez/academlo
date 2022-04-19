
//selecionamos el boton (+) y el div donde se va agregar
const botonadd = document.querySelectorAll('.agregar-carrito')
const gridcarrito = document.querySelector('.detalle-menu-carrito')


// todos los datos que extraemos lo llenaremos en un array
let carrito=[]

// programando boton (+)
botonadd.forEach(btn =>{
    btn.addEventListener('click',agregaalcarro)
   
})



// en esta funcion selecionamos nombre precio e imagen del producto

function agregaalcarro(e){
const item = e.target.closest('.producton')

const descitem = item.querySelector('.desc-producto')

const titulo =descitem.querySelector('.nombre-producto').textContent;
const precio = descitem.querySelector('.precio-producto').childNodes[0].textContent.trim()
const imagen = item.querySelector('.img-producto .image-producto').src

// creamos objeto para almacenarlo
const newItem = {
titulo: titulo,
precio: precio,
img: imagen,
cantidad: 1
}

agregaalarreglo(newItem)

} 


// agregamos al arreglo .push

function agregaalarreglo(newItem)
{

//const inputelemento = gridcarrito.getElementsByClassName('numero-unidades')
for (let i = 0; i < carrito.length; i++) {
   
    if (carrito[i].titulo.trim()===newItem.titulo.trim()) {
        carrito[i].cantidad++
        //const inputvalue=inputelemento[i]
        //Number(inputvalue.innerText.split(' ')[0])++
        renderCarrito()
        carritototal()
        return null
        
    }
    
}
//console.log(carrito)

carrito.push(newItem)
renderCarrito()
}


// esta funcion nos sirve para ver los productos en el carrito
function renderCarrito()
{
gridcarrito.innerHTML=''

carrito.map(item=>{
const div = document.createElement('div')
div.classList.add('Itemcarrito')
const Content = `<div class="contenedor-producto-carrito">
<img class="imagen-producto-carrito" src=${item.img} alt="">  

<div class="desc-producto-carrito">  
    <h3 class="nombre-producto-carrito">${item.titulo}</h3>           
    <h2 class="precio-producto-carrito">${item.precio}  </h2>
    <p class="subtotal">SubTotal: 2,000</p>
    <button class="boton-menos">-</button>
    <span class="numero-unidades">${item.cantidad} Unidad(es)</span>
    <button class="boton-mas plus">+</button>
    <hr>
    <button class="borrar-producto">Borrar Producto</button>
</div>  
</div>`
div.innerHTML = Content
gridcarrito.append(div)

const botonmas = div.querySelectorAll('.boton-mas')
botonmas.forEach(btn =>{
    btn.addEventListener('click',repite)
   
})


})
carritototal()
}


function carritototal()
{
    let total= 0;
    const ettotal = document.querySelector('.montototal')
    carrito.forEach((item)=>{
        const precio = Number(item.precio.replace("S/.",''))
        total=total+precio * item.cantidad
    })
    ettotal.innerHTML = `S/. ${total}`
}


function repite(e) {
    const prod = e.target.closest('.desc-producto-carrito')
   // let cant = Number(prod.querySelector('.numero-unidades').innerText.split(' ')[0])
    //cant++
let produ= prod.querySelector('.nombre-producto-carrito').innerText
console.log(carrito.find(nom => nom===produ))

}







/*

class Carrito {

    //Añadir producto al carrito
    comprarProducto(e){
       
        //Delegado para agregar al carrito
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
            //Enviamos el producto seleccionado para tomar sus datos
           // this.leerDatosProducto(producto);
           console.log("este es un mensaje");
        }
    }

}

*/