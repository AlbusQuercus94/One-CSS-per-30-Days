# Dia 22 Design de Cartão de Perfil

## Descrição

No exercício de hoje fiz um design de cartões para perfil, com ícones das redes sociais, que pode ser usado em páginas perfil e como cartão de visita em páginas de artigos.

CodePen: [Design de Cartão de Perfil](https://codepen.io/albusquercus94/pen/jOwBvRZ)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* [HTML Tag Figcaption](https://www.w3schools.com/tags/tag_figcaption.asp)
* [CSS Propriedade Backface Visibility](https://www.w3schools.com/cssref/css3_pr_backface-visibility.asp)
* [CSS Propriedade Vertical Align](https://www.w3schools.com/cssref/pr_pos_vertical-align.asp)

## Passo a Passo

No HTML teremos a base do exercício, o que é estilizado. Aqui ficam 3 figuras com legendas. Essas legendas estão numa tag figcaption. Houve uma modificação aqui, invés de usar imagens para os ícones das redes sociais, achei mais fácil usar os ícones do Fonts Awesome. Assim fica o index:

~~~html
<body>
    <figure class="card">
        <img src="./Imagens/img1.jpg" alt="img1.jpg" />
        <figcaption>
            <h3>Pessoa 1</h3>
            <div class="icons">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </figcaption>
    </figure>

    <figure class="card">
        <div class="cover">
            <img src="./Imagens/img2.jpg" alt="img2.jpg" />
        </div>
        
        <figcaption>
            <h3>Pessoa 2</h3>
            <div class="icons">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </figcaption>
    </figure>

    <figure class="card">
        <img src="./Imagens/img3.jpg" alt="img3.jpg" />
        <figcaption>
            <h3>Pessoa 3</h3>
            <div class="icons">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </figcaption>
    </figure>
</body>
~~~

No CSS não tive muita dificuldade de entender o que estava fazendo, mas tive que fazer uma modificação do código, já que estava usando imagens diferentes das que haviam no artigo, tive que determinar a altura, largura e cobertura (object-fit) das imagens. O css fica assim:

~~~css
@import url(https://fonts.googleapis.com/css?family=Open+Sans:200);


body{
    height: 95vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #212121;
    text-align: center;
}

.card{
    font-family: 'Open Sans', Arial, sans-serif;
    position: relative;
    display: inline-block;
    margin: 10px;
    min-width: 230px;
    max-width: 315px;
    width: 100%;
    color: #000;
    text-align: left;
    font-size: 16px;
    background: #fff;
    border-radius: 5px;
}

.card *,
.card:before,
.card:after{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
} 

.card img{
    /*Início de modificação
    Aqui eu modifiquei pois as imagens possuem dimensões diferentes*/
    height: 100px;
    width: 100px;
    object-fit: cover;
    /*Fim da Modificação*/
    max-width: 35%;
    margin-top: -15px;
    margin-left: 60%;
    margin-bottom: 15px;
    backface-visibility: hidden;
    vertical-align: top;
    border-radius: 5px;
}

.card figcaption{
    position: absolute;
    top: 0;
    right: 40%;
    left: 0;
    bottom: 0;
    padding: 15px;
}

.card h3{
    margin: 0;
    font-size: 1.1em;
    font-weight: normal;
}

.card .icons{
    font-size: 1.6rem;
}

.card .icons a{
    color: #ccc;
}

.card .icons a:hover{
    color: #2980b9;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-22](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_22/Imagens/Resultado-Final-Dia-22.gif)