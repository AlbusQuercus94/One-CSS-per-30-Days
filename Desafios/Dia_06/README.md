# Dia 6 Botão On-Off com Neomorfismo

## Descrição

O exercício do dia (vou chamar de exercício agora) é fazer um botão on-off usando o neomorfismo, que aprendemos no dia 2. Usamos de uma forma diferente, mas o princípio de apertar um botão e ocorrer uma animação é o mesmo.


Codepen = [Botão ON-OFF](https://codepen.io/albusquercus94/pen/JjJPxEE)



## Tecnologias Usadas

\* HTML

\* CSS



## O que aprendi

* [HTML Tag Label](https://www.w3schools.com/tags/tag_label.asp)

* [CSS Combinadores de Seletor](https://www.w3schools.com/css/css_combinators.asp)

## Passo a Passo

Primeiro vamos criar o HTML padrão,  com a <head></head> e o <body></body>. Então vamos na tag body e criamos um tag label que é onde criaremos o botão, mas com um diferencial: o que é feito é um <input></input> do tipo 'checkbox' e não uma tag button, pois usamos no css o estado 'checked' para mudar de um estado para outro.

A tag label terá uma tag input e quatro tags div ordenados da seguinte forma:

~~~html
<body>
    <!-- Aqui é a parte principal da página -->
    <label class="switch">
        <input type="checkbox" />
        <div class="slider slider-0">ON</div>
        <div class="slider slider-1">
            <div></div>
            <div></div>
        </div>
        <div class="slider slider-2"></div>
        <div class="slider slider-3">OFF</div>
    </label>
</body>
~~~

Agora vamos para o css, o código é o seguinte:

~~~css
/*Primeiro estilizar o body onde deixaremos todos os itens centralizados.*/
body{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #e8e8e8;
}
/*A classe 'switch' é onde estilizamos o botão como um circulo. Aqui é onde especificamos o tamanho do botão, o formato, cor, borda.*/
.switch{
    position: relative;
    display: inline-block;
    width: 80px;
    height: 80px;
    border: 2px solid #dcdcdc;
    background: #e0e0e0;
    box-shadow: 7px 7px 23px #bebebe,
    -7px -7px 23px #ffffff;
    overflow: hidden;
    border-radius: 60px;
}
/*Esse seletor é usado apenas para tirar a área de checagem do input. O quadradinho azul some após essa estilização.*/
.switch input{
    opacity: 0;
    width: 0;
    height: 0;
}
/*Aqui vamos para o efeito de neomorfismo, a partir daqui vamos trabalhar em como será a transição do botão on para off.
Na classe 'slide' vamos formatar o conteúdo do nosso botão, mas ainda sem efeito.*/
.slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    color: #9a9a9a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-family: sans-serif;
}
/*Durante o exercício, percebi que esses dois seletores não alterava em nada o resultado, sendo assim, não consegui identificar o motivo deles estarem no código.*/
input:checked + .slider::before{
    background: white;
    box-shadow: none;
}

input:focus + .slider{
    box-shadow: 0 0 1px #2196f3;
}
/*Aqui começa a estilização das animações. Esse é o div que tem o nome ON.*/
.slider-0{
    color: white;
    font-weight: 600;
    background-color: #49d84e;
}
/*Essa div de classe 'slider-1' é o que contém duas tags div dentro. Aqui a altura dela é de 50%, pois ela terá uma animação diferente dos outros sliders.*/
.slider-1 div{
    transition: 0.5s;
    position: absolute;
    width: 100%;
    height: 50%;
    left: 0;
}
/*Os próximos dois seletores são responsáveis pela animação do 'slider-1'. No primeiro animamos a primeira div dentro de slider-1. Sua animação será de correr do meio pra cima.*/
input:checked ~ .slider-1 div:first-child{
    transform: translateY(-100%);
    transition-delay: 1s;
}
/*Já esse seletor é da segunda div de slider-1, cuja animação será correr do meio para baixo.*/
input:checked ~ .slider-1 div:last-child{
    transform: translateY(100%);
    transition-delay: 1s;
}
/*Esse seletor faz o slider-2 correr para a direita.*/
input:checked ~ .slider-2{
    transform: translateX(100%);
    transition-delay: 0.5s;
}
/*Esse seletor faz o slider-3 correr para a esquerda.*/
input:checked ~ .slider-3{
    transform: translateX(-100%);
    transition: 0.5s;
}
/*Aqui personalizamos o slider-1 (primeira e segunda div), slider-2 e o slider-3, respectivamente.*/
.slider-1 div:first-child{
    transform: translateY(0);
    top: 0;
    background-color: #f3f3f3;
    transition-delay: 0s;
}

.slider-1 div:last-child{
    transform: translateY(0);
    bottom: 0;
    background-color: #f3f3f3;
    border-top: 1px solid #e0e0e0;
    transition-delay: 0s;
}

.slider-2{
    background-color: #e6e6e6;
    transition-delay: 0.5s;
    transform: translateX(0);
    border-left: 1px solid #d2d2d2;
}

.slider-3{
    background-color: #d2d2d2;
    transition-delay: 1s;
    transform: translateX(0);
    border-right: 1px solid #d2d2d2;
}
~~~

O resultado do código é o seguinte:

![Resultado-Botao-On-Off](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_06/Imagens/Resultado-Final-Botao-Neomorfismo.gif)