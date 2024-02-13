// selections des elements

const display = document.querySelector("#display")
const btn = document.querySelector("#btn")
const app = document.querySelector("#app")

// ajouter un evenement au click

btn.addEventListener("click", () => {

    // creation du conteneur d'elements
    let ul = document.createElement("ul")
    ul.classList.add("ul")
    // creation des elements
    if(display.value != ""){
        var li = document.createElement("li")
    }

    li.classList.add("li")

    li.innerText = display.value

    // ajout d'une classe de style a la fin de la tache
    li.addEventListener("click", () =>{
        li.classList.toggle("li-fintache")
    })

    // ajout du bouton suppression de tache
    let sup = document.createElement("input")
    sup.setAttribute("type", "button")
    sup.value = "supprimé"
    sup.classList.add("supBtn")
    sup.addEventListener("click", () =>{
        ul.remove(ul)
    })
    
    // vide le display
    display.value = "";

    // ajout des elements cree au conteneur
    ul.appendChild(li)
    ul.appendChild(sup)
    // ajout du conteneur a notre app
    app.appendChild(ul)
})