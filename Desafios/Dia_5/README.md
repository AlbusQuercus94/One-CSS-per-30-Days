# Dia 5 Ícones de Redes Sociais com Pop-up

## Descrição

O desafio do dia é a criação de botões com os ícones das redes sociais que criarão balões (pop-up)  com os seus respectivos nomes. Nesse desafio retiraremos os ícones das redes sociais do site [Font Awesome](https://fontawesome.com/).

## Tecnologias Usadas

* HTML
* CSS

## O que aprendi

* [CSS Propriedade Place-Items](https://developer.mozilla.org/en-US/docs/Web/CSS/place-items)
* [CSS Propriedade Pointer-Events](https://www.w3schools.com/cssref/css3_pr_pointer-events.asp)
* [CSS Função Cubic Bezier](https://www.w3schools.com/cssref/func_cubic-bezier.asp)
* [CSS Regra !Important](https://www.w3schools.com/css/css_important.asp)

## Passo a Passo

Primeiro vamos para a criação do arquivo HTML, onde teremos um link a mais na <head></head> onde será o <link> para pegar os ícones do site Fonts Awesome. Já no nosso <body></body> cria-se uma <div></div> com a classe chamada "wrapper" onde teremos cinco <div></div>, cada uma delas representará uma rede social diferente, que usaremos como exemplo. Nosso código fica assim:

~~~html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Popup Ícones Redes Sociais</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Nesse desafio é usado os ícones do Font Awesome.  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossorigin="anonymous" />
</head>
<body>
    <div class="wrapper">
        <div class="icon facebook">
            <div class="tooltip">Facebook</div>
            <span><i class="fab fa-facebook"></i></span>
        </div>

        <div class="icon twitter">
            <div class="tooltip">Twitter</div>
            <span><i class="fab fa-twitter"></i></span>
        </div>

        <div class="icon instagram">
            <div class="tooltip">Instagram</div>
            <span><i class="fab fa-instagram"></i></span>
        </div>

        <div class="icon github">
            <div class="tooltip">Github</div>
            <span><i class="fab fa-github"></i></span>
        </div>

        <div class="icon youtube">
            <div class="tooltip">Youtube</div>
            <span><i class="fab fa-youtube"></i></span>
        </div>
    </div>
</body>
</html>
~~~

Antes da estilização, nossa página terá a seguinte aparência:

![Resultado-Parcial-Icones](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_5/Imagens/Resultado-Parcial-Icones.jpg)

Agora vamos para o css, não tem muito segredo, contudo temos uma propriedade, ou uma regra, nova que usaremos: !important. É uma regra usada no css para que aquela propriedade sobrescreva qualquer outra que viria subistituí-la.  

Aqui também importaremos uma fonte do [Google Fonts](https://fonts.google.com/). A fonte importada é a Poppins.

O código usado é o seguinte:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:focus,
*:active{
    outline: none !important; /* Pesquisar */
    -webkit-tap-highlight-color: transparent;
}

html,
body{
    display: grid;
    height: 100%;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    place-items: center;
    background: linear-gradient(315deg, #ffffff, #d7e1ec);
}

.wrapper {
    display: inline-flex;
}

.wrapper .icon{
    position: relative;
    background-color: #ffffff;
    border-radius: 50%;
    padding: 15px;
    margin: 10px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip{
    position: absolute;
    top: 0;
    font-size: 14px;
    background-color: #ffffff;
    color: #ffffff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip{
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.wrapper .tooltip::before{
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background-color: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip{
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before{
    background-color: #3b5999;
    color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before{
    background-color: #46c1f6;
    color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before{
    background-color: #e1306c;
    color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before{
    background-color: #333333;
    color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before{
    background-color: #de463b;
    color: #ffffff;
}
~~~

O resultado do código é o seguinte:

![Resultado-Final-ícones](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_5/Imagens/Resultado-Final-Icone.gif)