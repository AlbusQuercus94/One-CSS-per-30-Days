# Dia 21 Menu Animado: Perspectiva

## Descrição

O exercício de hoje é bem simples: fazer um menu que vai reagir ao mouse e mudar a perspectiva para mais perto. É simples e bonito. Gostei de fazer.

CodePen: [Menu Animado Perspectiva](https://codepen.io/albusquercus94/pen/rNwyrzj)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que já foi estudado

## Passo a Passo

O HTML de hoje é curtinho, apenas uma lista não ordenada com alguns itens:

~~~html
<body>
    <ul>
        <li>Início</li>
        <li>Produtos</li>
        <li>Serviços</li>
        <li>Contatos</li>
    </ul>
</body>
~~~

Assim o código fica da seguinte forma, antes do css:

![Resultado-Parcial-Dia-21](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_21/Imagens/Resultado-Parcial-Dia-21.png)

No CSS também não teve nenhum mistério, apenas coisas que já foram vistas antes durante esses 30 dias de CSS. Durante o exercício eu alterei a perspectiva usada no hover, achei 200px muito perto, então pus 300px:

~~~css
body{
    margin: 0;
    height: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: cornsilk;
}

ul{
    padding: 0;
    list-style-type: none;
}

ul li{
    box-sizing: border-box;
    width: 15em;
    height: 3em;
    font-size: 20px;
    border-radius: 0.5em;
    margin: 0.5em;
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
    color: white;
    font-family: sans-serif;
    text-transform: capitalize;
    line-height: 3em;
    transition: 0.3s;
    cursor: pointer;
}

ul li:nth-child(odd){
    background: linear-gradient(to right, orange, tomato);
    text-align: left;
    padding-left: 10%;
    transform: perspective(500px) rotateY(45deg);
}

ul li:nth-child(even){
    background: linear-gradient(to left, orange, tomato);
    text-align: right;
    padding-right: 10%;
    transform: perspective(500px) rotateY(-45deg);
}

ul li:nth-child(odd):hover{
    padding-left: 5%;
    transform: perspective(300px) rotateY(45deg);
}

ul li:nth-child(even):hover{
    padding-right: 5%;
    transform: perspective(300px) rotateY(-45deg);
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-21](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_21/Imagens/Resultado-Final-Dia-21.gif)

