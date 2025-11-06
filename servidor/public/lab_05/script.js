let canvas1 = document.getElementById('canvas_1');
let ctx1 = canvas1.getContext('2d');

let canvas2 = document.getElementById('canvas_2');
let ctx2 = canvas2.getContext('2d');

function desenhar_quadrado(contexto, lw, cor_preenchimento, cor_linha, x, y, w, h){
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = cor_preenchimento;
    contexto.strokeStyle = cor_linha;
    contexto.fillRect(x,y,w,h);
    contexto.strokeRect(x,y,w,h);
    contexto.closePath();
}

function desenhar_linha(contexto, lw, cor_linha, x1, y1, x2, y2){
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.strokeStyle = cor_linha;
    contexto.moveTo(x1, y1);
    contexto.lineTo(x2, y2);
    contexto.stroke();
    contexto.closePath();
}

function desenhar_arco(contexto, lw, cor_linha, x, y, raio, angulo_inicial, angulo_final){
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.strokeStyle = cor_linha;
    contexto.arc(x, y, raio, angulo_inicial * Math.PI, angulo_final * Math.PI);
    contexto.stroke();
    contexto.closePath();
}

function escrever(contexto, lw, cor_preenchimento, cor_linha, texto, x, y){
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = cor_preenchimento;
    contexto.strokeStyle = cor_linha;
    contexto.font = "24px Arial";
    contexto.textAlign = "center";
    contexto.strokeText(texto,x,y);
    contexto.fillText(texto,x,y);
    contexto.closePath();
}

function desenhar_circulo(contexto, lw, cor_preenchimento, cor_linha, x, y, raio){
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = cor_preenchimento;
    contexto.strokeStyle = cor_linha;
    contexto.arc(x, y, raio, 0, 2 * Math.PI);
    contexto.fill();
    contexto.stroke();
    contexto.closePath();
}

function desenhar_arco_preenchido(contexto, cor_preenchimento, x, y, raio, angulo_inicial, angulo_final){
    contexto.beginPath();
    contexto.fillStyle = cor_preenchimento;
    contexto.moveTo(x, y);
    contexto.arc(x, y, raio, angulo_inicial * Math.PI, angulo_final * Math.PI);
    contexto.closePath();
    contexto.fill();
}

function desenhar_triangulo(contexto, lw, cor_preenchimento, cor_linha, x1, y1, x2, y2, x3, y3) {
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = cor_preenchimento;
    contexto.strokeStyle = cor_linha;
    contexto.moveTo(x1, y1);
    contexto.lineTo(x2, y2);
    contexto.lineTo(x3, y3);
    contexto.closePath();
    contexto.fill();
    contexto.stroke();
}

function desenhar_elipse(contexto, lw, cor_preenchimento, cor_linha, x, y, rx, ry) {
    contexto.beginPath();
    contexto.lineWidth = lw;
    contexto.fillStyle = cor_preenchimento;
    contexto.strokeStyle = cor_linha;
    contexto.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
    contexto.fill();
    contexto.stroke();
    contexto.closePath();
}


const azul = '#0000FF';
const vermelho = '#FF0000';
const ciano = '#00FFFF';
const amarelo = '#FFFF00';
const preto = '#000000';
const verde = '#008000';


desenhar_quadrado(ctx1, 1, azul, azul, 0, 0, 50, 50);
desenhar_quadrado(ctx1, 1, vermelho, vermelho, 250, 0, 50, 50);
desenhar_quadrado(ctx1, 1, amarelo, amarelo, 0, 250, 25, 50);
desenhar_quadrado(ctx1, 1, amarelo, amarelo, 25, 275, 25, 25);
desenhar_quadrado(ctx1, 1, preto, preto, 275, 250, 25, 50);
desenhar_quadrado(ctx1, 1, preto, preto, 250, 275, 25, 25); 

desenhar_quadrado(ctx1, 1, ciano, ciano, 0, 125, 25, 50);
desenhar_quadrado(ctx1, 1, ciano, ciano, 275, 138, 25, 25); 
desenhar_quadrado(ctx1, 1, vermelho, preto, 110, 150, 40, 40);


desenhar_linha(ctx1, 2, verde, 0, 150, 300, 150);
desenhar_linha(ctx1, 2, verde, 150, 150, 150, 300);
desenhar_linha(ctx1, 2, azul, 50, 50, 150, 150);
desenhar_linha(ctx1, 2, vermelho, 250, 50, 150, 150);


desenhar_circulo(ctx1, 2, ciano, azul, 150, 120, 15);
desenhar_circulo(ctx1, 2, amarelo, verde, 75, 225, 20, 0, 2);
desenhar_circulo(ctx1, 2, amarelo, verde, 225, 225, 20, 0, 2);


desenhar_arco(ctx1, 2, verde, 150, 150, 60, 1, 2);
desenhar_arco(ctx1, 2, verde, 150, 150, 75, 1.75, 2);
desenhar_arco(ctx1, 2, verde, 150, 150, 75, 1., 1.25);

desenhar_arco(ctx1, 2, verde, 150, 300, 80, 1, 1.5);
desenhar_arco(ctx1, 2, verde, 150, 300, 60, -0.5, 0);
desenhar_arco(ctx1, 2, verde, 150, 300, 50, 1, 0);


desenhar_arco_preenchido(ctx1, ciano, 150, 300, 50, 1, 0);


escrever(ctx1, 1, preto, preto, 'Canvas', 150, 60);

//////////////

desenhar_quadrado(ctx2, 1, '#93F8D5', '#93F8D5', 0, 0, 300, 300);

desenhar_quadrado(ctx2, 1, '#6d6d6dff', '#6d6d6dff', 0, 200, 300, 100);  

desenhar_circulo(ctx2, 1, '#FFFF33', '#FFFF33', 230, 60, 40);

desenhar_quadrado(ctx2, 1, '#7B3F00', '#7B3F00', 111, 130, 79, 70);

desenhar_triangulo(ctx2, 1, '#FF6347', '#FF6347', 110, 130, 150, 80, 190, 130);

desenhar_quadrado(ctx2, 1, '#4B2C00', '#4B2C00', 143, 169, 17, 31);

desenhar_quadrado(ctx2, 1, '#66CCFF', '#66CCFF', 120, 145, 22, 22);
desenhar_quadrado(ctx2, 1, '#66CCFF', '#66CCFF', 160, 145, 22, 22);

desenhar_quadrado(ctx2, 1, '#8B4513', '#8B4513', 50, 160, 15, 40);
desenhar_circulo(ctx2, 1, '#2E8B57', '#2E8B57', 57, 150, 25);

desenhar_quadrado(ctx2, 1, '#8B4513', '#8B4513', 240, 220, 15, 40);
desenhar_circulo(ctx2, 1, '#2E8B57', '#2E8B57', 247, 210, 25);

desenhar_quadrado(ctx2, 1, 'blue', 'blue', 0, 260, 120, 40);
desenhar_quadrado(ctx2, 1, 'blue', 'blue', 0, 200, 40, 60);
desenhar_arco_preenchido(ctx2, 'blue', 120, 300, 40, 1, 0);
desenhar_arco_preenchido(ctx2, 'blue', 0, 200, 40, 1.5, 0);

