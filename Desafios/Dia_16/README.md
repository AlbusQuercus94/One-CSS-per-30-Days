# Dia 16 Animação Neomórfica

## Descrição

Esse exercício é bem simples, é apenas fazer uma caixa com uma animação de abertura. Creio que nesse exercício ainda esteja incompleta, pois a animação é repetitiva e infinita, mas depois vou tentar fazer com que se torne um botão para detalhes.

CodePen:[Animação Neomórfica](https://codepen.io/albusquercus94/pen/BaZQWjZ)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* [CSS Propriedade Animation](https://www.w3schools.com/css/css3_animations.asp)

## Passo a Passo

No HTML não tem muita coisa, só o que será modelado pelo CSS.

~~~html
<body>
    <div class="container">
        <div class="box"></div>
    </div>
</body>
~~~

O CSS também é curtinho comparado aos outros, mas tem bastante coisa que se trabalha em cima das duas divs. Além da animação que é especificada aqui. Mas nada que já não vi antes durante esses exercícios:

~~~css
*{
    margin: 0;
    padding: 0;
}

.container{
    background: #f0f0f0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.box{
    border-radius: 20px;
    width: 60px;
    height: 60px;
    background: #f0f0f0;
    box-shadow: 
        0px 0px 0px #cccccc,
        0px 0px 0px #ffffff,
        10px 10px 10px #cccccc inset,
        -10px -10px 10px #ffffff inset;
    animation: opening 3s cubic-bezier(0.16,1,0.3,1) 1s infinite alternate;
}

/*Para uma questão didática e de memória, a propriedade animation pura contem, respectivamente, as seguintes propriedades:
	animation-name: opening;
	animation-duration: 3s;
	animation-timing-function: cubic-bezier(0.16,1,0.3,1);
	animation-delay: 1s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
*/

@keyframes opening {
    0%{
        width: 60px;
        height: 60px;
        background: #f0f0f0;
        box-shadow: 
            0px 0px 0px #cccccc,
            0px 0px 0px #ffffff,
            10px 10px 10px #cccccc inset,
            -10px -10px 10px #ffffff inset;
    }
    25%{
        width: 60px;
        height: 60px;
        background: #f8f8f8;
        box-shadow: 
            10px 10px 10px #cccccc,
            10px 10px 10px #ffffff,
            0px 0px 0px #cccccc inset,
            -0px -0px 0px #ffffff inset;
    }
    50%{
        width: 60px;
        height: 240px;
        background: #f8f8f8;
        box-shadow: 
            10px 10px 10px #cccccc,
            10px 10px 10px #ffffff,
            0px 0px 0px #cccccc inset,
            -0px -0px 0px #ffffff inset;
    }
    100%{
        width: 480px;
        height: 240px;
        background: #fafafa;
        box-shadow: 
            40px 40px 40px #cccccc,
            0px 0px 0px #ffffff,
            0px 0px 0px #ffffff,
            2px 2px 2px #ffffff inset;
    }
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-16](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_16/Imagens/Resultado-Final-Dia-16.gif)