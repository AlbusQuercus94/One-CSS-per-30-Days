# Dia 18 Formulário Neomórfico com Fundo Transparente

## Descrição

O exercício do dia é fazer um formulário estilo o do Dia 2, mas desta vez com um plano de fundo que apareça, exceto na caixa de formulário ativa.

CodePen:[SignIn|SignUp Neomórfico Fundo Transparente](https://codepen.io/albusquercus94/pen/gORLWMj)

## Tecnologias Usadas

* HTML
* CSS
* JavaScript

## O que aprendi

* [CSS Propriedades Background-Attachment](https://www.w3schools.com/cssref/pr_background-attachment.asp)

## Passo a Passo

Parecido com o do dia 2, no HTML está o exemplo a ser usado para fazer o neomorfismo:

~~~html
<body>
    <div class="container right-panel-active">
        <!-- Inscrever-se -->
        <div class="container-form container-signup">
            <form action="#" class="form" id="form1">
                <h2 class="form-title">Inscrever-se</h2>
                <input type="text" placeholder="User" class="input" />
                <input type="email" placeholder="Email" class="input" />
                <input type="password" placeholder="Password" class="input" />
                <button class="btn">Inscrever-se</button>
            </form>
        </div>
        <!-- Entrar -->
        <div class="container-form container-signin">
            <form action="#" class="form" id="form2">
                <h2 class="form-title">Entrar</h2>
                <input type="email" placeholder="Email" class="input" />
                <input type="password" placeholder="Password" class="input" />
                <a href="#" class="link">Esqueceu a senha?</a>
                <button class="btn">Entrar</button>
            </form>
        </div>
        <!-- Camada Animada -->
        <div class="container-overlay">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <button class="btn" id="signIn">Entrar</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <button class="btn" id="signUp">Inscrever-se</button>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
~~~

Assim o código fica da seguinte forma, antes do css:

![Resultado-Parcial-Dia-18](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_18/Imagens/Resultado-Parcial-Dia-18.png)

No CSS que que vamos para o foco do exercício, é bem parecido com o do dia 2, mas desta vez usamos variáveis para agilizar algumas coisas.

Nesse exercício, o que dá o efeito de transparência é o uso da propriedade background. Usando de uma forma que duas imagens, usadas como plano de fundo, ficassem na mesma posição fazendo com que sejam uma só. Eis o código comentando o que eu achei mais complicado:

~~~css
:root{
    /*Variáveis*/
    --white: #e9e9e9;
    --gray: #333;
    --blue: #0367a6;
    --lightblue: #008997;

    --button-radius: 0.7rem;

    --max-width: 758px;
    --max-height: 420px;

    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body{
    align-items: center;
    background-color: var(--white);
    background: url(./Imagens/img-1.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    height: 100vh;
    place-items: center;
}

.form-title{
    font-weight: 300;
    margin: 0;
    margin-top: 1.25rem;
}

.link{
    color: var(--gray);
    font-size: 0.9rem;
    margin: 1.5rem 0;
    text-decoration: none;
}

.container{
    background-color: var(--white);
    border-radius: var(--button-radius);
    box-shadow: 
        0rem 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
        0rem 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    height: var(--max-height);
    max-width: var(--max-width);
    overflow: hidden;
    position: relative;
    width: 100%;
}

.container-form{
    height: 100%;
    position: absolute;
    top:0;
    transition: all 0.6s ease-in-out;
}
/*Para compreender alguns valores, eis o ponto importante. O container signin e signup ficam com a metade do tamanho do container form, assim, quando se faz a movimentação no eixo X, para que eles vão para o campo do outro (saiam de sua própria área), o valor necessário é de 100% deles.*/
.container-signin{
    left: 0;
    width: 50%;
    z-index: 2;
}
/*Todos que estão com right-panel-active são os modificados durante o javascritp, para fazer a alternancia*/
.container.right-panel-active .container-signin{
    transform: translateX(100%);
    left: 0;
    opacity: 0;
    width: 50%;
    z-index: 1;
}

.container-signup{
    left: 0;
    opacity: 0;
    width: 50%;
    z-index: 1;
}

.container.right-panel-active .container-signup{
    animation: show 0.6s;
    opacity: 1;
    transform: translateX(100%);
    z-index: 5;
}

.container-overlay{
    height: 100%;
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: transform 0.6s ease-in-out;
    width: 50%;
    z-index: 100;
}

.container.right-panel-active .container-overlay{
    transform: translateX(-100%);
}

.overlay{
    background-color: var(--lightblue);
    background: url(./Imagens/img-1.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    left: -100%;
    position: relative;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 200%;
}

.container.right-panel-active .overlay{
    transform: translateX(50%);
}

.overlay-panel{
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: absolute;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 50%;
}

.overlay-left{
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left{
    transform: translateX(0%);
}

.overlay-right{
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right{
    transform: translateX(20%);
}

.btn{
    background-color: var(--blue);
    background-image: linear-gradient(
        90deg,
        var(--blue) 0%,
        var(--lightblue) 74% 
    );
    border-radius: 20px;
    border: 1px solid var(--blue);
    color: var(--white);
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 0.9rem 4rem;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

.form .btn{
    margin-top: 1.5rem;
}

.btn:active{
    transform: scale(0.95);
}

.btn:focus{
    outline: none;
}

.form{
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 3rem;
    height: 100%;
    text-align: center;
}

.input{
    background-color: #fff;
    border: none;
    padding: 0.9rem 0.9rem;
    margin: 0.5rem 0;
    width: 100%;
}

@keyframes show{
    0%,
    49.99%{
        opacity: 0;
        z-index: 1;
    }
    50%,
    100%{
        opacity: 1;
        z-index: 5;
    }
}
~~~

Antes de completar, não podemos esquecer do JavaScript, como no exercício 2, faz com que os formulários alternem entre si.

~~~js
const signInBtn = document.getElementById('signIn');
const signUpBtn = document.getElementById('signUp');
const firstForm = document.getElementById('form1');
const secondForm = document.getElementById('form2');
const container = document.querySelector('.container');

signInBtn.addEventListener('click', () =>{
    container.classList.remove('right-panel-active')
})

signUpBtn.addEventListener('click', () =>{
    container.classList.add('right-panel-active')
})

firstForm.addEventListener('submit', (e) => e.preventDefault())
secondForm.addEventListener('submit', (e) => e.preventDefault())


~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-18](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_18/Imagens/Resultado-Final-Dia-18.gif)