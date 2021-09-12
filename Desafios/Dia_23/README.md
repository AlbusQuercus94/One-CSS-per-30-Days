# Dia 23 Botão com Borda Animada

## Descrição

O exercício do dia é rapidinho, fazer um botão com uma borda animada, é parecido com os da borda de neon que fiz no primeiro dia, mas esse não usa divs para cada uma da borda, usa os seletores before e after, já que a animação é só para as bordas superior e inferior.

CodePen: [Botão com Borda Animada](https://codepen.io/albusquercus94/pen/abwwOPb)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que foi aprendido

## Passo a Passo

No HTML o index é apenas o botão:

~~~html
<body>
    <button class="btn">Enviar</button>
</body>
~~~

O CSS também é curto, não há nada que não tenha visto antes:

~~~css
@import url('https://fonts.googleapis.com/css2?family=BenchNine:wght@700&display=swap');

body{
    background-color: #212121;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn{
    background-color: #ff7009;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: 'BenchNine', Arial, Helvetica, sans-serif;
    font-size: 1em;
    font-size: 22px;
    line-height: 1em;
    margin: 15px 40px;
    outline: none;
    padding: 12px 40px 10px;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
}

.btn:before,
.btn:after{
    border-color: transparent;
    transition: all 0.25s;
    border-style: solid;
    border-width: 0;
    content: '';
    height: 24px;
    position: absolute;
    width: 24px;
}

.btn:before{
    border-color: tomato;
    border-top-width: 2px;
    left: 0;
    top: -5px;
}

.btn:after{
    border-bottom-width: 2px;
    border-color: tomato;
    bottom: -5px;
    right: 0;
}

.btn:hover{
    background-color: tomato;
}

.btn:hover::before,
.btn.btn:hover::after{
    height: 100%;
    width: 100%;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-23](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_23/Imagens/Resultado-Final-Dia-23.gif)