# Dia 13 Animação Botão ON/OFF 

## Descrição

O exercício do dia foi bem simples, deu mais como uma revisão do que foi aprendido do que aprender algo novo.

CodePen:[Botão On-OFF Animado](https://codepen.io/albusquercus94/pen/WNOwGvm)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que já foi aprendido

## Passo a Passo

O HTML do exercício é curto, só quatro tags:

~~~html
<body>
    <input type="checkbox" id="switch" />
    <label for="switch"></label>
    <div class="s"></div>
    <div class="background"></div>
</body>
~~~

No CSS, apesar de ser um pouco maior, com o que já aprendi é fácil de interpretar o que está sendo feito nos seletores. No CSS o código é o seguinte:

~~~css
html,
body{
    margin: 0 auto;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.background{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #ccc;
    z-index: -1;
    transition: all 0.5s;
}

input[type='checkbox']{
    height: 0;
    width: 0;
    visibility: hidden;
}

label{
    cursor: pointer;
    text-indent: -9999px;
    width: 200px;
    height: 100px;
    background: #fff;
    display: block;
    border-radius: 100px;
    position: relative;
    transition: all 0.5s;
}

.s{
    position: absolute;
    right: 50.1vw;
    width: 85px;
    height: 85px;
    background: #ccc;
    border-radius: 90px;
    transition: 0.5s;
    transform-origin: 105% 50%;
    pointer-events: none;
}

input:checked + label{
    transform: rotate(180deg);
}

input:checked ~ .s{
    transform: rotate(-180deg);
    background: #00c801;
}

input:checked ~ .background {
    background: #00c801;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-13](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_13/Imagens/Resultado-Final-Dia-13.gif)