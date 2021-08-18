# Dia 2 - Neomorfismo de Formulários de Login e SignUp

## Descrição

O desafio do dia é criar uma página com neomorfismo (uma alternância) entre dois formulários: um formulário de Login e um formulário de SignUp.

Codepen = [Neomorfismo de Formulários](https://codepen.io/albusquercus94/pen/MWmZmxW)

## Tecnologias Usadas

* HTML
* CSS
* JavaScript

## O Que Aprendi

* [HTML Multiple Classes](https://www.w3schools.com/html/html_classes.asp)
* [CSS Pseudo-Classes](https://www.w3schools.com/css/css_pseudo_classes.asp)
* [CSS Animations](https://www.w3schools.com/css/css3_animations.asp)
* [CSS Flex-Direction](https://www.w3schools.com/cssref/css3_pr_flex-direction.asp)
* [CSS Box-Shadow](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp)
* [JavaScript Toggle Class](https://www.w3schools.com/howto/howto_js_toggle_class.asp)
* [JavaScript DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

## Passo a Passo

Esse desafio tem um passo a passo mais extenso, pois trabalha com três tecnologias e o CSS tem bastante coisa. Primeiro vamos para o mais simples, o HTML. De inicio criar o <body></body> e o <div></div> principal:

~~~html
<body>
    <div class="main">
    </div>
</body>
~~~

Agora vamos criar o primeiro formulário, o formulário de SignUp. Aqui vamos criar ícones para o cadastro com uma rede social e criar um <span></span> com inputs para criar com um email pessoal. O código é o seguinte:

~~~html
<div class="container a-container" id="a-container">
    <form class="form" id="a-form" method="" action="">
    	<h2 class="title">Criar uma Conta</h2>
    	<div class="form_icons">
        	<img class="form_icon" src="./Icons/facebook_icon.svg" alt="facebook_icon"/>
        	<img class="form_icon" src="./Icons/linkedin_icon.svg" alt="linkedin_icon"/>
        	<img class="form_icon" src="./Icons/twitter_icon.svg" alt="twitter_icon"/>
    	</div>
    	<span class="form_sapn"> ou registre-se com um email</span>
    	<input class="form_input" type="text" placeholder="Nome" />
    	<input class="form_input" type="text" placeholder="Email" />
    	<input class="form_input" type="password" placeholder="Senha" />
       <button class="button submit">Inscrever-se</button>
    </form>
</div>
~~~

Então vamos para o segundo formulário, o formulário de Login. É praticamente a mesma coisa que o anterior, com mudanças nos seguintes pontos: o botão vai ter um nome diferente, uma tag <a></a> para "Esqueceu a Senha?" e só tem dois inputs. Assim temos:

~~~html
<div class="container b-container" id="b-container">
    <form class="form" id="b-form" method="" action="">
        <h2 class="title">Entrar no Website</h2>
        <div class="form_icons">
            <img class="form_icon" src="./Icons/facebook_icon.svg" alt="facebook_icon"/>
            <img class="form_icon" src="./Icons/linkedin_icon.svg" alt="linkedin_icon"/>
            <img class="form_icon" src="./Icons/twitter_icon.svg" alt="twitter_icon"/>
        </div>
        <span class="form_span"> ou entre com sua conta de email</span>
        <input class="form_input" type="text" placeholder="Email" />
        <input class="form_input" type="password" placeholder="Password">
        <a class="form_link">Esqueceu a senha?</a>
        <button class="button submit">Entrar</button>
    </form>
</div>
~~~

E agora vamos fazer o container que é a parte principal desse desafio, aqui é onde o neomorfismo será apresentando na página. Aqui vai ter um botão para mudar de um formulário a outro e terá uma descrição simples de recepção. Eis o código:

~~~html
<div class="switch" id="switch-cnt">
    <div class="switch_circle"></div>
    <div class="switch_circle switch_circle--t"></div>
    <div class="switch_container" id="switch-c1">
        <h2 class="title">Welcome back!</h2>
        <p class="description">Para manter-se conectado conosco por favor entre com suas informações</p>
        <button class="switch_button button switch-btn">Entrar</button>
    </div>
    <div class="switch_contatiner is-hidden" id="switch-c2">
        <h2 class="switch_title title">Hello Friend!</h2>
        <p class="description">Entre com suas informações e começa uma jornada conosco.</p>
        <button class="switch_button button switch-btn">Inscrever-se</button>
    </div>
</div>
~~~

Agora vamos para a parte mais extensa do código, a estilização do html. Aqui eu vou separar em pequenas partes, ao menos o que eu consegui compreender de qual parte é responsável por qual tag. Não esquecer de chamar o link do arquivo.css na <head></head> do HTML.

Nesse ponto, nossa página estará assim:

![Dia 2 Sem CSS](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_2/imagens/HTML-feito.png)

Primeiro vamos para importar a fonte a ser utilizada, a estilização padrão com o seletor *, a estilização do <body></body> e da <div></div> cuja a classe é "main".

~~~css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');

*,
*::after,
*::before{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}

body{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    background-color: #ecf0f3;
    color: #a0a5a8;
}

.main{
    position: relative;
    width: 1000px;
    min-width: 1000px;
    min-height: 600px;
    height: 600px;
    padding: 25px;
    background-color: #ecf0f3;
    box-shadow: 10px 10px 10px #d1d9e6,
    -10px -10px 10px #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
}
~~~

Um ponto importante é que as tags são chamadas pura e simplesmente pelo nome, tipo acima o "body", já as classes das tags são chamadas com um ponto antes, tipo acima ".main".

Vamos agora estilizar todas as tags com a classe "container".

~~~css
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 600px;
    height: 100%;
    padding: 25px;
    background-color: #ecf0f3;
    transition: 1.25s;
}
~~~

Próximo passo é estilizar os formulários em si. Como temos dois formulários e eles tem classes quase idênticas, eles são estilizados juntos para não ter discrepância do modelo até o ponto que determinamos a localização deles. Então primeiro a estilização geral:

~~~css
.form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.form_icon{
    object-fit: contain;
    width: 30px;
    margin: 0 5px;
    opacity: 0.5;
    transition: 0.15s;

}

.form_icon:hover{
    opacity: 1;
    transition: 0.15s;
    cursor: pointer;
}

.form_input{
    width: 350px;
    height: 40px;
    margin: 4px 0;
    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    font-family: 'Monstserrat', sans-serif;
    background-color: #ecf0f3;
    transition: 0.25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6,
    inset -2px -2px 4px #f9f9f9;
}

.form_input:focus{
    box-shadow: inset 6px 6px 4px #d1d9e6,
    inset -6px -6px 4px #f9f9f9;
}

.form_span{
    margin-top: 30px;
    margin-bottom: 12px;
}

.title{
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #181818;
}

.button{
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #4b7e02;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6,
    -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
}
~~~

Para determinar o local de cada formulário, usamos a propriedade z-index do css. Aqui entrará também a tag <a></a> porque ela faz parte do segundo formulário. Formulários estão classificados como "a-container" e "b-container".

~~~css
.a-container{
    z-index: 100;
    left: calc(100% - 600px);
}

.form_link{
    color: #181818;
    font-size: 15px;
    margin-top: 25px;
    border-bottom: 1px solid #a0a5a8;
    line-height: 2;
}

.b-container{
    z-index: 0;
    left: calc(100% - 600px);
}
~~~

Agora vamos para o container que mudará de acordo com o formulário a mostra.

~~~css
.switch {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; /*Para textos maiores que uma linha
    */
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 400px;
    padding: 50px;
    z-index: 200;
    transition: 1.25s;
    background-color: #ecf0f3;
    overflow: hidden;
    box-shadow: 4px 4px 10px #d1d9e6,
    -4px -4px 10px #f9f9f9;
}
.switch_circle{
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6,
    inset -8px -8px 12px #f9f9f9;
    bottom: -60%;
    left: -60%;
    transition: 1.25s;
}

.switch_circle--t{
    top: -30%;
    left: 60%;
    width: 300px;
    height: 300px;
}

.switch_container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 400px;
    padding: 50px 55px;
    transition: 1.25s;
}

.switch_button{
    cursor: pointer;
}

.switch_button:hover{
    box-shadow: 6px 6px 10px #d1d9e6,
    -6px -6px 10px #f9f9f9;
    transform: scale(0.985);
    transition: 0.25s;
}

.switch_button:active,
.switch_button:focus{
    box-shadow: 2px 2px 6px #d1d9e6,
    -2px -2px 6px #f9f9f9;
    transform: scale(0.97);
    transition: 0.25s;
}
.description {
    font-size: 14px;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
}
~~~

Para terminar o .css, vamos determinar os seletores que serão utilizados pelo arquivo JavaScript para fazer o neomorfismo funcionar.

~~~css
.is-txr {
    left: calc(100% - 400px);
    transition: 1.25s;
    transform-origin: left;
}

.is-txl{
    left:0;
    transition: 1.25s;
    transform-origin: right;
}

.is-z200{
    z-index: 200;
    transition: 1.25s;
}

.is-hidden {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: 1.25s;
}
.is-gx {
    animation: is-gx 1.25s;
}

@keyframes is-gx {
    0%,
    10%,
    100%{
        width: 400px;
    }
    30%,
    50%{
        width: 500px;
    }
}
~~~

Agora, para terminar, vamos para o arquivo JavaScript. Aqui vamos determinar os containers que serão visíveis e qual lado o container switch ficara quando apertamos o botão. Aqui usamos os seletores acima determinados através de toggle, que mudará a classe da tag no HTML. Antes disso determinamos as variáveis que usaremos:

~~~js
let switchCtn = document.querySelector('#switch-cnt');
let switchC1 = document.querySelector('#switch-c1');
let switchC2 = document.querySelector('#switch-c2');
let switchCircle = document.querySelectorAll('.switch_circle');
let switchBtn = document.querySelectorAll('.switch-btn');
let aContainer = document.querySelector('#a-container');
let bContainer = document.querySelector('#b-container');
let allButtons = document.querySelectorAll('.submit');
~~~

Agora vamos para as funções que utilizaremos para fazer o neomorfismo funcionar.

~~~js
let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
    switchCtn.classList.add('is-gx');
    setTimeout(function(){
        switchCtn.classList.remove('is-gx');
    }, 1500);

    switchCtn.classList.toggle('is-txr');
    switchCircle[0].classList.toggle('is-txr');
    switchCircle[1].classList.toggle('is-txr');

    switchC1.classList.toggle('is-hidden');
    switchC2.classList.toggle('is-hidden');
    aContainer.classList.toggle('is-txl');
    bContainer.classList.toggle('is-txl');
    bContainer.classList.toggle('is-z200');
};

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++) allButtons[i].addEventListener('click', getButtons);
    for (var i = 0; i < switchBtn.length; i++) switchBtn[i].addEventListener('click', changeForm);
};

window.addEventListener('load', mainF);
~~~

No fim, nossa página estará assim:

![Dia 2 Resultado](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_2/imagens/Dia%202%20Resultado.gif)