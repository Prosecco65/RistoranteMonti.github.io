function pizza(inza){
    var card=`<div class="col-lg-4 mb-4 d-flex justify-content-center"><div class="flip-card"> <div class="flip-card-inner"> <div class="flip-card-front rounded"> <img src="${inza['img']}" alt="Avatar" style="width:300px;height:250px;" class="rounded"><h2>${inza['pizza']}</h2> </div> <div class="flip-card-back rounded p-4"> <div class="wrapO "> <b>Ingredienti: &nbsp;</b> <i>${inza['descrizione']}</i></div>  <div class="wrapO"><b>Prezzo: &nbsp;</b> <i>${inza['prezzo']}</i><i>€</i> </div></div></div></div></div></div>`
    document.getElementById("inzaculo").innerHTML+=card
}

async function Load3(){
    
    const response = await fetch("./Json/PizzeOrd.json")
    const text = await response.text()
    var file = JSON.parse(text);

    console.log(file)

    

    for (let i=0; i < file.length; i++){
        pizza(file[i])
    }
}

//