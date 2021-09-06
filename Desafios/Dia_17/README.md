# Dia 17 Revelação de Cartão: Cortina

## Descrição

Nesse exercício aprendi a fazer uma animação que abre-se como cortina, apresentando o conteúdo que há por trás dela.

CodePen:[Revelação Cartão: Cortina](https://codepen.io/albusquercus94/pen/jOwVBjJ)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Revisei o que já foi aprendido

## Passo a Passo

No HTML, colocamos os exemplos que queremos usar como conteúdo do cartão e uma div que será a responsável por esconder o cartão. Fica assim o código:

~~~html
<body>
    <div class="container">
        <div class="content">
            <h1>Release the Kraken</h1>
            <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti obcaecati iure harum distinctio sapiente omnis temporibus nisi atque ratione, aspernatur rerum perferendis ducimus nobis officia modi facere possimus, tempora praesentium.
            </h3>
        </div>
        <div class="flap"></div>
    </div>
</body>
~~~

Já o CSS, não tem nada de novo, é bem parecido com o que foi feito no Dia 6. Segue o código do CSS:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;900&display=swap');

body{
    background: #f2f2f2;
}

.container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    height: 400px;
    width: 600px;
    background: #f2f2f2;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0px 0px 20px 8px #d0d0d0;
}

.content{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    text-align: justify;
    color: black;
    padding: 40px;
    font-family: 'Merriweather',sans-serif;
}

h1{
    font-weight: 900;
    text-align: center;
}

h3{
    font-weight: 300;
}

.flap{
    width: 100%;
    height: 100%;
}

.flap::before{
    position: absolute;
    content: '';
    height: 100%;
    width: 50%;
    background: white;
    background-position: 100px;
    background-repeat: no-repeat;
    transition: 1s;
}

.flap::after{
    position: absolute;
    content: '';
    height: 100%;
    width: 50%;
    right: 0;
    background: white;
    background-position: -200px;
    background-repeat: no-repeat;
    transition: 1s;
}

.container:hover .flap::after{
    transform: translateX(300px);
}

.container:hover .flap::before{
    transform: translateX(-300px);
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-17](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_17/Imagens/Resultado-Final-Dia-17.gif)