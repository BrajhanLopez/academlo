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
