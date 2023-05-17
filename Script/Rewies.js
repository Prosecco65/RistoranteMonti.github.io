async function Load(){
    
    const response = await fetch("./Json/Reviews.json")
    const text = await response.text()
    var file = JSON.parse(text);

    nomi = document.querySelectorAll(".nomi")
    insta = document.querySelectorAll(".insta")
    commenti = document.querySelectorAll(".commento")

    for (let i=0; i < nomi.length; i++){
        console.log(file[i])
        nomi[i].innerHTML = file[i].name
        insta[i].innerHTML = file[i].insta
        commenti[i].innerHTML = file[i].commento
    }
}