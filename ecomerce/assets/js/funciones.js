const botonhamburguesa=document.querySelector('.menu-hamburguesa')
const ul= document.querySelector('.ul')
const li =document.querySelectorAll('.li')

botonhamburguesa.addEventListener('click',()=>{
    ul.classList.toggle('activarboton')
    
    
})


li.forEach(lista =>{
    lista.addEventListener('click',function(){
        ul.classList.toggle('activarboton')
    })
})


const cerrarcarrito=document.querySelector('.cerrar-menu-carrito')
const menucarrito=document.querySelector('.menu-carrito')
const abrircarrito=document.querySelector('.carrito')


// cerrar carrito
cerrarcarrito.addEventListener('click',()=>{
menucarrito.classList.remove('activa-abrir-carrito');
menucarrito.classList.add('activa-cerrar-carrito');

})


// abrir carrito
abrircarrito.addEventListener('click',()=>{
    menucarrito.classList.remove('activa-cerrar-carrito');
    menucarrito.classList.add('activa-abrir-carrito');

    })