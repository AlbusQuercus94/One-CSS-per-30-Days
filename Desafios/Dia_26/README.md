# Dia 26 Botão com Bordas de Linhas

## Descrição

O exercício de hoje foi bem curtinho, sem nenhuma coisa tão difícil de entender, porém é mais um design de efeito para a lista, além de um ótimo reforço.

CodePen: [Botão com Bordas de Linhas](https://codepen.io/albusquercus94/pen/powrRxX)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que foi aprendido

## Passo a Passo

HTML

O HTML do exercício de hoje é apenas uma button com a classe btn:

~~~html
<body>
    <button class="btn">Siga-me :D</button>
</body>
~~~

CSS

O CSS não é complicado, nada que já não fiz antes. É de simples entendimento:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body{
    background-color: #212121;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn{
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #fff;
    cursor: pointer;
    padding: 0px 40px;
    display: inline-block;
    margin: 15px 30px;
    text-transform: uppercase;
    line-height: 2.7em;
    letter-spacing: 1.5px;
    font-size: 1em;
    outline: none;
    position: relative;
    font-size: 16px;
    border: 3px solid #fff;
    background-color: transparent;
    border-radius: 15px 0 15px 15px;
    transition: all 0.3s;
}

.btn::before{
    content: '';
    position: absolute;
    right: -3px;
    top: -3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 35px 35px 0;
    border-color: transparent #c8560a transparent transparent;
    z-index: 1;
}

.btn:hover{
    border-color: #c8560a;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-26](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_26/Imagens/Resultado-Final-Dia-26.gif)