# Dia 8 Cartões Flutuantes

## Descrição

O exercício de hoje é para aprender a fazer cartões com efeito de flutuação quando o mouse passa em cima. É até um efeito simples de ser feito, mas um tanto confuso para entender a funcionalidade se não prestar atenção.

Esse até agora é um dos que mais aprendi coisas novas de CSS.

CodePen: [Cartões Flutuantes](https://codepen.io/albusquercus94/pen/gORbPwa)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* [CSS Notação Repeat](https://drafts.csswg.org/css-grid/#repeat-notation)
* [CSS Propriedade Grid Template Columns](https://www.w3schools.com/cssref/pr_grid.asp)
* [CSS Propriedade Grid Gap](https://www.w3schools.com/cssref/pr_grid-gap.asp)
* [CSS Função Skew](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew)
* [CSS Propriedade Perspective](https://www.w3schools.com/cssref/css3_pr_perspective.asp)
* [CSS Propriedade Perspective Origin](https://www.w3schools.com/cssref/css3_pr_perspective-origin.asp)

## Passo a Passo

Primeiro fazer o HTML, onde colocamos o que queremos que esteja na página, no caso deste exercício é uma div com quatro divs dentro para cada cartão que será apresentado. Mesmo após o fim do html, nada aparecerá na página. Eis o código a estar dentro do body:

~~~html
<body>
    <div class="container">
        <div class="game-card">
            <div class="game-card_cover" style="background-image: url(./Imagens/img-1.jpg);"></div>
        </div>
        <div class="game-card">
            <div class="game-card_cover" style="background-image: url(./Imagens/img-2.jpg);"></div>
        </div>
        <div class="game-card">
            <div class="game-card_cover" style="background-image: url(./Imagens/img-3.jpg);"></div>
        </div>
        <div class="game-card">
            <div class="game-card_cover" style="background-image: url(./Imagens/img-4.jpg);"></div>
        </div>
    </div>
</body>
~~~

Como eu tenho feito nos últimos README, aqui vou por o código css comentado com o que entendi que cada seletor faz, exceto os que são bem auto explicativos. Eis o código:

~~~css
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #353540;
}

.container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    width: 100%;
    max-width: 1200px;
    padding: 30px;
}
/*Aqui formatamos o cartão e o seu comportamento em relação ao usuário. O comportamento só é visto quando o hover é ativo.*/
.game-card{
    position: relative;
    z-index: 1;
    width: 100%;
    padding-bottom: 150%;
    perspective: 1000px;
}
/*Formatamos o desenho do cartão, a capa, e o comportamento da capa quando o hover for ativo.*/
.game-card_cover{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    background-size: cover;
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    transform-origin: top center;
    will-change: transform;
    transform: skewX(0.001deg);
    transition: transform 0.35s ease-in-out;
}
/*Aqui colocamos um brilho sobre a capa do cartão e o comportamento desse brilho.*/
.game-card_cover::after{
    display: block;
    content: '';
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: linear-gradient(
        226deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.4) 35%,
        rgba(255, 255, 255, 0.2) 42%,
        rgba(255, 255, 255, 0) 60%
    );/*Lembrete: ULTIMA DEFINIÇÃO NÃO SE PÕE VIRGULA*/
    transform: translateY(-20%);
    will-change: transform;
    transition: transform 0.65s cubic-bezier(0.18, 0.9, 0.58, 1);
}*/
/*Essa parte não entendi o que modifica na página*/
.game-card:hover .game-card_cover{
    transform: rotateX(7deg) translateY(-6px);
}
/*O comportamento do brilho quando o mouse está em cima*/
.game-card:hover .game-card_cover::after{
    transform: translateY(0%);
}
/*A partir desta linha é a formatação e definição de comportamento das sombras.*/
.game-card::before{
    display: block;
    content: '';
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 6px 12px 12px rgba(0, 0, 0, 0.4);
    will-change: opacity;
    transform-origin: top center;
    transform: skewX(0.001deg);
    transition: transform 0.35s ease-in-out, opacity 0.5s ease-in-out;
}
.game-card:hover::before{
    opacity: 0.6;
    transform: rotateX(7deg) translateY(-6px) scale(1.05);
}
~~~

Eis o resultado do exercício de hoje:

![Resultado-Final-Dia-8](#)

