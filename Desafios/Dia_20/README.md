# Dia 20 Predição de Procura

## Descrição

No exercício de hoje fiz uma coisa parecida com a predição de procura usando o CSS e um pouco de jQuery. Aqui se assemelha a predição de procura apenas na parte de aparecer uma lista de tudo que pode aparecer como resultado da pesquisa. Futuramente fazer com que haja um filtro de acordo com o que seja escrito no Input.

Essa é a primeira vez que tenho uma interação com jQuery e achei interessante, parece ser fácil de usar.

CodePen: [Predição de Procura](https://codepen.io/albusquercus94/pen/mdwWbrM)

## Tecnologias Usadas

* HTML
* CSS
* JavaScript
* jQuery

## O que aprendi

* [CSS Pseudo-Elemento Webkit-Scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)
* [JS Biblioteca jQuery: Sintaxe](https://www.w3schools.com/jquery/jquery_syntax.asp)
* [JS Biblioteca jQuery: .focusin()](https://api.jquery.com/focusin/)
* [JS Biblioteca jQuery: .show()](https://api.jquery.com/show/)
* [JS Biblioteca jQuery: .hide()](https://api.jquery.com/show/)
* [JS Biblioteca jQuery: .click()]()

## Passo a Passo

Nesse exercício eu fiz apenas uma coisa diferente do que é feito na postagem: invés de usar imagens para o que seriam os ícones, eu usei ícones do Fonts Awesome. Na head fica assim:

~~~html
<head>
    <!-- Contéudo padrão, as tag meta ficam antes dessas tag link.-->
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
~~~

No HTML tem apenas alguns exemplos para que o efeito do CSS apareça. Não esquecer de por o link do script da biblioteca do jQuery. O código fica assim:

~~~html
    <div class="searchBox">
        <button class="btn-menu">
            <i class="fas fa-bars"></i>
        </button>
        <input type="text" placeholder="Procurar" name="search" class="search" id="search">
        <button class="btn-search">
            <i class="fas fa-search"></i>
        </button>
    </div>

    <div class="search-modal" id="modal">
        <div class="search-modal-header">
            <h3>Procurar</h3>
            <span id="close">
                <i class="far fa-times-circle"></i>
            </span>
        </div>
        <div class="search-modal-body">
            <div class="message">
                <div class="message-avatar">
                    <img src="./Imagens/img1.jpg" alt="img1.jpg">
                </div>
                <div class="message-body">
                    <p>Nova notificação de Pessoa 1</p>
                    <small>20s atrás</small>
                </div>
            </div>
            <div class="message">
                <div class="message-avatar">
                    <img src="./Imagens/img2.jpg" alt="img2.jpg">
                </div>
                <div class="message-body">
                    <p>Nova notificação de Pessoa 2</p>
                    <small>20s atrás</small>
                </div>
            </div>
            <div class="message">
                <div class="message-avatar">
                    <img src="./Imagens/img3.jpg" alt="img3.jpg">
                </div>
                <div class="message-body">
                    <p>Nova notificação de Pessoa 3</p>
                    <small>20s atrás</small>
                </div>
            </div>
            <div class="message">
                <div class="message-avatar">
                    <img src="./Imagens/img4.jpg" alt="img4.jpg">
                </div>
                <div class="message-body">
                    <p>Nova notificação de Pessoa 4</p>
                    <small>20s atrás</small>
                </div>
            </div>
            <div class="message">
                <div class="message-avatar">
                    <img src="./Imagens/img5.jpg" alt="img5.jpg">
                </div>
                <div class="message-body">
                    <p>Nova notificação de Pessoa 5</p>
                    <small>20s atrás</small>
                </div>
            </div>
            <div class="message">
                <div class="message-avatar">
                    <img src="./Imagens/img6.jpg" alt="img6.jpg">
                </div>
                <div class="message-body">
                    <p>Nova notificação de Pessoa 6</p>
                    <small>20s atrás</small>
                </div>
            </div>
            <div class="message">
                <div class="message-avatar">
                    <img src="./Imagens/img7.jpg" alt="img7.jpg">
                </div>
                <div class="message-body">
                    <p>Nova notificação de Pessoa 7</p>
                    <small>20s atrás</small>
                </div>
            </div>
        </div>
    </div>

<!-- Não esquecer de por aqui a biblioteca do jQuery -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
    <script src="script.js"></script>
</body>
~~~

Assim o código fica da seguinte forma, antes do css:

![Resultado-Parcial-Dia-20](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_20/Imagens/Resultado-Parcial-Dia-20.png)

No CSS, só houve um novo seletor que eu não tinha visto antes, que é o ::-webkit-scrollbar, que personaliza o scrollbar (barra de rolagem) quando a propriedade overflow (y, x ou pura) é chamada com scroll. Abaixo está o código do CSS com a indicação do overflow e do pseudo elemento webkit:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Dosis&family=Lexend+Deca&display=swap');

body{
    margin: 0;
    padding: 16px;
    flex: 1;
    background: #2f94d8;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    overflow-y: none !important;
}

button i{
    transition: transform 0.25s;
}

button:hover i{
    transform: scale(1.2);
}

button:focus{
    outline: none;
}

input{
    font-family: 'Lexend Deca', sans-serif;
}

input::placeholder{
    font-family: 'Lexend Deca', sans-serif;
}

input:focus{
    outline: none;
}

.searchBox{
    height: 60px;
    width: 450px;
    max-width: 100%;
    background: white;
    border-radius: 10px;
    position: relative;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 50px;
    display: flex;
}

.searchBox .btn-menu{
    padding: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.searchBox .search{
    border: none;
    width: 100%;
}

.searchBox .btn-search{
    padding: 16px;
    background: transparent;
    border: none;
    cursor: pointer;
}

.search-modal{
    height: 400px;
    width: 450px;
    max-width: 100%;
    background: white;
    border-radius: 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 160px;
    animation: slideInUp 0.5s;
    display: none;
}

.search-modal-header{
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #000 17;
}

.search-modal-header h3{
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    float: left;
}

.search-modal-header span i{
    float: right;
    position: absolute;
    right: 16px;
    top: 25px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s all;
}

.search-modal-header span i:hover{
    transform: scale(1.1);
}

/*Aqui está o overflow que é alterado pelo pseudo elemento mais abaixo.*/
.search-modal-body{
    padding: 20px;
    height: 285px;
    overflow-y: scroll;
}
.search-modal-body .message{
    display: flex;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 10px;
}

.search-modal-body .message-avatar{
    margin-right: 16px;
    margin-top: 10px;
}

.search-modal-body .message-avatar img{
    height: 60px;
    width: 60px;
    border-radius: 30px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.45);
}

.search-modal-body .message-body{
    margin-left: 0;
    margin-top: 8px;
}

.search-modal-body .message-body p{
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 500;
    color: #444;
}

.search-modal-body .message-body small{
    font-weight: 400;
    font-family: Dosis;
    color: #777;
}


.search-modal-body .message:hover{
    background-color: #2f94d8 17;
}

/*A partir daqui é o uso do seletor pseudo elemento webkit scrollbar e variantes.*/

.search-modal-body::-webkit-scrollbar{
    width: 5px;
}

.search-modal-body::-webkit-scrollbar-track{
    background: transparent;
}

.search-modal-body::-webkit-scrollbar-thumb{
    background: #2f94d8;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: -1px 0 5px rgba(0, 0, 0, 0.15);
}

.search-modal-body::-webkit-scrollbar-thumb:hover{
    background: #555;

}

@keyframes slideInUp{
    from{
        -webkit-transform: translate3d(0, 15%, 0);
        transform: translate3d(0, 15%, 0);
        visibility: visible;
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}
~~~

No exercício de hoje há a utilização do jQuery para fazer a tela de resultado aparecer e sumir. É o meu primeiro contato com o jQuery e achei interessante. Não é dificil entender depois que pesquisa um pouco. Eis o código:

~~~js
/*Neste ele busca o id search no documento. Quando ele está com focus, ele faz o modal aparecer.*/
$('#search').focusin(function() {
    $('#modal').show();
});
/*Nesse daqui ele busca o id close (que é o icone de fechar) e quando ele é clicado o modal fica escondido.*/
$('#close').click(function (){
    $('#modal').hide();
});
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-20](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_20/Imagens/Resultado-Final-Dia-20.gif)