# Dia 11 Personalizando o Input Radio

## Descrição

No exercício de hoje aprendi a personalizar o input do tipo radio, para que ele apareça como uma seleção de aba. Achei bem simples de fazer e tem uma possibilidade de utilizar futuramente bem alta.
Desta vez não teve nada de novo pra aprender, mas houve um reforço em saber Combinadores de CSS.

CodePen:[Personalizando Input Radio]()

## Tecnologias Usadas

* HTML
* CSS

## O que aprendi

* [CSS Combinadores](https://www.w3schools.com/css/css_combinators.asp)

## Passo a Passo

O passo a passo é pequeno como tem sido os últimos, mas ainda assim é fácil de se perder enquanto faz o código. Começando pelo HTML, o código tem três inputs que são a base das abas que será personalizada. Eis o código:

~~~html
<body>
    <div class="container">
        <div class="tabs">
            <input type="radio" name="tabs" id="radio-1" checked>
            <label class="tab" for="radio-1">Próximas <span class="notification">2</span></label>
            <input type="radio" name="tabs" id="radio-2">
            <label class="tab" for="radio-2">Em Desenvolvimento</label>
            <input type="radio" name="tabs" id="radio-3">
            <label class="tab" for="radio-3">Completados</label>
            <span class="glider"></span>
        </div>
    </div>
</body>
~~~

Numa delas tem um span dentro do label, que é para quando há notificação. O que entendi de apenas uma ter é justamente para diferenciar quando há e quando não há. 

Assim o código fica da seguinte forma, antes do css:

![Resultado-Parcial-Dia-11](#)

No css, como tenho feito, vou por o que achei mais complicado de entender como comentário e o que achei intuitivo sem comentar:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

:root{
    --primary-color: #185ee0;
    --secondary-color: #e6eef9;
}

*,
*:after,
*:before{
    box-sizing: border-box;
}

body{
    font-family: 'Inter', sans-serif;
    background-color: rgba(230, 238, 249, 0.5);
}

.container{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tabs{
    display: flex;
    position: relative;
    background-color: #fff;
    box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
        0 6px 12px 0 rgba(24, 94, 224, 0.15);
    padding: 0.75rem;
    border-radius: 99px;
}

.tabs *{
    z-index: 2;
}

input[type='radio']{
    display: none;
}

.tab{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: 200px;
    font-size: 1.25rem;
    font-weight: 500;
    border-radius: 99px;
    cursor: pointer;
    transition: color 0.15s ease-in;
}

.notification{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin-left: .75rem;
    border-radius: 50%;
    background-color: var(--secondary-color);
    transition: 0.15s ease-in;
}
/*A partir daqui fica um tanto confuso entender, mas com um pouco de calma dá para compreender o que cada seletor seleciona.*/
/*Aqui o seletor vai selecionar um input do tipo radio que esteva marcado (checked) e o label vizinho*/
input[type='radio']:checked + label{
    color: var(--primary-color);
}
/*Já aqui seleciona o mesmo que o anterior, mas adicionar uma tag a mais: quando tiver a classe notification no label ela terá as estilizações aqui descritas.*/
input[type='radio']:checked + label > .notification{
    background-color: var(--primary-color);
    color: #fff;
}
/*Essas próximas três fazem uma seleção do fundo, para que o fundo corra para onde está selecionado.*/
input[id='radio-1']:checked ~ .glider{
    transform: translateX(0);
}

input[id='radio-2']:checked ~ .glider{
    transform: translateX(100%);
}

input[id='radio-3']:checked ~ .glider{
    transform: translateX(200%);
}

.glider{
    position: absolute;
    display: flex;
    height: 54px;
    width: 200px;
    background: var(--secondary-color);
    z-index: 1;
    border-radius: 99px;
    transition: 0.25s ease-out;
}

@media(max-width: 700px){
    .tabs{
        transform: scale(0.9);
    }
}
~~~

Assim fica o resultado do exercício:

![Resultado-Final-Dia-11](#)