# Dia 25 Efeito Mouse sobre Cartão: Apresentação

## Descrição

Apesar de simples e de ter feito algo parecido antes, o efeito do exercício de hoje é diferente: foi feito usando a propriedade transform. Foi interessante fazer e mais um efeito para ser usado no futuro.

CodePen: [Efeito Mouse sobre Cartão: Apresentação](https://codepen.io/albusquercus94/pen/dyRzGKg)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que já foi aprendido

## Passo a Passo

O HTML é simples, o index tem na sua body o seguinte:

~~~html
<body>
    <figure class="container">
        <img src="./Imagens/img1.jpg" alt="img1.jpg" />
        <figcaption>
            <h3>Pessoa 1
                <span>Sobrenome</span>
            </h3>
        </figcaption>
        <a href="#"></a>
    </figure>
</body>
~~~

Já no CSS, o efeito foi um pouco confuso de entender, mas isso ocorre porque segui o vídeo, repetindo tudo que era escrito. Ao verificar depois de tudo pronto, entendi como o efeito é feito. Comentado abaixo junto com o código do css:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap');

body{
    background-color: #212121;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container{
    background-color: rgb(41, 46, 57);
    color: #fff;
    display: inline-block;
    font-family: 'Roboto',sans-serif;
    font-size: 24px;
    margin: 10px;
    max-width: 400px;
    min-width: 230px;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%;
}

.container *{
    box-sizing: border-box;
    transition: all 0.45s ease;
}

.container::before,
.container::after{
    background-color: rgba(46, 52, 64, 0.5);
    border-top: 2em solid rgba(46, 52, 64, 0.5);
    border-bottom: 2em solid rgba(46, 52, 64, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    transition: all 0.3s ease;
    z-index: 1;
    /*Aqui é o que cria a dificuldade de entender o efeito. Por deixar a opacidade dessa camada como zero, não há como vê o efeito a seguir.*/
    opacity: 0;
}
/*Ao usar o transform: scaleY(2), a altura da camada escondida dobra de tamanho, mas como está "invisível" não percebi a mudança.*/
.container::before{
    transform: scaleY(2);
}

.container::after{
    transform: scaleY(2);
}

.container img{
    vertical-align: top;
    max-width: 100%;
    backface-visibility: hidden;
}

.container h3{
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0;
    text-transform: uppercase;
}

.container h3 span{
    display: block;
    font-weight: 700;
}

.container a{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
}

.container:hover img{
    opacity: 0.7;
}

.container figcaption{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.1em;
    opacity: 0;
    z-index: 2;
    transition-delay: 0s;
}
/*Aqui cria o efeito de apresentação, fazendo com que a escala (scale) volte ao tamanho normal, como se tivesse entrando na imagem. E o efeito é visto porque muda a opacidade para 1.*/
.container:hover::before,
.container:hover::after{
    transform: scale(1);
    opacity: 1;
}

.container:hover figcaption{
    opacity: 1;
    transition-delay: 0.1s;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-25](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_25/Imagens/Resultado-Final-Dia-25.gif)

