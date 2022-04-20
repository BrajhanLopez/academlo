
//selecionamos el boton (+) y el div donde se va agregar
const botonadd = document.querySelectorAll('.agregar-carrito')
const gridcarrito = document.querySelector('.detalle-menu-carrito')
let numstock = document.querySelectorAll('.stock-producto')


const dat = JSON.parse(localStorage.getItem('carrito'))
// todos los datos que extraemos lo llenaremos en un array



let carrito=[]

if (dat) {
    carrito=dat
    contarcarrito()
    renderCarrito()
}


// programando boton (+)
botonadd.forEach(btn =>{
    btn.addEventListener('click',agregaalcarro)
    
})



// en esta funcion selecionamos nombre precio e imagen del producto

function agregaalcarro(e){
const item = e.target.closest('.producton')

const descitem = item.querySelector('.desc-producto')

const stockp = Number(descitem.querySelector('.stock-producto').innerText.split(' ')[2])

const titulo =descitem.querySelector('.nombre-producto').textContent;
const precio = descitem.querySelector('.precio-producto').childNodes[0].textContent.trim()
let precioentero = Number(precio.split(' ')[1])
 
const imagen = item.querySelector('.img-producto .image-producto').src

// creamos objeto para almacenarlo
const newItem = {
titulo: titulo,
precio: precio,
img: imagen,
cantidad: 1,
subtotal: 0,
precioreal: precioentero,
stock: stockp
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
        actualizasubtotal();
        renderCarrito()
        carritototal()
        return null
        
    }
    
}
//console.log(carrito)

carrito.push(newItem)
contarcarrito()
actualizasubtotal();
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
<p class="stk" style="visibility: hidden">${item.stock}</p>
    <h3 class="nombre-producto-carrito">${item.titulo}</h3>           
    <h2 class="precio-producto-carrito">${item.precio}  </h2>
    <p class="subtotal">SubTotal: ${item.subtotal}</p>
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


const borrarprod = div.querySelectorAll('.borrar-producto') 
borrarprod.forEach(bt =>{
    bt.addEventListener('click',borrarproducto)
})


const botonmenos = div.querySelectorAll('.boton-menos') 
botonmenos.forEach(btnn =>{
    btnn.addEventListener('click',repitemenos)
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
    addlocalstorage()
}


function repite(e) {
    const prod = e.target.closest('.desc-producto-carrito')
   let st = Number(prod.querySelector('.stk').textContent)
   
let produ= prod.querySelector('.nombre-producto-carrito').innerText

for (let i = 0; i < carrito.length; i++) {
    
    if (carrito[i].titulo==produ) {
        if (carrito[i].cantidad < st ) {
            carrito[i].cantidad++
        }
        else{
window.alert('stock insuficiente')

        }
        
    }
     
}
actualizasubtotal();
renderCarrito()


}




function borrarproducto(e) {
    const prod = e.target.closest('.desc-producto-carrito')
   // let cant = Number(prod.querySelector('.numero-unidades').innerText.split(' ')[0])
    //cant++
let produ= prod.querySelector('.nombre-producto-carrito').innerText

for (let i = 0; i < carrito.length; i++) {
    
    if (carrito[i].titulo==produ) {
        carrito.splice(i,1)
    }
     
}
actualizasubtotal();
contarcarrito()
renderCarrito()


}


function repitemenos(e) {
    const prod = e.target.closest('.desc-producto-carrito')
    let cant = Number(prod.querySelector('.numero-unidades').innerText.split(' ')[0])
    //cant++
let produ= prod.querySelector('.nombre-producto-carrito').innerText

for (let i = 0; i < carrito.length; i++) {
    
    if (carrito[i].titulo==produ) {

            if (cant==1) {
                window.alert("La cantidad minima a ingresar es 1");
                return null
            }

else {
        carrito[i].cantidad--
        
        
    }


    }
     
}
actualizasubtotal();
renderCarrito()


}




function actualizasubtotal() {
    for (let i = 0; i < carrito.length; i++) {
    
        carrito[i].subtotal = carrito[i].precioreal * carrito[i].cantidad
        
    }


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

function contarcarrito() {

document.querySelector('.circulo-contador').innerHTML = carrito.length

}

/*
const botonadd = document.querySelectorAll('.agregar-carrito')

botonadd.forEach(btn =>{
    btn.addEventListener('click',agregaalcarro)
    
})


*/
/*
const btncompra=document.querySelector('boton-compra')

btncompra.forEach(bt =>{
    bt.addEventListener('click',comprando)
})
*/




document.querySelector('.boton-compra').addEventListener('click',comprando)

function comprando(){
//const pp = e.target.closest('.menu-carrito')
//console.log(pp);
/*
let resto = 0
for (let i = 0; i < carrito.length; i++) {
    resto=carrito[i].stock - carrito[i].cantidad
    console.log(resto);
}
*/

    
    carrito.splice(0,carrito.length)
    contarcarrito()
    renderCarrito()
    //elimina el local storage
    localStorage.removeItem('carrito')
window.alert("Gracias por su compra");

}


    
document.querySelector('.all').addEventListener('click',()=>{
    document.querySelector('.p1').style.display = 'grid'
    document.querySelector('.p2').style.display = 'grid'
    document.querySelector('.p3').style.display = 'grid'
    document.querySelector('.p4').style.display = 'grid'
    document.querySelector('.p5').style.display = 'grid'

})



document.querySelector('.comp').addEventListener('click',()=>{
    document.querySelector('.p1').style.display = 'grid'
    document.querySelector('.p2').style.display = 'grid'
    document.querySelector('.p3').style.display = 'none'
    document.querySelector('.p4').style.display = 'none'
    document.querySelector('.p5').style.display = 'none'
   

})

document.querySelector('.lap').addEventListener('click',()=>{
    document.querySelector('.p1').style.display = 'none'
    document.querySelector('.p2').style.display = 'none'
    document.querySelector('.p3').style.display = 'grid'
    document.querySelector('.p4').style.display = 'grid'
    document.querySelector('.p5').style.display = 'none'

})


document.querySelector('.moni').addEventListener('click',()=>{
    document.querySelector('.p1').style.display = 'none'
    document.querySelector('.p2').style.display = 'none'
    document.querySelector('.p3').style.display = 'none'
    document.querySelector('.p4').style.display = 'none'
    document.querySelector('.p5').style.display = 'grid'

})

function addlocalstorage() {
localStorage.setItem('carrito', JSON.stringify(carrito))
}

const dark= document.querySelector('body')

document.querySelector('.modo-dianoche').addEventListener('click',()=>{
  //console.log('hice clic'); 
dark.classList.toggle('dark')

})