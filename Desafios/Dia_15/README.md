# Dia 15 Formulário Neomórfico

## Descrição

No exercício de hoje fiz aprendi a fazer um formulário neomórfico, onde os campos tem uma animação de profundidade quando o mouse passa em cima e/ou são clicados. Nesse dia o mais complicado foi achar um repositório de ícones livres para ser usados, já que o disponível no exercício não funcionou corretamente — por algum motivo.

O site de ícones que usei foi o [Font Awesome](https://fontawesome.com/).

CodePen:[Formulário Neomórfico](https://codepen.io/albusquercus94/pen/oNwYYVy)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* [CSS Propriedade Cursor](w3schools.com/cssref/pr_class_cursor.asp)
* [CSS Unidades PC](https://www.w3.org/Style/Examples/007/units.pt_BR.html)
* [HTML Atributo Scritp Integrity](https://www.w3schools.com/tags/att_script_integrity.asp)
* [HTML Atributo Scritp Cross-Origin](https://www.w3schools.com/tags/att_script_crossorigin.asp)

## Passo a Passo

No HTML vamos ter que ir um pouco antes da body e entrar na head, pois aqui temos que chamar um link da [Font Awesome](https://fontawesome.com/) que é importante para que os ícones apareçam na página.

Buscando sobre o porquê dos ícones não estavam aparecendo, aprendi um pouco sobre Integrity e Cross-Origin, que são formas de verificação e segurança: o primeiro para que alterações feitas no arquivo de origem não afetem a página, o segundo para conseguir uma permissão para que o domínio da requisição não seja o mesmo do servidor. Como fica no HTML:

~~~html
link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossorigin="anonymous"/>
~~~

Agora vamos para a body, onde vamos criar o formulário para o login. É bem simples e fácil entendimento: 

~~~html
<body>
    <form>
        <div class="segment">
            <h1>Entrar</h1>
        </div>
        
        <label>
            <input type="text" placeholder="Email Address">
        </label>
        
        <label>
            <input type="password" placeholder="Password">
        </label>
        <button class="red" type="button">
            <i class="fa fa-lock"> Log In</i>
        </button>

        <div class="segment">
            <button class="unit" type="button">
                <i class="fa fa-arrow-left"></i>
            </button>
            <button class="unit" type="button">
                <i class="fa fa-bookmark"></i>
            </button>
            <button class="unit" type="button">
                <i class="fa fa-cog"></i>
            </button>
            
            <div class="input-group">
                <label>
                    <input type="text" placeholder="Email Address">
                </label>
                <button class="unit" type="button">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
    </form>
</body>
~~~



 Assim o código fica da seguinte forma, antes do css:

![Resultado-Parcial-Dia-15](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_15/Imagens/Resultado-Parcial-Dia-15.png)

Agora o CSS, como tenho feito antes, o que eu achar que não é tão fácil entender eu vou comentar na área abaixo:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap');

body,
html{
    background-color: #ebecf0;
}
/*Creio que a existência desse seletor é para que, quando usado no futuro em um outro projeto, ele altere já padronize as áreas selecionadas aqui.*/
body,
p,
input,
select,
textarea,
button{
    font-family: 'Montserrat', sans-serif;
    letter-spacing: -0.2px;
    font-size: 16px;
}
/*A unidade aqui usada é a pc. Pesquisando um pouco sobre, há uma indicação para não usar para se apresentada em tela, mas em impressão, mas aqui como é para a sombra do texto ela não fica ruim.*/
div, p{
    color: #babecc;
    text-shadow: 1pc 1pc 1pc #fff;
}

form{
    padding: 16px;
    width: 320px;
    margin: 0 auto;
}

.segment{
    padding: 32px 0;
    text-align: center;
}

button, input{
    border: 0;
    margin-bottom: 24px;
    outline: 0;
    font-size: 16px;
    border-radius: 320px;
    padding: 16px;
    background-color: #ebecf0;
    text-shadow: 1px 1px 0 #fff;
}

label{
    display: block;
    margin-bottom: 24px;
    width: 100%;
}

input{
    margin-right: 8px;
    box-shadow: 
        inset 2px 2px 5px #babecc,
        inset -5px -5px 10px #fff;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    /*Aqui uma coisa que não serviu muito para a página. Tentei pesquisar sobre, mas o efeito que deveria fazer não faz. Na verdade é como se ainda não estivesse funcionando direito ou eu não soube como funciona.*/
    appearance: none;
    -webkit-appearance: none;
}

input:focus{
    box-shadow:
        inset 1px 1px 2px #babecc,
        inset -1px -1px 2px #fff;
}

button{
    color: #61677c;
    font-weight: bold;
    box-shadow: 
        -5px -5px 20px #fff,
        5px 5px 20px #babecc;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;
}

button:hover{
    box-shadow: 
        -2px -2px 5px #fff,
        2px 2px 5px #babecc;
}

button:active{
    box-shadow: 
        1px 1px 2px #babecc,
        -1px -1px 2px #fff;
}

button .icon{
    margin-right: 8px;
}

button .unit{
    border-radius: 8px;
    line-height: 0;
    width: 48px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    margin: 0 8px;
    font-size: 19.2px;
}

button .unit .icon{
    margin-right: 0;
}

button.red{
    display: block;
    width: 100%;
    color: #ae1100;
    margin-bottom: 0;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-15](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_15/Imagens/Resultado-Final-Dia-15.gif)