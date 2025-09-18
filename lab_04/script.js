var n = parseInt(Math.random()*100)
console.log(n)

function chute() {
    var resposta = document.getElementById("box").value;

    if (resposta == n) {
        document.getElementById("tentativa").innerHTML = "Acertou!"
        document.getElementById("tentativa").style.setProperty("background-color", "green")
    }
    else if (resposta    <= n) {
        document.getElementById("tentativa").innerHTML = "Tente Chutar um Número Maior"
        document.getElementById("tentativa").style.setProperty("background-color", "red")
        document.getElementById("mais").style.setProperty("background-color", "red")
        document.getElementById("mais").innerHTML += "  " + resposta
    
    }
    else {
        document.getElementById("tentativa").innerHTML = "Tente Chutar um Número Menor"
        document.getElementById("tentativa").style.setProperty("background-color", "red")
        document.getElementById("menos").style.setProperty("background-color", "red")
        document.getElementById("menos").innerHTML += "  " + resposta
    }
}





