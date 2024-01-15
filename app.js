var plus =Array.from(document.querySelectorAll('.fa-plus'))
var minus = Array.from(document.querySelectorAll('.fa-minus'))
var heartbtn = Array.from(document.querySelectorAll('.fa-heart'))
var trashbtn = Array.from(document.querySelectorAll('.fa-trash'))
var cards = Array.from(document.querySelectorAll('.card'))
var Prixunit = Array.from(document.querySelectorAll('.Prixunitaire'))
var Price = Array.from(document.querySelectorAll('.price'))
var Totalprice =Array.from(document.querySelectorAll('.Totalprice'))
console.log(Totalprice)



function price()
{
    for(let i in Prixunit)
    {
        Price[i].innerHTML =(Prixunit[i].innerHTML) * (plus[i].nextElementSibling.innerHTML)
    }

}
function Totalpricef()
{
    let PrixTotal = 0
    console.log(PrixTotal)
    //console.log(Totalprice[0].nextElementSibling.innerHTML)
    //Totalprice[0].innerHTML = 0
    for (let i in cards ){
        console.log(Price[i].innerHTML)
        var x = parseInt(Price[i].innerHTML)
        PrixTotal +=x 

    //(Prixunit[i].innerHTML) * (plus[i].nextElementSibling.innerHTML)
    }
    console.log(PrixTotal)
    Totalprice[0].innerHTML = PrixTotal
}

for (let i of plus){
    i.addEventListener("click", function(){
        if (i.nextElementSibling.innerHTML<10){
            i.nextElementSibling.innerHTML++
        }
        price()
        Totalpricef()
    })
}

for (let i of minus){
    i.addEventListener("click", function(){
        if (i.previousElementSibling.innerHTML >0){
            i.previousElementSibling.innerHTML--
        }
        price()
        Totalpricef()
    })
}


for (let i of heartbtn){
    i.addEventListener("click", function(){
        if (i.style.color=="red"){
            i.style.color="black"
        }
        else 
        {
            i.style.color="red"
        }
    })
}

for (let i in trashbtn){
    trashbtn[i].addEventListener("click", function(){
        cards[i].remove()

        cards.splice(i, 1)
        console.log(Prixunit)

       Prixunit.splice(i, 1)
        plus.splice(i, 1)
       minus.splice(i, 1)
       Price.splice(i, 1)
        Totalpricef()
       // Prixunit, plus, minus , heartbtn, cards, Price
    })

}
