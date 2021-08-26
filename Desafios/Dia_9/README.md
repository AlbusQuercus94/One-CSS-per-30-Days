# Dia 9 Dropmorphism ou Gotas de Água com CSS

## Descrição

Criando gotas de água (dropmorphism) usando o css. Achei o código fácil e de simples compreensão. 

CodePen: [Dropmorphism](https://codepen.io/albusquercus94/pen/NWgPJOP)

## Tecnologias Usadas

* HTML
* CSS

## O que aprendi

* [CSS Propriedade Border Radius](https://www.w3schools.com/cssref/css3_pr_border-radius.asp)

## Passo a Passo

O index.html não tem muito código para esse exercício, apenas 4 divs: uma div mãe e 3 divs irmãs. O código é o seguinte:

~~~html
<body>
    <div class="c">
        <div class="drop drop1"></div>
        <div class="drop drop2"></div>
        <div class="text-c">
            <h1>DROPMORPHISM</h1>
            <p>Ambas as gotas são criadas usando CSS</p>
        </div>
    </div>
</body>
~~~

Agora vamos fazer as gotas usando o css e vamos deixar os comentários no código para identificar melhor o que cada seletor é responsável, exceto aqueles que são auto explicativos:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

body{
    height: 100vh;
    margin: 0;
    display: grid;
    place-items: center;
    background: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    background: #318cfe;
    font-family: 'Montserrat', sans-serif;
}

.c{
    position: relative;
}

.text-c{
    display: grid;
    place-items: center;
}
/*Definindo a forma da gota. O border-radius é o responsável pela forma da gota.*/
.drop{
    position: absolute;
    height: 200px;
    width: 200px;
    background: #54abfb;
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
    opacity: 0.8;
    border: 2px solid #3d93ff;
}
/*Responsável pela iluminação e sombra da gota.*/
.drop::before{
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: #318cfe;
    border-radius: 51% 49% 48% 52% / 62% 44% 56% 38%;
    box-shadow: -20px 30px 16px #1b6cfb,
        -40px 60px 32px #1b6cfb,
        inset -6px 6px 10px #1b6cfb,
        inset 2px 6px 10px #1a74e5,
        inset 20px -20px 22px white,
        inset 40px -40px 44px #a8ceff;
}
/*Responsável pelo reflexo de luz em cima da gota*/
.drop::after{
    content: '';
    position: absolute;
    height: 40px;
    width: 40px;
    background: #e6fdfb;
    border-radius: 44% 56% 46% 54% / 36% 50% 50% 64%;
    left: 130px;
    top: 40px;
    box-shadow: 16px 40px 0 -10px white;
    opacity: 0.8;
}
/*Modifica a posição de uma das gotas (drop1).*/
.drop1{
    left: -100px;
    top: -50px;
}
/*Além de modificar a posição de uma das gotas(drop2), também modifica a forma da mesma.*/
.drop2{
    right: -100px;
    bottom: -50px;
    z-index: -1;
    border-radius: 46% 50% 39% 54% / 56% 57% 50% 50%;
}
/*Modifica a sombra e a luz de uma das gotas (drop2).*/
.drop2::before{
    border-radius: 46% 50% 39% 54% / 56% 57% 50% 50%;
}

h1{
    font-size: 60px;
    color: white;
    line-height: 0;
}

p{
    line-height: 0;
    color: white;
    font-size: 20px;
}
~~~

Resultado das gotas usando o css:

![Resultado-Final-Dia-9](#)