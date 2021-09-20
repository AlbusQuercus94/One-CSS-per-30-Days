# Dia 24 Design de Cartões de Perfil: Caixa de Texto

## Descrição

O exercício de hoje é uma outra versão dos cartões de perfil. Desta vez tem uma caixa de diálogo em cima, como se a imagem estivesse se apresentando. É mais um exercício de reforço que vale a pena fazer.

CodePen: [Design de Cartões de Perfil: Caixa de Texto](https://codepen.io/albusquercus94/pen/eYREOaX)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que já foi aprendido

## Passo a Passo

O HTML do exercício é composto por 3 figures, onde as informações do perfil estará explicitada. Antes de mostrar a body do index, lembrar de criar na head o link do .css e, como foi usado ícones nesse exercício, o link dos ícones. O index com a head fica assim:

~~~html
<head>
    <!--As tags meta e a tag title -->
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <figure class="card">
        <figcaption>
            <h3>Pessoa 1</h3>
            <h4>Profissão</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse, laborum mollitia, obcaecati hic reiciendis iure ipsa ab rem nulla, beatae eveniet delectus? Iste voluptates, est ratione nulla quisquam illo.</p>
        </figcaption>
        <div class="profile-image">
            <img src="./Imagens/img1.jpg" alt="img1.jpg" />
            <div class="icons">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </figure>

    <figure class="card">
        <figcaption>
            <h3>Pessoa 2</h3>
            <h4>Profissão</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse, laborum mollitia, obcaecati hic reiciendis iure ipsa ab rem nulla, beatae eveniet delectus? Iste voluptates, est ratione nulla quisquam illo.</p>
        </figcaption>
        <div class="profile-image">
            <img src="./Imagens/img2.jpg" alt="img2.jpg" />
            <div class="icons">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </figure>

    <figure class="card">
        <figcaption>
            <h3>Pessoa 3</h3>
            <h4>Profissão</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse, laborum mollitia, obcaecati hic reiciendis iure ipsa ab rem nulla, beatae eveniet delectus? Iste voluptates, est ratione nulla quisquam illo.</p>
        </figcaption>
        <div class="profile-image">
            <img src="./Imagens/img3.jpg" alt="img3.jpg" />
            <div class="icons">
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
    </figure>
</body>
~~~

No CSS, tem tudo que já aprendi antes, sem nenhuma novidade. Nesse eu tive que fazer uma alteração como o anterior, para que as imagens ficassem quadradas. Também precisei importar do Fonts Google dois estilos: Montserrat e Open Sans. O estilos.css fica assim:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

body{
    background-color: #212121;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.card{
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    position: relative;
    display: inline-block;
    margin: 10px;
    min-width: 230px;
    max-width: 315px;
    width: 100%;
    color: #141414;
    text-align: left;
    line-height: 1.4em;
    font-size: 14px;
    box-shadow: none !important;
}

.card *{
    box-sizing: border-box;
}

.card .profile-image img{
    /**/
    height: 80px;
    width: 80px;
    object-fit: cover;
    /**/
    border-radius: 5px;    
    vertical-align: top;
    float: left;
}

.card figcaption{
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 25px;
    display: inline-block;
    margin-bottom: 15px;
    border-radius: 5px;
    position: relative;
}

.card figcaption::after{
    content: '';
    position: absolute;
    left: 32px;
    top: 100%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #333 transparent transparent transparent;
}

.card h3,
.card h4,
.card p{
    margin: 0 0 5px;
}

.card h3{
    font-weight: 600;
    font-size: 1.2em;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
}

.card h4{
    color: #8c8c8c;
    font-weight: 400;
    letter-spacing: 2px;
}

.card p{
    font-size: 0.9em;
    letter-spacing: 1px;
    opacity: 0.9;
}

.card .icons{
    padding: 20px 90px;
}

.card i{
    padding: 10px 2px;
    display: inline-block;
    font-size: 18px;
    font-weight: normal;
    color: #fff;
    opacity: 0.75;
}

.card i:hover{
    opacity: 1;
    transition: all 0.35s ease;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-24](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_24/Imagens/Resultado-Final-Dia-24.gif)

