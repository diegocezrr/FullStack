let canvas = document.getElementById('mesa');
let ctx = canvas.getContext('2d');

let bola = new Image();
bola.src = "bola-8.png";

let bolaX = canvas.width / 2;
let bolaY = canvas.height / 2;

const raio = 25; 
const diametro = raio * 2;

function desenharBola() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bola, bolaX - raio, bolaY - raio, diametro, diametro);
}

canvas.addEventListener("mousemove", (evento) => {
  const rect = canvas.getBoundingClientRect();
  let x = evento.clientX - rect.left;
  let y = evento.clientY - rect.top;

    if (x < raio) {
        x = raio;
    }
        
    if (x > canvas.width - raio){
        x = canvas.width - raio;
    }

    if (y < raio){
        y = raio;
    } 

    if (y > canvas.height - raio){
        y = canvas.height - raio;
    } 

  bolaX = x;
  bolaY = y;

  desenharBola();
});

document.addEventListener("mousemove", (evento) => {
  const rect = canvas.getBoundingClientRect();
  let x = evento.clientX - rect.left;
  let y = evento.clientY - rect.top;

  if (x < 0){
    x = 0;
  } 

  if (x > canvas.width){
    x = canvas.width;
  }
     
  if (y < 0){
    y = 0;
  } 

  if (y > canvas.height){
    y = canvas.height;
  } 

  if (x < raio){
    x = raio;
  } 

  if (x > canvas.width - raio){
    x = canvas.width - raio;
  } 

  if (y < raio){
    y = raio;
  }
     
  if (y > canvas.height - raio){
    y = canvas.height - raio;
  }

  bolaX = x;
  bolaY = y;

  desenharBola();
});

bola.onload = desenharBola;