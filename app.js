const burger = document.querySelector("#burger")
const lateral = document.querySelector("#nav")
burger.addEventListener("change",()=>{
    lateral.classList.toggle("lateral-open")
})

window.addEventListener("resize",()=>{
    if(window.innerWidth > 900){
        lateral.classList.remove('lateral-open')
        burger.checked = false;
    }
})