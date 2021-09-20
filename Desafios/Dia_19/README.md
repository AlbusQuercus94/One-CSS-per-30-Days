# Dia 19 Barra de Busca Animado: Carregando

## Descrição

No exercício de hoje foi para fazer uma barra de busca com um efeito animado. É fácil fazer depois de tudo que fiz até agora, foi mais um aprofundamento do que já aprendi.

CodePen: [Barra de Busca Animado: Carregando](https://codepen.io/albusquercus94/pen/PojbEPW)

## Tecnologias Usadas

* HTML
* CSS
* JavaScript

## O que aprendi

* Aprofundando os assuntos

## Passo a Passo

No HTML é apenas o de praxe: os itens necessários para poder fazer a barra de pesquisa. O código é usado é o seguinte:

~~~html
<head>
	[...]
    <!--Temos que chamar o link dos ícones-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <div id="search">
        <input type="text" placeholder="Procure por..." id="input" />
        <button id="button">
            <i class="fa fa-search"></i>
        </button>
        <div class="spinner">
            <i class="fa fa-spinner"></i>
        </div>
    </div>

    <div class="note">
        Clique no botão ou aperte ENTER
    </div>
    <script src="script.js"></script>
</body>
~~~

Assim o código fica da seguinte forma, antes do css:

![Resultado-Parcial-Dia-19](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_19/Imagens/Resultado-Parcial-Dia-19.png)

No CSS, não temos nada de novo, mas é um bom exercício para fixar os seletores que aprendi:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing:antialiased;
}

body{
    align-items: center;
    background: #974fe4;
    color: #fff;
    display: flex;
    font: 30px 'Lato', arial, sans-serif;
    flex-flow: column nowrap;
    height: 100vh;
    justify-content: center;
    width: 100vw;
}

.note{
    font-size: 0.375em;
    font-weight: bold;
    text-transform: uppercase;
    color: #6426a7;
}

#search{
    align-items: center;
    background: #8a44d5;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 0.5em 0;
    padding: 0.5em 0.5em 0.5em 1em;
    transition: all 0.5s;
    width: 500px;
}

#search:hover,
#search:focus{
    background: #853cd3;
}

#search button,
#search input{
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    font: inherit;
    outline: 0;
}

#search button{
    cursor: pointer;
    padding: 0 0.25em;
}

#search input{
    flex: 1;
}

#search input::placeholder{
    color: #fff;
}

#search .spinner{
    animation: spinner 1s infinite linear;
    display: none;
    padding: 0 0.25em;
}

#search.loading button{
    display: none;
}

#search.loading .spinner{
    display: block;
}

@keyframes spinner {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
~~~

Nesse exercício usamos o JavaScript para mudar o html, para adicionar uma classe não tem existe, quando o botão de procura é executado. O código é o seguinte:

~~~js
let search = document.getElementById('search');
let button = document.getElementById('button');
let input = document.getElementById('input');

function loading(){
    search.classList.add('loading');

    setTimeout(function(){
        search.classList.remove('loading');
    }, 1500);
}


button.addEventListener('click', loading);

input.addEventListener('keydown',function(){
    if(event.keyCode == 13) loading()
})
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-19](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_19/Imagens/Resultado-Final-Dia-19.gif)