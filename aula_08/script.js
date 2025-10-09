let idades = [18, 20];
console.log(idades)

idades.push(25);
console.log(idades)

let idade = idades.pop();
console.log(idade)
console.log(idades)

delete idades[1];
console.log(idades)

let car_1 = {
    position: 0,
    cor: "gray",
    modelo: "Corsa",
    buzina: function() {
        console.log("BII BII")
    },
    andar: function(qtde) {
        this.position += qtde;
    }
};

car_1.buzina();
console.log("Posição Atual: ", car_1.position)
car_1.andar(5)
console.log("Posição Atual: ", car_1.position)

let car_2 = {
    position: 0,
    cor: "red",
    modelo: "Fiesta",
    buzina: function() {
        console.log("BOO BOO")
    },
    andar: function(qtde) {
        this.position += qtde;
    }
};

let carros = [car_1, car_2];
for (let i = 0; i < carros.length; i++){
    let carro = carros[i];
    console.log(carro.modelo);
};

let retangulo_1 = {
    lw: 2,
    cor_preenchimento: "black",
    cor_linha: "red",
    x: 10,
    y: 10,
    largura: 50,
    altura: 50,
    desenhar: function(){
        ctx.beginPath();
        ctx.lineWidth = this.lw;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
        ctx.strokeRect(this.x, this.y, this.largura, this.altura)
        ctx.closePath();
    }
};

let retangulo_2 = {
    lw: 2,
    cor_preenchimento: "black",
    cor_linha: "red",
    x: 340,
    y: 340,
    largura: 50,
    altura: 50,
    desenhar: function(){
        ctx.beginPath();
        ctx.lineWidth = this.lw;
        ctx.fillStyle = this.cor_preenchimento;
        ctx.strokeStyle = this.cor_linha;
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
        ctx.strokeRect(this.x, this.y, this.largura, this.altura)
        ctx.closePath();
    }
};

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'bola-8.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}


let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

// let mov = 1
function animacao() {
    ctx.clearRect(0, 0, 400, 400)
    // if (retangulo_1.x == 350){
    //     mov = -1;
    // }
    // else if (retangulo_1.x == 0){
    //     mov = 1;
    // }

    // if (retangulo_2.x == 350){
    //     mov = 1;
    // }
    // else if (retangulo_2.x == 0){
    //     mov = -1;
    // }

    // retangulo_1.x += mov;
    // retangulo_2.x -= mov;
    retangulo_1.desenhar();
    retangulo_2.desenhar();
    bola.desenha();

    requestAnimationFrame(animacao);
};

animacao();

document.addEventListener("keydown", function(evento){
    let tecla = evento.key;                                   
    console.log(tecla);

    vel = 10

    if(tecla == "ArrowUp"){
        retangulo_1.y -= vel;

    }
    if(tecla == "ArrowDown"){
        retangulo_1.y += vel;

    }
    if(tecla == "ArrowLeft"){
        retangulo_1.x -= vel;

    }
    if(tecla == "ArrowRight"){
        retangulo_1.x += vel;

    }
}
);

addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    console.log(x_mouse, y_mouse);

    retangulo_2.x = x_mouse
    retangulo_2.y = y_mouse

}

)
