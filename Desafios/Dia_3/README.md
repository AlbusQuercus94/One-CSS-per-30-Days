# Dia 3 Painel Responsivo Gerenciador de Tarefas

## Descrição

 O desafio do dia é criar uma página gerenciadora de tarefas responsiva. O responsivo será determinado com a mudança da largura da tela nos valores: 900px, 700px e 520px.

## Tecnologias Usadas

* HTML
* CSS

## O que aprendi

* [CSS Responsive Web Design](https://www.w3schools.com/css/css_rwd_intro.asp)
* [CSS Responsive Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
* [CSS Variáveis](https://www.w3schools.com/css/css3_variables.asp)
* [CSS Background Image](https://www.w3schools.com/cssref/func_linear-gradient.asp)
* [CSS Background Blend](https://www.w3schools.com/cssref/pr_background-blend-mode.asp)
* [CSS Seletor Element + Element](https://www.w3schools.com/cssref/sel_element_pluss.asp)

## Passo A Passo

Esse desafio é maior que o anterior, pois ele tem muito conteúdo de exemplo no HTML para dar um contexto ao trabalho. O desafio é divido em 3 partes: a barra esquerda, o centro (o conteúdo geral) e a barra direita.

Primeiro criamos o arquivo .html com o <head></head> e o <body></body>. Dentro da tag body criamos uma <div></div> que é onde criaremos o painel. De início fica assim o código:

~~~html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Painel de Gerenciamento de Tarefas Responsivo</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="task-manager"></div>
  </body>
</html>
~~~

Agora vamos criar a barra esquerda da nossa pagina dentro de uma <div></div>  com a classe "left-bar". Dentro de "left-bar" criaremos duas <div></div>: uma que é a parte superior (upper-part) e um com o conteúdo da barra esquerda (left-content). O código fica assim:

~~~html
 <!-- Barra Esquerda -->
<div class="left-bar">
    <div class="upper-part">
        <div class="actions">
            <div class="circle"></div>
            <div class="circle-2"></div>
        </div>
    </div>
    <div class="left-content">
        <ul class="action-list">
            <li class="item">
                <img class="feather feather-inbox" src="./Icons/inbox_icon.svg" alt="feather-inbox" />
                <span>Inbox</span>
            </li>
            <li class="item">
                <img class="feather feather-star" src="./Icons/star_icon.svg" alt="feather-star" />
                <span>Hoje</span>
            </li>
            <li class="item">
                <img class="feather feather-calendar" src="./Icons/calender_icon.svg" alt="feather-calendar" />
                <span>Próximos</span>
            </li>
            <li class="item">
                <img class="feather feather-hash" src="./Icons/hash_icon.svg" alt="feather-hash" />
                <span>Importante</span>
            </li>
            <li class="item">
                <img class="feather feather-users" src="./Icons/users_icon.svg" alt="feather-users" />
                <span>Encontros</span>
            </li>
            <li class="item">
                <img class="feather feather-trash" src="./Icons/trash_icon.svg" alt="feather-trash" />
                <span>Lixo</span>
            </li>
        </ul>
        <ul class="category-list">
            <li class="item">
                <img class="feather feather-users" src="./Icons/users_icon.svg" alt="feather-users" />
               <span>Família</span>
            </li>
            <li class="item">
                <img class="feather feather-sun" src="./Icons/sun_icon.svg" alt="feather-sun" />
                <span>Férias</span>
            </li>
            <li class="item">
                <img class="feather feather-trending-up" src="./Icons/trending_icon.svg" alt="feather-trending-up" />
                <span>Festival</span>
                    </li>
            <li class="item">
                <img class="feather feather-zap" src="./Icons/zap_icon.svg" alt="feather-zap">
                <span>Concertos</span>
            </li>
        </ul>
    </div>
</div>
~~~

Nossa página encontra-se assim:

![HTML-left-bar](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_3/Images/Images-README/HTML-Left-Bar.png)

Para não ser confuso, a cada parte do html feito, vamos para o css e estilizamos ele. Então criamos um .css onde, de início, importamos do Google Fonts a DM Sans nos tamanhos 400, 600 e 700. Depois criamos as configurações default (*) e as variáveis que serão usadas de forma global. O início do css fica assim:

~~~css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

*{
    box-sizing: border-box;
    outline: none;
}
:root{
    --bg-color: #f5f8ff;
    --main-color: #353536;
    --secondary-color: #8e92a4;
    --main-text-color: #5d606b;
    --secondary-dark-color: #9496a5;
    --tag-color-one: #e0fbf6;
    --tag-color-text-one: #58c2a9;
    --tag-color-two: #ece7ec;
    --tag-color-text-two: #8972f3;
    --tag-color-three: #fde7ea;
    --tag-color-text-three: #e77f89;
    --tag-color-four: #f7f8fc;
    --tag-color-text-four: #a0a6b5;
    --checkbox-color: #009e90;
    --button-color: #49beb7;
    --box-color: #fff1d6;
    --box-color-2: #d3e6ff;
    --box-color-3: #ffd9d9;
    --box-color-4: #daffe5;
    --task-color: #777982;
}
~~~

Agora vamos estilizar a tag <body></body>.

~~~css
body,
.item,
.top-part,
.top-part .count{
    display: flex;
    align-items: center;
}

body{
    margin: 0;
    justify-content: center;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height: 100vh;
    padding: 20px;
    font-family: "DM Sans", sans-serif;
    font-size: 12px;
    background-image: linear-gradient(
            21deg,
            rgba(64, 83, 206, 0.3697003234675773) 68%,
            rgba(255, 206, 196, 0.5) 163%
        ),
        linear-gradient(
            163deg,
            rgba( 49, 146, 170, 0.07944489965716128) 86%,
            rgba(239, 112, 138, 0.5) 40%
        ),
        linear-gradient(
            30deg,
            rgba(76, 79, 173, 0.6173675716587805) 22%,
            rgba(237, 106, 134, 0.5) 169%
        ),
        linear-gradient(
            48deg,
            rgba(31, 85, 147, 0.7323890641868473) 64%,
            rgba(247, 126, 132, 0.5) 43%
        );
    background-blend-mode: overlay, multiply, color, normal;
}
~~~

Ainda no âmbito do geral, vamos estilizar a lista não ordernada (<ul></ul>) e a classe "task-manager":

~~~css
ul{
    list-style-type: none;
    padding: 0;
}

.task-manager{
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    height: 90vh;
    max-height: 900px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011),
        0 0.7px 5.3px rgba(0, 0, 0, 0.016),
        0 1.3px 10px rgba(0, 0, 0, 0.02),
        0 2.2px 17.9px rgba(0, 0, 0, 0.024),
        0 4.2px 33.4px rgba(0, 0, 0, 0.029),
        0 10px 80px rgba(0, 0, 0, 0.04);
    overflow: hidden;
}
~~~

Agora vamos para a estilização da barra esquerda, cuja a classe é "left-bar", junto com alguns itens que tem internamente. Aqui não teremos nenhum tipo de estilização além do básico, mas já começaremos a usar algumas de nossas variáveis. Então teremos o seguinte:

~~~css
.left-bar{
    background-color: var(--bg-color);
    width: 230px;
    border-right: 1px solid #e3e7f7;
    position: relative;
}

.left-content{
    padding: 40px;
}

.item{
    color: var(--main-color);
    margin-bottom: 14px;
    font-weight: 500;
}

.item img{
    width: 14px;
    height: 14px;
    color: currentColor;
    margin-right: 10px;
}

.category-list{
    margin-top: 50px;
}

.category-list .item{
    color: var(--secondary-color);
}

.actions{
    padding: 12px;
    display: flex;
    justify-content: space-between;
}

.circle{
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: #fe4d46;
    box-shadow: 14px 0 0 0 #fbc023,
        28px 0 0 0 #7dd21f;
}

.circle-2{
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background-color: #d5d7e3;
    box-shadow: -6px 0 0 0 #d5d7e3,
        6px 0 0 0 #d5d7e3;
}
~~~

Após o .css feito, nossa página terá a seguinte aparência:

![CSS-left-bar](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_3/Images/Images-README/CSS-Left-Bar.png)

Agora vamos para a segunda parte, a classe "page-content", onde se encontra o conteúdo da página. Essa parte é mais um exemplo para usar o .css, para dá um corpo maior para a página. Também essa é a parte que ficará visível no fim, quando for aplicado a responsividade. 

Cuidado pra não acabar errando o código, é muito longo e mesmo copiando é possível errar. Esse código todo está na classe "page-content" e ela tem três classes filhas: "header", "content-categories" e "task-wrapper".

O código a ser acrescentado é o seguinte:

~~~html
<div class="page-content">
    <div class="header">Today Task</div>
    <div class="content-categories">
        <div class="label-wrapper">
            <input class="nav-item" name="nav" type="radio" id="opt-1" />
            <label class="category" for="opt-1">All</label>
        </div>
        <div class="label-wrapper">
            <input class="nav-item" type="radio" name="nav" id="opt-2" checked />
            <label class="category" for="opt-2">Importante</label>
        </div>
        <div class="label-wrapper">
            <input class="nav-item" type="radio" name="nav" id="opt-3" />
            <label class="category" for="opt-3">Notas</label>
        </div>
        <div class="label-wrapper">
            <input class="nav-item" type="radio" name="nav" id="opt-4" />
            <label class="category" for="opt-4">Links</label>
        </div>
    </div>
    <div class="task-wrapper">
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-1" checked/>
            <label for="item-1">
                <span class="label-text">Dashboard Design Implementation</span>
            </label>
            <span class="tag approved">Aprovado</span>
        </div>
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-2" checked />
            <label for="item-2">
                <span class="label-text">Criar um Userflow</span>
            </label>
            <span class="tag progress">Em Curso</span>
        </div>
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-3" />
            <label for="item-3">
                <span class="label-text">Implementação da Aplicação</span>
            </label>
            <span class="tag review">Em Revisão</span>
        </div>
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-4" />
            <label for="item-4">
                <span class="label-text">Criar um Design Dashboard</span>
            </label>
            <span class="tag progress">Em Curso</span>
        </div>
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-5" />
            <label for="item-5">
                <span class="label-text">Criar uma Aplicação Web</span>
            </label>
            <span class="tag approved">Aprovado</span>
        </div>
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-6" />
            <label for="item-6">
                <span class="label-text">Design Interativo</span>
            </label>
            <span class="tag review">Em Revisão</span>
        </div>
        <div class="header upcoming">Próximas Tasks</div>
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-7" />
            <label for="item-7">
                <span class="label-text">Implementação do Design Dashboard</span>
            </label>
            <span class="tag waiting">Em Espera</span>
        </div>
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-8" />
            <label for="item-8">
                <span class="label-text">Criar um Userflow</span>
            </label>
            <span class="tag waiting">Em Espera</span>
        </div>
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-9" />
            <label for="item-9">
                <span class="label-text">Implementação de Aplicação</span>
            </label>
            <span class="tag waiting">Em Espera</span>
        </div>
        <div class="task">
            <input class="task-item" type="checkbox" name="task" id="item-10" />
            <label for="item-10">
                <span class="label-text">Criar um Design Dashboard</span>
            </label>
            <span class="tag waiting">Em Espera</span>
        </div>
    </div>
</div>
~~~

Agora vamos para o .css para estilizar essa parte. Aqui usamos, além de algumas variáveis, o seletor "Element1 + Element2", que seleciona o primeiro filho do element1 que seja element2. O .css terá a mais as seguintes linhas:

~~~css
.page-content{
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 40px 20px 0 20px;
}

.page-content .header{
    font-size: 26px;
    color: var(--main-color);
    margin-top: 30px;
}

.content-categories{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
}

.nav-item{
    display: none;
}

.category{
    font-weight: 500;
    color: var(--secondary-color);
    border-bottom: 1px solid #ddd;
    transition: 0.4s ease-in;
    padding: 20px 30px;
    cursor: pointer;
}

#opt-1:checked + label,
#opt-2:checked + label,
#opt-3:checked + label,
#opt-4:checked + label{
    color: var(--checkbox-color);
    border-bottom: 2px solid var(--checkbox-color);
}

.task-item{
    display: none;
}

.task-wrapper{
    padding: 30px 0;
    flex: 1;
    overflow-y: auto;
    height: 100%;
    padding-right: 8px;
}

.task{
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 16px;
    padding-left: 30px;
    color: var(--task-color);
    font-size: 13px;
    font-weight: 500;
}

.task:hover{
    transform: translateX(2px);
}

.task label{
    cursor: pointer;
}

label .label-text{
    position: relative;
}

label .label-text:before{
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    border: 1px solid #ddd;
    border-radius: 2px;
    left: -24px;
    transition: 0.2s ease;
}

.task-item:checked + label .label-text:before{
    background-color: var(--checkbox-color);
    border: none;
    background-image: url('Icons/check_icon.svg');
    background-repeat: no-repeat;
    background-size: 10px;
    background-position: center;
    border: 1px solid var(--checkbox-color);
}

.tag{
    font-size: 10px;
    padding: 4px 8px;
    border-radius: 20px;
}

.tag.approved{
    background-color: var(--tag-color-one);
    color: var(--tag-color-text-one);
}

.tag.progress{
    background-color: var(--tag-color-two);
    color: var(--tag-color-text-two);
}

.tag.review{
    background-color: var(--tag-color-three);
    color: var(--tag-color-text-three);
}

.tag.waiting{
    background-color: var(--tag-color-four);
    color: var(--tag-color-text-four);
}

.upcoming{
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    margin-bottom: 30px;
}
~~~

Com o conteúdo da página inserido e seu estilo feito, teremos a seguinte aparência:

![HTML-CSS-page-Content](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_3/Images/Images-README/HTML-CSS-Page-Content.png)

Por fim, adicionamos a classe "right-bar" para finalizar o conteúdo experimental de nossa página, para que possamos ver um bom exemplo da responsividade. Aqui vamos usar imagens tiradas de do site [Pexels](https://www.pexels.com/) (para mais informações das fotos, entrar no arquivo [Images-Source.txt](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_3/Images/Images-Source.txt)). Seguindo os mesmo passos de antes, primeiro o .html:

~~~html
<div class="right-bar">
    <div class="top-part">
        <img class="feather feather-users" src="./Icons/users_icon.svg" alt="users_icon">
        <div class="count">6</div>
    </div>
    <div class="header">Cronograma</div>
    <div class="right-content">
        <div class="task-box yellow">
            <div class="description-task">
                <div class="time">08:00 - 09:00 AM</div>
                <div class="task-name">Revisão do Produto</div>
            </div>
            <div class="more-button"></div>
            <div class="members">
                <img src="./Images/img1.jpg" alt="member-1" />
                <img src="./Images/img2.jpg" alt="member-2" />
                <img src="./Images/img3.jpg" alt="member-3" />
                <img src="./Images/img4.jpg" alt="member-4" />
            </div>
        </div>
        <div class="task-box blue">
            <div class="description-task">
                <div class="time">10:00 - 11:00 AM</div>
                <div class="task-name">Reunião de Design</div>
            </div>
            <div class="more-buttons"></div>
            <div class="members">
                <img src="./Images/img5.jpg" alt="member-1">
                <img src="./Images/img6.jpg" alt="member-2">
                <img src="./Images/img7.jpg" alt="member-3">
            </div>
        </div>
        <div class="task-box red">
            <div class="description-task">
                <div class="time">01:00 - 02:00 PM</div>
                <div class="task-name">Reunião da Equipe</div>
            </div>
            <div class="more-buttons"></div>
            <div class="members">
                <img src="./Images/img8.jpg" alt="member-1">
                <img src="./Images/img9.jpg" alt="member-2">
                <img src="./Images/img1.jpg" alt="member-3">
                <img src="./Images/img2.jpg" alt="member-4">
            </div>
        </div>
        <div class="task-box green">
            <div class="description-task">
                <div class="time">03:00 - 04:00 PM</div>
                <div class="task-name">Evento de Entrega</div>
            </div>
            <div class="more-buttons"></div>
            <div class="members">
                <img src="./Images/img3.jpg" alt="member-1">
                <img src="./Images/img4.jpg" alt="member-2">
                <img src="./Images/img5.jpg" alt="member-3">
                <img src="./Images/img6.jpg" alt="member-4">
                <img src="./Images/img7.jpg" alt="member-5">
            </div>
        </div>
        <div class="task-box blue">
            <div class="description-task">
                <div class="time">08:00 - 09:00 PM</div>
                <div class="task-name">Evento de Entrega</div>
            </div>
            <div class="more-buttons"></div>
            <div class="members">
                <img src="./Images/img8.jpg" alt="member-1">
                <img src="./Images/img9.jpg" alt="member-2">
                <img src="./Images/img1.jpg" alt="member-3">
                <img src="./Images/img2.jpg" alt="member-4">
                <img src="./Images/img3.jpg" alt="member-5">
            </div>
        </div>
        <div class="task-box yellow">
            <div class="description-task">
                <div class="time">11:00 - 12:00 PM</div>
                <div class="task-name">Prática</div>
            </div>
            <div class="more-buttons"></div>
            <div class="members">
                <img src="./Images/img4.jpg" alt="member-1">
                <img src="./Images/img5.jpg" alt="member-2">
                <img src="./Images/img6.jpg" alt="member-3">
                <img src="./Images/img7.jpg" alt="member-4">
            </div>
        </div>
    </div>
</div>
~~~

Agora o .css:

~~~css
.members{
    display: flex;
    margin-top: 14px;
}

.members img{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    object-fit: cover;
}

.right-bar{
    width: 320px;
    border-left: 1px solid #e3e7f7;
    display: flex;
    flex-direction: column;
}

.right-bar .header{
    font-size: 20px;
    color: var(--main-text-color);
    margin-left: 30px;
}

.top-part{
    padding: 30px;
    align-self: flex-end;
}

.top-part img{
    width: 14px;
    height: 14px;
    color: var(--main-color);
    margin-right: 14px;
}

.top-part .count{
    font-size: 12px;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    background-color: #623ce8;
    color: #fff;
    justify-content: center;
}

.right-content{
    padding: 10px 40px;
    overflow-y: auto;
    flex: 1;
}

.task-box{
    position: relative;
    border-radius: 12px;
    width: 100%;
    margin: 20px 0;
    padding: 16px;
    cursor: pointer;
    box-shadow: 2px 2px 4px 0px rgba(235, 235, 235, 1);
}

.task-box:hover{
    transform: scale(1.02);
}

.time{
    margin-bottom: 6px;
    opacity: 0.4;
    font-size: 10px;
}

.task-name{
    font-size: 14px;
    font-weight: 500;
    opacity: 0.6;
}
.yellow{
    background-color: var(--box-color);
}

.blue{
    background-color: var(--box-color-2);
}

.red{
    background-color: var(--box-color-3);
}

.green{
    background-color: var(--box-color-4);
}

.more-buttons{
    position: absolute;
    width: 3;
    height: 3px;
    border-radius: 50%;
    background-color: #8e92a4;
    box-shadow: 0 -4px 0 0 #8e92a4,
    0 4px 0 0 #8e92a4;
    opacity: 0.4;
    right: 20px;
    top: 30px;
    cursor: pointer;
}
~~~

E agora, a parte principal, o Responsive da página, será feita no .css e teremos a responsividade para três tamanhos, como já dito antes: 900px, 700px e 520px. O responsive é usado aqui com queries (perguntas, condições), sendo essas condições o tamanho máximo da largura (max-width). Temos então o seguinte código:

~~~css
@media screen and (max-width: 900px){
    .left-bar{
        display: none;
    }
}

@media screen and (max-width: 700px) {
    .task-manager{
        flex-direction: column;
        overflow-y: auto;
    }
    .right-bar,
    .page-content{
        width: 100%;
        display: block;
    }
    .task-wrapper{
        height: auto;
    }
}

@media screen and (max-width: 520px){
    .page-content{
        padding: 40px 10px 0 10px;
    }
    .right-content{
        padding: 10px 16px;
    }
    .category{
        padding: 20px;
    }
}
~~~

Então temos nossa página sem a responsividade ativa (o resultado final) fica assim:

![No-Responsive](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_3/Images/Images-README/No-Responsive.png)

Com a responsividade de 900px:

![900px-responsive](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_3/Images/Images-README/900px-Responsive.png)

Com a responsividade de 700px:

![700px-responsive](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_3/Images/Images-README/700px-Responsive.png)

Por fim, com a responsividade de 520px:

![520px-responsive](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_3/Images/Images-README/520px-Responsive.png)

