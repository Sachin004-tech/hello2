const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")

const text = "This is for my Babu || Nahi bharta ab tere shiva kisi or ka chehra tujhe dekhna or dekhte rehna dustoor ban gya h mera🥺❤️ || #Biharan "
let idx = 1;
let speed= 300 / speedEl.ariaValueMax

writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)
    idx++

    if(idx> text.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addEventListener("input", (e)=> speed = 300 / e.target.value)