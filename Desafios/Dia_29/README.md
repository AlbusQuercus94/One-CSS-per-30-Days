# Dia 29 Efeito Sobre Cartão: Expansivo

## Descrição

Mais um exercício de CSS, o penúltimo. Desta vez foi fazer cartões que expandem-se quando o mouse passa sobre. É bem legal de fazer e serviu também como um reforço.

CodePen: [Efeito Sobre Cartão: Expansivo](https://codepen.io/albusquercus94/pen/powdBzQ)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que já foi estudado

## Passo a Passo

O HTML desta vez é um pouco mais extenso do que os últimos, porém segue sem ter nenhuma novidade:

~~~html
<body>
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="./Imagens/img1.jpg" alt="img1.jpg">
                    <h3>Design</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#">Saiba mais</a>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="./Imagens/img2.jpg" alt="img2.jpg">
                    <h3>Codificar</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <a href="#">Saiba mais</a>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="./Imagens/img3.jpg" alt="img3.jpg">
                    <h3>Lançar</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <a href="#">Saiba mais</a>
                </div>
            </div>
        </div>
    </div>
</body>
~~~

No CSS também não houve nada de novo, mas é sempre importante fazer para reforçar o que foi já estudado:

~~~css
body{
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: consolas;
}

.container{
    width: 1000px;
    position: relative;
    display: flex;
    justify-content: space-between;
}

.container .card{
    position: relative;
    cursor: pointer;
}

.container .card .face{
    width: 300px;
    height: 200px;
    transition: 0.5s;
}


.container .card .face.face1{
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}


.container .card:hover .face.face1{
    background: tomato;
    transform: translateY(0);
}

.container .card .face.face1 .content{
    opacity: 0.2;
    transition: 0.5s;
}

.container .card:hover .face.face1 .content{
    opacity: 1;
}

.container .card .face.face1 .content img{
    max-width: 100px;
}

.container .card .face.face1 .content h3{
    margin: 10px 0 0;
    padding: 0;
    color: #fff;
    text-align: center;
    font-size: 1.5em;
}

.container .card .face.face2{
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
}

.container .card:hover .face.face2{
    transform: translateY(0);
}

.container .card .face.face2 .content p{
    margin: 0%;
    padding: 0%;
}

.container .card .face.face2 .content a{
    margin: 15px 0 0 ;
    display: inline-block;
    text-decoration: none;
    font-weight: 900;
    color: #333;
    padding: 5px;
    border: 1px solid #333;
}

.container .card .face.face2 .content a:hover{
    background: #333;
    color: #fff;
}
/*Aqui eu fiz para formatar as imagens escolhidas.*/
img{
    width: 100px;
    height: 100px;
    object-fit: cover;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-29](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_29/Imagens/Resultado-Final-Dia-29.gif)

