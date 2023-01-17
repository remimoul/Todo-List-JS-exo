"use strict";
ol.innerHTML = localStorage.getItem("list");

const spanDels = document.querySelectorAll(".delete");

for (let span of spanDels) {
    span.onclick = () => del(span.parentElement)
}


const spanUrgs = document.querySelectorAll(".urgent");
for (let span of spanUrgs) {
    span.onclick = () => urgent(span)
}



noTache.style.display = (ol.innerHTML == "") ? "block" : "none";

if (ol.innerHTML == "") {
    noTache.style.display = "none";
}


    



form.onsubmit = () => {
    const li = document.createElement("li");
    const texte = document.createElement("span");
    texte.classList.add("texte");
    texte.textContent = champ.value;
   
    const spanDel = document.createElement("span");
    spanDel.classList.add("delete", "material-icons");
    spanDel.textContent = "delete";

    const spanUrg = document.createElement("span");
    spanUrg.classList.add("urgent", "material-icons");
    spanUrg.textContent = "star";

    //const modifli = document.createElement("input");
    //modifli.classList.add

    spanDel.onclick = () => del(li);
    spanUrg.onclick = () => urgent(spanUrg);
    //li.innerHTML = champ.value + "<span onclick=del(this)> X</span>";
    //li.innerHTML = champ.value

   

    li.appendChild(texte);
    li.appendChild(spanUrg);
    li.appendChild(spanDel);

    
    ol.appendChild(li);
    champ.value = "";

    noTache.style.display = "none";

    localStorage.setItem("list", ol.innerHTML);

    return false;
    //event.preventDefault();
}

function del(element) {

    element.remove();
    //noTache.style.display = (ol.innerHTML == "") ? "block" : "none";

    if (ol.innerHTML == "")
    {
        noTache.style.display = "block";
    }
    localStorage.setItem("list", ol.innerHTML);
}

function urgent(element) {
    element.classList.toggle("gold");
    localStorage.setItem("list", ol.innerHTML);
}

//function modif(modili) {
//    modili.classList.add("input");
//}


//div1.textContent = " c'est un autre text";

//div2.innerHTML = "<i>c'est un text en italique</i>";