# Dia 7 FAQ com Abas Acordeon

## Descrição

No exercício de hoje fazemos uma área de perguntas mais frequentes com abas que abrem como um acordeon: todas juntas, quando abre uma a outa fecha. 
É um exercício a mais com uma funcionalidade prática, já que todas as páginas na web tem uma área de FAQ.

* [FAQ com Abas Acordeon](https://codepen.io/albusquercus94/pen/WNONXjQ)

## Tecnologias Usadas

* HTML
* CSS
* JavaScript

## O que aprendi

* [HTML Estado Aria-Expanded](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
* [HTML Estado Aria-Hidden](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden)
* [CSS Unidades](https://www.w3schools.com/cssref/css_units.asp)
* [CSS Seletor Atributos](https://www.w3schools.com/css/css_attribute_selectors.asp)
* [CSS Seletor Will-Change](https://css-tricks.com/almanac/properties/w/will-change/)
* 

## Passo a Passo

Primeiro a criação do html, onde terá todo o conteúdo que será apresentado na tela. Aqui só vamos por e organizar um pouco como será nossas abas. No total teremos cinco abas de FAQ, todas dentro de uma div com class "accordion". Accordion é acordeão em inglês, uma sanfona pois a aba ira abrir e fechar parecendo uma. 

Teremos também um arquivo javascript, então já adiciona-lo ao final. O html é o seguinte:

~~~html
<body>
    <!-- Aqui é onde criamos a seção de perguntas mais frequentes (FAQ), onde definimos as abas e o conteúdo de cada uma delas. -->
    <div class="container">
        <h2>Perguntas mais Frequentes</h2>
        <div class="accordion">
            <div class="accordion-item">
                <button id="accordion-button-1" aria-expanded="false">
                    <span class="accordion-title">Por que a lua as vezes aparece durante o dia?</span>
                    <span class="icon" aria-hidden="true"></span>
                </button>
                <div class="accordion-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias, nemo praesentium
                        est doloribus repellat expedita, id assumenda temporibus excepturi error itaque nobis pariatur
                        quis blanditiis voluptatem, veniam ipsa deserunt!
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <button id="accordion-button-2" aria-expanded="false">
                    <span class="accordion-title">Por que o céu é azul?</span>
                    <span class="icon" aria-hidden="true"></span>
                </button>
                <div class="accordion-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos et numquam voluptatem, nulla sunt iusto eius eligendi architecto maiores non impedit similique corrupti. Perspiciatis perferendis facere ut repellendus! Dolorum, ullam.
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <button id="accordion-button-3" aria-expanded="false">
                    <span class="accordion-title">Nós iremos descobri vida extraterrestre?</span>
                    <span class="icon" aria-hidden="true"></span>
                </button>
                <div class="accordion-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores obcaecati sapiente eveniet nesciunt fuga aut aperiam totam ratione, consequuntur quaerat velit molestiae impedit aspernatur architecto accusantium rerum temporibus exercitationem!
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <button id="accordion-button-4" aria-expanded="false">
                    <span class="accordion-title">Quanto pesa a terra?</span>
                    <span class="icon" aria-hidden="true"></span>
                </button>
                <div class="accordion-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci accusamus eius impedit deserunt laudantium! Magnam, hic officia temporibus soluta maiores corporis quaerat ipsam quis voluptate amet eveniet eos animi a!
                    </p>
                </div>
            </div>
            <div class="accordion-item">
                <button id="accordion-button-5" aria-expanded="false">
                    <span class="accordion-title">Como os aviões se sustentam?</span>
                    <span class="icon" aria-hidden="true"></span>
                </button>
                <div class="accordion-content">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit architecto dolor velit ipsum officia officiis animi saepe perspiciatis, adipisci blanditiis voluptatibus provident commodi odit vitae, vel, totam magnam expedita maxime.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
~~~

A página no momento deve ficar assim:

![Resultado-Parcial-Dia-7](#)

Agora vamos para o css e como ele é um pouco mais extenso, deixei comentado com o que entendi e aprendi. Alguns seletores não comentei pois eles são auto explicativos. Eis o código do css:

~~~css
@import url('https://fonts.googleapis.com/css?family=Hind:300,400&display=swap');

/*Aqui para não precisar por em todos os seletores, é posto o box-sizing no seletor padrão/todos.*/
*{
    box-sizing: border-box;
}

*::before,
*::after{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: 'Hind', sans-serif;
    background: #fff;
    color: #4d5974;
    display: flex;
    min-height: 100vh;
}

.container{
    margin: 0;
    padding: 4rem;
    width: 48rem;
}

.accordion .accordion-item{
    border-bottom: 1px solid #e5e5e5;
}
.accordion .accordion-item button[aria-expanded='true']{
    border-bottom: 1px solid #03b5d2;
}

.accordion button{
    position: relative;
    display: block;
    text-align: left;
    width: 100%;
    padding: 1em 0;
    color: #7288a2;
    font-size: 1.15rem;
    font-weight: 400;
    border: none;
    outline: none;
}
/*Definindo o comportamento dos elementos selecionados quando o cursor apontar em cima deles.*/
.accordion button:hover,
.accordion button:focus{
    cursor: pointer;
    color: #03b5d2;
    
}
/*Essa parte do css eu não consegui entender para que serve, ou o que ele altera no código.*/
.accordion button:hover::after,
.accordion button:focus::after{
    cursor: pointer;
    color: #03b5d2;
    border: 1px solid #03b5d2;
}
*/
.accordion button .accordion-title{
    padding: 1em 1.5em 1em 0;
}
/*Criando e formatando um ícone. Aqui cria-se o ícone circular ao lado do título de cada aba.*/
.accordion button .icon{
    display: inline-block;
    position: absolute;
    top: 18px;
    right: 0;
    width: 22px;
    height: 22px;
    border: 1px solid;
    border-radius: 22px;
}
/*Criando um traço na horizontal dentro do ícone*/
.accordion button .icon::before{
    display: block;
    position: absolute;
    content: '';
    top: 9px;
    left: 5px;
    width: 10px;
    height: 2px;
    background: currentColor;
}
/*Criando um traço na vertical dentro do ícone*/
.accordion button .icon::after{
    display: block;
    position: absolute;
    content: '';
    top: 5px;
    left: 9px;
    width: 2px;
    height: 10px;
    background: currentColor;
}
/*Definindo como os elementos irão se comportar quando o aria-expanded for 'true'. Só torna-se-á 'true' usando javascript.*/
.accordion button[aria-expanded='true']{
    color: #03b5d2;
}

.accordion button[aria-expanded='true'] .icon::after{
    width: 0;
}

.accordion button[aria-expanded='true'] + .accordion-content{
    opacity: 1;
    max-height: 9em;
    transition: all 200ms linear;
    will-change: opacity, max-height;
}

.accordion .accordion-content{
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 200ms linear, max-height 200ms linear;
    will-change: opacity, max-height;
}

.accordion .accordion-content p{
    font-size: 1rem;
    font-weight: 300;
    margin: 2em 0;
}
~~~

Por fim precisamos fazer com que o estado de 'aria-expanded' altere ao ser apertado. Para isso usaremos um script de JavaScript, é bem curtinho:

~~~js
const items = document.querySelectorAll('.accordion button');
function toggleAccordion(){
    const itemToggle = this.getAttribute('aria-expanded');
    for (i=0; i < items.length; i++){
        items[i].setAttribute('aria-expanded', 'false');
        console.log(items[i])
    }

    if (itemToggle == 'false'){
        this.setAttribute('aria-expanded', 'true')
    }
}
items.forEach((item) => item.addEventListener('click', toggleAccordion))
~~~

Explicando a função, ela vai alterar todos os estados de 'aria-expanded' para false e o item que queremos que apareça mudará com o 'if'.

O elemento escolhido é através de um EventListener, por isso na função o itemToggle é usado this (ao menos foi isso que entendi).

O resultado deve ser o seguinte:

![Resultado-Final-Dia-7](#)

