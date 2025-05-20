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



fetch("data.json")
.then(rep=>rep.json())
.then(data=>{
     // ici et uniquement ici j'ai acces a mon tableau de données !
    const input = document.querySelector("#recherche")
    input.addEventListener("change",(e)=>{
        console.log("recherche")
        let tab = data.filter(elt=>{return elt.nom.toLowerCase().includes(e.target.value.toLowerCase())})
        console.log(tab)
        // on vide la div qui recoit les recettes :
        document.getElementById("mycontainer").innerHTML =""
        // et on la rempli avec le tableau de donnée filtré
        if(tab.length >0){
           tab.forEach(recette=>{
                affiche(recette) 
            })
        }else{
           return
        } 
    })
    console.log(data)
    data.forEach(recette=>{
        affiche(recette)
    })
     

   
})


function affiche(donnee){
    let ingredients =''
    donnee.ingredients.forEach(ing=>{
        ingredients += `<li>${ing.quantite}${ing.unite} ${ing.aliment}</li>` 
    })  
    
    let etapes = ""
    donnee.etapes.forEach(etape=>{
        etapes += `<li>${etape.descEtape}</li>`
    })

    document.getElementById("mycontainer").innerHTML += `
    <div class="card">
            <div class="flex gap16 align-center">
                <h1>${donnee.nom}</h1>
                
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">favorite</span></a>
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">
                    share
                    </span></a>   
                
            </div>
            
            <div class="flex align-start gap32 mt-16">
                <div class="large-3 medium-6 small-12">
                    <div class="align-start flex gap16">
                        <div class="large-12">
                            <img src="${donnee.img[0]}" alt="" class="responsive vignette">
                            <div class="legende">${donnee.nom}</div>
                        </div>
                        <div class="large-4">
                            <img src="${donnee.img[1]}" alt="" class="responsive minia">
                        </div>
                        <div class="large-4">
                            <img src="${donnee.img[2]}" alt="" class="responsive minia">
                        </div>
                        <div class="large-4">
                            <img src="${donnee.img[3]}" alt="" class="responsive minia">
                        </div>    
                    </div>
                </div>
                
                <div class="gap32 large-3 medium-6 small-12">
                    <div class="flex gap16">
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            restaurant
                            </span>${donnee.portions}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            alarm
                            </span>${donnee.tempPreparation}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            local_fire_department
                            </span>${donnee.tempCuisson}</p>
                    </div>
                    <div>
                        <h2>Détails</h2>
                        <p class="text-orange">
                          ${donnee.desc}
                        </p>
                    </div>
                    <div>
                        <h2>Ingrédients</h2>
                        <ul>
                            ${ingredients}
                        </ul>
                    </div>

                </div>
                
                <div class="large-6 medium-12 small-12">
                    <h2>Etapes</h2>
                    <ol>
                       ${etapes}
                    </ol>
                </div>
            </div>
        </div>
    `
}