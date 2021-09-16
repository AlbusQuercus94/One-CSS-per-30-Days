# Dia 28 Efeito Borda de Botão: Preencher

## Descrição

O exercício de hoje foi para fazer uma borda de botão que preenche-se ao mover o mouse sobre. Foi mais um exercício de reforço, bem simples de fazer. 

CodePen: [Efeito Borda de Botão: Preencher](https://codepen.io/albusquercus94/pen/rNwYPdG)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que já foi estudado

## Passo a Passo

O HTML só tem o botão com classe btn, simples e conciso para o exercício:

~~~html
<body>
    <button class="btn">Siga-me</button>
</body>
~~~

No CSS, assim como no último exercício. não tem nada de novo, mas o reforço é necessário e bom para fixar as coisas aprendidas:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

body{
    background-color: #212121;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn{
    background-color: #fff;
    border: none;
    border-bottom: 6px solid turquoise;
    border-top: 6px solid turquoise;
    color: #566;
    cursor: pointer;
    display: inline-block;
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 46px;
    letter-spacing: 3px;
    line-height: 34px;
    margin: 15px;
    outline: none;
    padding: 0 10px;
    position: relative;
    text-transform: uppercase;
}

.btn::before,
.btn::after{
    box-sizing: border-box;
    transition: all 0.3s;
    background-color: #fff;
    border-radius: 100%;
    top: -6px;
    content: '';
    height: 46px;
    position: absolute;
    width: 46px;
    border: 6px solid #ddd;
    transform: rotate(45deg);
    z-index: -1;
}

.btn::before{
    right: -23px;
    border-left-color: turquoise;
    border-bottom-color: turquoise;
}

.btn::after{
    left: -23px;
    border-right-color: turquoise;
    border-top-color: turquoise;
}

.btn:hover{
    background-color: #fff;
}

.btn:hover::after,
.btn:hover::before{
    transform: rotate(225deg);
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-28](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_28/Imagens/Resultado-Final-Dia-28.gif)

