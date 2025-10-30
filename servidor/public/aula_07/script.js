let canvas  = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'black';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'black';
ctx.fillRect(340,340,50,50);
ctx.strokeRect(340,340,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'black';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'black';
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'black';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.strokeText("Olá",205,350)
ctx.fillText("Olá",200,350);
ctx.closePath();

let canvas_1 = document.getElementById("canvas_1");
let ctx_1 = canvas_1.getContext("2d")

ctx_1.beginPath();
ctx_1.lineWidth = 2;
ctx_1.fillStyle = 'red';
ctx_1.strokeStyle = 'red';
ctx_1.fillRect(0,0,40,40);
ctx_1.strokeRect(0,0,40,40);
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 2;
ctx_1.fillStyle = 'yellow';
ctx_1.strokeStyle = 'yellow';
ctx_1.fillRect(0,360,40,40);
ctx_1.strokeRect(0,360,40,40);
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 2;
ctx_1.fillStyle = 'blue';
ctx_1.strokeStyle = 'blue';
ctx_1.fillRect(360,0,40,40);
ctx_1.strokeRect(360,0,40,40);
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 2;
ctx_1.fillStyle = 'green';
ctx_1.strokeStyle = 'green';
ctx_1.fillRect(360,360,40,40);
ctx_1.strokeRect(360,360,40,40);
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 1;
ctx_1.fillStyle = 'red';
ctx_1.strokeStyle = 'red';
ctx_1.moveTo(360,360);
ctx_1.lineTo(10,10);
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 1;
ctx_1.fillStyle = 'blue';
ctx_1.strokeStyle = 'blue';
ctx_1.moveTo(40,360);
ctx_1.lineTo(360,40);
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 1;
ctx_1.fillStyle = 'green';
ctx_1.strokeStyle = 'green';
ctx_1.moveTo(400,200);
ctx_1.lineTo(0,200);
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 2;
ctx_1.strokeStyle = 'green';
ctx_1.arc(200,200,50,0*Math.PI,1*Math.PI);
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 2;
ctx_1.fillStyle = 'yellow';
ctx_1.strokeStyle = 'green';
ctx_1.arc(350,150,20,1.5*Math.PI,3.5*Math.PI);
ctx_1.fill();
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 2;
ctx_1.fillStyle = 'yellow';
ctx_1.strokeStyle = 'green';
ctx_1.arc(50,150,20,1.5*Math.PI,3.5*Math.PI);
ctx_1.fill();
ctx_1.stroke();
ctx_1.closePath();

ctx_1.beginPath();
ctx_1.lineWidth = 6;
ctx_1.fillStyle = 'black';
ctx_1.font = "25px Arial"
ctx_1.textAlign = "center";
ctx_1.fillText("Desenvolvimento WEB",200,70);
ctx_1.closePath();

let canvas_2 = document.getElementById("canvas_2");
let ctx_2 = canvas_2.getContext("2d")

ctx_2.beginPath();
ctx_2.lineWidth = 2;
ctx_2.fillStyle = 'aquamarine';
ctx_2.strokeStyle = 'aquamarine';
ctx_2.fillRect(5,5,390,300);
ctx_2.strokeRect(5,5,390,300);
ctx_2.closePath();

ctx_2.beginPath();
ctx_2.lineWidth = 2;
ctx_2.fillStyle = 'gray';
ctx_2.strokeStyle = 'gray';
ctx_2.fillRect(5,300,390,95);
ctx_2.strokeRect(5,300,390,95);
ctx_2.closePath();

ctx_2.beginPath();
ctx_2.lineWidth = 2;
ctx_2.fillStyle = '#8D4925';
ctx_2.strokeStyle = '#8D4925';
ctx_2.fillRect(145,180,110,120);
ctx_2.strokeRect(145,180,110,120);
ctx_2.closePath();

ctx_2.beginPath();
ctx_2.lineWidth = 2;
ctx_2.fillStyle = 'royalblue';
ctx_2.strokeStyle = 'royalblue';
ctx_2.fillRect(155,210,30,30);
ctx_2.strokeRect(155,210,30,30);
ctx_2.closePath();

ctx_2.beginPath();
ctx_2.lineWidth = 2;
ctx_2.fillStyle = 'royalblue';
ctx_2.strokeStyle = 'royalblue';
ctx_2.fillRect(215,210,30,30);
ctx_2.strokeRect(215,210,30,30);
ctx_2.closePath();



function escrever(contexto, lw, cor_preenchimento, cor_linha, texto, x, y){
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = cor_preenchimento;
    contexto.strokeStyle = cor_linha;
    contexto.font = "90px Arial"
    contexto.textAlign = "center";
    contexto.strokeText(texto,x,y)
    contexto.fillText(texto,x,y);
    contexto.closePath();
}

escrever()













