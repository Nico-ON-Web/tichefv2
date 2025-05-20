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


fetch("https://fakestoreapi.com/products")
.then(rep=>rep.json())
.then(data=>{
     // ici et uniquement ici j'ai acces a mon tableau de données !
     console.log(data)
     affiche(data)

   
})


function affiche(donnee){

}