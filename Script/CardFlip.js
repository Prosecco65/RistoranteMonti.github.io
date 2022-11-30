async function Load2(){
    
    const response = await fetch("/Json/PizzeSpeciali.json")
    const text = await response.text()
    var file = JSON.parse(text);

    console.log(file)

    var name1 = document.querySelectorAll(".name1")
    var ingredienti = document.querySelectorAll(".ingredienti")
    var descrizione = document.querySelectorAll(".descrizione")
    var prezzo = document.querySelectorAll(".prezzo")

   
    console.log(ingredienti)

    for (let i=0; i < name1.length; i++){
        console.log(file[i])
        name1[i].innerHTML = file[i].name1
        ingredienti[i].innerHTML = file[i].ingredienti
        descrizione[i].innerHTML = file[i].descrizione
        prezzo[i].innerHTML = file[i].prezzo
    }
}