# Dia 1 - Botões de Néon Brilhantes

## Descrição

Criando botões brilhantes com aspecto de néon usando o CSS Hover e animações com o CSS Animation

Codepen = [Botões Néon](https://codepen.io/albusquercus94/pen/poPqPqX)

## Tecnologias Usadas

* HTML
* CSS

 ## O que aprendi:

* [CSS Animation](https://www.w3schools.com/css/css3_animations.asp);

* [CSS Positions;](https://www.w3schools.com/css/css_positioning.asp)
* [CSS nth-child();](https://www.w3schools.com/cssref/sel_nth-child.asp)
* [CSS Filter](https://www.w3schools.com/cssref/css3_pr_filter.asp);
* [CSS Reflections;](https://www.w3schools.com/css/css3_image_reflection.asp)
* [CSS Hover](https://www.w3schools.com/cssref/sel_hover.asp)

## Passo a passo

No HTML, dentro do elemento <body></body> criamos três elementos  <a></a> com 4 elementos <span></span>. O conteúdo do elemento <a></a> será o nome dentro do botão. Teremos um código assim:

~~~html
<body>
    <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Botão de Néon
    </a>
    <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Botão de Néon
    </a>
    <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Botão de Néon
    </a>
</body>
~~~

Agora vamos para o arquivo .css, mas antes não esquecer de adicionar o link do arquivo .css na <head></head> do HTML.

No css, importamos do Google Fonts a font Raleway com o weight 400 e 700. Nesse passo também organizamos os valores padrão do arquivo. Assim no arquivo .css fica da seguinte forma:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
~~~

O próximo passo é estilizar o elemento <body></body>, vamos por os elementos dele alinhados no centro e deixar a cor de fundo na cor preta. É aqui também que iremos utilizar a fonte que importamos do Google Fonts. O código no .css terá as seguintes linhas:

~~~css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #050801;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
}
~~~

O próximo passo é estilizar o elemento <a></a> e adicionar  um seletor hover que aciona um tipo especifico de estilos quando o mouse está em cima. Aqui é onde vamos fazer os botões brilharem e colocando um reflexo embaixo quando o mouse estiver em cima. O código fica assim:

~~~css
a{
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: #03e9f4;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    margin-right: 50px;
}
a:hover{
    background: #03e9f4;
    color: #050801;
    box-shadow: 
    0 0 005px #03e9f4, 
    0 0 025px #03e9f4,
    0 0 050px #03e9f4,
    0 0 200px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
}
~~~

Para mudar as cores vamos usar um filtro mudando o hue de dois elementos ancoras através do seletor nth-child. O código fica assim:

~~~css
a:nth-child(1){
    filter: hue-rotate(270deg);
}
a:nth-child(2){
    filter: hue-rotate(110deg);
}
~~~

Por fim, vamos usar o CSS Animation para fazer pontos brilhantes girando ao redor de cada botão mesmo sem está com o mouse em cima. Aqui entra o motivo de 4 <span></span> em cada elemento âncora, pois cada um fica responsável por animar cada lado da borda do botão: superior, direito, inferior e esquerdo. O código fica assim:

~~~css
a span{
    position: absolute;
    display: block;
}

/* Animação da borda superior*/
a span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 1s linear infinite;
}
@keyframes animate1 {
    0% {
        left: -100%;
    }
    50%,
    100% {
        left: 100%;
    }
}

/* Animação da borda direita*/
a span:nth-child(2){
    top:-100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}

@keyframes animate2 {
    0% {
        top:-100%;
    }
    50%,
    100%{
        top:100%;
    }
}

/* Animação da borda inferior*/
a span:nth-child(3){
    bottom:0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.5s;
}
@keyframes animate3 {
    0% {
        right: -100%;
    }
    50%,
    100%{
        right: 100%;
    }
}

/* Animação da borda esquerda*/
a span:nth-child(4){
    bottom:-100%;
    left:0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}
@keyframes animate4 {
    0% {
        bottom: -100%;
    }
    50%,
    100%{
        bottom: 100%;
    }
}
~~~

Assim a nossa página fica da seguinte forma:

* ![1 Dia Botão Brilhante Néon](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_1/1%20dia%20bot%C3%A3o%20brilhante.gif)
