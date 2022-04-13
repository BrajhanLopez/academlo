const boton=document.querySelector('.button')
const nav= document.querySelector('.ul')

const li =document.querySelectorAll('.li')

boton.addEventListener('click',()=>{
    nav.classList.toggle('activarboton')
    
})



li.forEach(lista =>{
    lista.addEventListener('click',function(){
        nav.classList.toggle('activarboton')
    })
})


