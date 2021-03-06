# Dia 27 Efeito Sobre Imagem: Cortina Diagonal

## Descrição

O exercício de hoje foi mais um reforço, importante sempre fazer reforço, ainda mais se não tiver nada de novo para aprender. Hoje foi para fazer um efeito sobre imagem que corta a imagem na diagonal e cuja legenda aparece no meio.

CodePen: [Efeito Sobre Imagem: Cortina Diagonal](https://codepen.io/albusquercus94/pen/KKqyGZg)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que já foi estudado

## Passo a Passo

O HTML é simples de entender, até porque não tem nada de novo, é só um exemplo a ser usado para o exercício de CSS:

~~~html
<body>
    <figure class="container">
        <img src="./Imagens/img1.jpg" alt="img1.jpg">
        <figcaption>
            <h3>Profissão 1</h3>
        </figcaption>
        <a href="#"></a>
    </figure>
    <figure class="container">
        <img src="./Imagens/img2.jpg" alt="img2.jpg">
        <figcaption>
            <h3>Profissão 2</h3>
        </figcaption>
        <a href="#"></a>
    </figure>
    <figure class="container">
        <img src="./Imagens/img3.jpg" alt="img3.jpg">
        <figcaption>
            <h3>Profissão 3</h3>
        </figcaption>
        <a href="#"></a>
    </figure>
</body>
~~~

No CSS também não tem nenhuma novidade, mas o reforço é necessário para fixar as coisas aprendidas:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

body{
    margin: 0;
    background-color: #212121;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.container{
    background-color: #000;
    display: inline-block;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    margin: 10px;
    max-width: 315px;
    min-width: 230px;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%;
}

.container *{
    box-sizing: border-box;
    transition: all 0.35s ease;
}

.container h3{
    background-color: #000;
    border: 2px solid #fff;
    color: #fff;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 0;
    padding: 5px 10px;
    text-transform: uppercase;
}

.container::before,
.container::after{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.35s ease;
    background-color: #000;
    border-left: 3px solid #fff;
    border-right: 3px solid #fff;
    content: '';
    opacity: 0.9;
    z-index: 1;
}

.container::before{
    transform: skew(45deg) translateX(-155%);
}

.container::after{
    transform: skew(45deg) translateX(155%);
}


.container img{
    /**/
    height: 315px;
    width: 315px;
    object-fit: cover;
    /**/
    backface-visibility: hidden;
    max-width: 100%;
    vertical-align: top; 
}

.container figcaption{
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: 2;
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0;
    box-shadow: 0 0 10px #000;
}

.container a{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
}

.container:hover img{
    opacity: 0.5;
}

.container:hover::before{
    transform: skew(45deg) translateX(-55%);
}

.container:hover::after{
    transform: skew(45deg) translateX(55%);
}

.container:hover figcaption{
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-27](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_27/Imagens/Resultado-Final-Dia-27.gif)