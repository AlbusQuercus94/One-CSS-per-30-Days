# Dia 30 Design de Cartão de Perfil: Simples

## Descrição

Último exercício dos 30 dias, outro design de cartão simples de fazer. Lembrando: reforço é exercício e exercício é pratica.

CodePen: [Design de Catão de Perfil: Simples](https://codepen.io/albusquercus94/pen/yLXpZbY)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que já foi aprendido

## Passo a Passo

O HTML é simples, como tem sido nos últimos, sem nenhuma novidade. Lembrando de por os links do estilos.css e da biblioteca de ícones na head:

~~~html
<body>
    <figure class="card">
        <div class="profile-image">
            <img src="./Imagens/img1.jpg" alt="">
        </div>
        <figcaption>
            <h3>Pessoa 1</h3>
            <h5>Profissão 1</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="icons">
                <a href="#"> <i class="fab fa-twitter"></i></a>
                <a href="#"> <i class="fab fa-reddit-alien"></i></a>
                <a href="#"> <i class="fab fa-instagram"></i></a>
            </div>
        </figcaption>
    </figure>

    <figure class="card">
        <div class="profile-image">
            <img src="./Imagens/img2.jpg" alt="">
        </div>
        <figcaption>
            <h3>Pessoa 2</h3>
            <h5>Profissão 2</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="icons">
                <a href="#"> <i class="fab fa-twitter"></i></a>
                <a href="#"> <i class="fab fa-reddit-alien"></i></a>
                <a href="#"> <i class="fab fa-instagram"></i></a>
            </div>
        </figcaption>
    </figure>

    <figure class="card">
        <div class="profile-image">
            <img src="./Imagens/img3.jpg" alt="">
        </div>
        <figcaption>
            <h3>Pessoa 3</h3>
            <h5>Profissão 3</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="icons">
                <a href="#"> <i class="fab fa-twitter"></i></a>
                <a href="#"> <i class="fab fa-reddit-alien"></i></a>
                <a href="#"> <i class="fab fa-instagram"></i></a>
            </div>
        </figcaption>
    </figure>
</body>
~~~

CSS

No CSS não teve nada de novo, mas o reforço é sempre válido:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Oswald&display=swap');

body{
    background-color: #212121;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.card{
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin: 10px;
    min-width: 250px;
    max-width: 310px;
    width: 100%;
    background-color: #fff;
    color: #212121;
    text-align: center;
    font-size: 16px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.card *{
    box-sizing: border-box;
}

.card .profile-image{
    padding: 15% 10% 0;
}

.card .profile-image img{
    /**/
    height: 124px;
    object-fit: cover;
    width: 124px;
    /**/
    max-width: 100%;
    vertical-align: top;
    position: relative;
    border-radius: 50%;
    /*Por usar imagens de dimensões diferentes, o max-width deixa uma aparência estranha.*/
    /* max-width: 40%; */
}

.card figcaption{
    padding: 5% 10% 15%;
}

.card h3{
    font-family: 'Oswald';
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    margin: 3px 0;
}

.card h5{
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    color: #888;
    letter-spacing: 1px;
}

.card .icons i{
    color: #999;
    display: inline-block;
    margin-right: 5px;
    font-size: 1.5em;
}

.card .icons i:hover{
    color: #555;
}

.card .icons i a{
    text-decoration: none;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-30](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_30/Imagens/Resultado-Final-Dia-30.gif)