# Dia 4 Barra Lateral de Navegação

## Descrição

 Desafio do dia é fazer uma barra de navegação lateral com um aspecto mais moderno usando o CSS. Aqui usamos ícones retirados do site [Font Awesome](https://fontawesome.com/).

 Codepen = [Barra Lateral de Navegação](https://codepen.io/albusquercus94/pen/OJmeybW)

## Tecnologias Usadas

* HTML
* CSS

## O que aprendi

* [CSS Propriedade Bottom](https://www.w3schools.com/cssref/pr_pos_bottom.asp)
* [CSS Propriedade Border Radius](https://www.w3schools.com/cssref/css3_pr_border-radius.asp)

## Passo a Passo

O desafio do dia tem um código pequeno, mas um design muito bom para ser utilizado. A primeira diferença nesse código é que vamos usar ícones de um site exterior, o Font Awesome. Então o nosso <head></head> terá uma linha a mais.  Então a base da nossa página é a seguinte:

~~~html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barra Lateral de Navegação Moderno </title>
    <!-- Aqui é um link para os ícones usados. Eles estão disponíveis no site Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossorigin="anonymous"/>
    <link rel="stylesheet" href="./styles.css" />
</head>
<body>
    <!-- Aqui vamos para o conteúdo da página, o que será estilizado -->
</body>
</html>
~~~

Agora vamos para o conteúdo da página, a barra de navegação ficará em uma tag <aside></aside>. Aqui usaremos a nomeação da classe para selecionar os ícones que estão disponíveis no link que se encontra no <head></head>, assim a classe "fa-user" trará o ícone de usuários. Assim fica nosso HTML:

~~~html
<aside>
    <p>Menu</p>
    <a href="#">
        <i class="fa fa-user"></i>
        My Drive
    </a>
    <a href="#">
        <i class="fa fa-laptop"></i>
        Computador
    </a>
    <a href="#">
        <i class="fa fa-clone"></i>
        Compartilhado
    </a>
    <a href="#">
        <i class="fa fa-star"></i>
        Importante
    </a>
    <a href="#">
        <i class="fa fa-trash"></i>
        Lixo
    </a>
</aside>
~~~

Após a adição dessas linhas, a página deve aparecer da seguinte forma:

![Resultado-Parcial-Barra-Lateral](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_04/Imagens/Resultado-Parcial-Barra-Lateral.jpg)

Agora vamos para a estilização do HTML. Não é muito grande, mas teve uma parte um pouco difícil de entender como ocorre. O uso da pseudo-classe "::after" é usado para adicionar um conteúdo após uma tag determinada. Aqui a configuração faz com que pareça que o "after" está sendo acionado na tag anterior, mas é um erro de entendimento.

O que faz o desentendimento acontecer é devido o uso da propriedade 'bottom', que no exemplo dá uma margem inferior de 100%, fazendo com que o elemento pareça está no elemento anterior. Isso é necessário para dar o aspecto de uma aba aberta para a página à direita. 

Eis o código que deve ficar no css:

~~~css
body{
    width: 100%;
    height: 10vh;
    margin: 0;
}

aside{
    color: #fff;
    width: 250px;
    padding-left: 20px;
    height: 100vh;
    background-image: linear-gradient(85deg, #0048bd, #44a7fd);
    border-top-right-radius: 80px;
}

aside a{
    font-size: 14px;
    color: #fff;
    display: block;
    padding: 12px;
    padding-left: 30px;
    text-decoration: none; /* Nova Propriedade*/
    -webkit-tap-highlight-color: transparent; /* Nova Propriedade*/
}

aside a:hover{
    color: #3f5efb;
    background: #fff;
    outline: none;
    position: relative;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

aside a i{
    margin-right: 5px;
}

aside a:hover::after{
    content: "";
    position: absolute;
    background-color:transparent;
    bottom: 100%;
    right: 0;
    height: 35px;
    width: 35px;
    border-bottom-right-radius: 18px;
    box-shadow: 0 20px 0 0 #fff;
}

aside a:hover::before{
    content: "";
    position: absolute;
    background-color: transparent;
    top: 100%;
    right: 0;
    height: 35px;
    width: 35px;
    border-top-right-radius: 18px;
    box-shadow: 0 -20px 0 0 #fff;
}

aside p{
    margin: 0;
    padding: 40px 0;
}
~~~

Então o resultado da página deve ser este:

![Resultado-Final-Barra-Lateral](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_04/Imagens/Resultado-Final-Barra-Lateral.gif)