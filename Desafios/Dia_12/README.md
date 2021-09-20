# Dia 12 Cartões de Preço

## Descrição

Nesse exercício aprendi a fazer um modelo de cartões de assinatura com mudança de preço por tempo assinado: mensal ou anual.
Nesse exercício as novidades aprendidas são os simbolos de HTML e a prorpriedade flex-wrap de CSS.

CodePen:[Cartões de Preço](https://codepen.io/albusquercus94/pen/dyRYVaM)

## Tecnologias Usadas

* HTML
* CSS
* Javascript

## O que aprendi

* [HTML Simbolos](https://www.w3schools.com/html/html_symbols.asp)
* [CSS Propriedade Flex Wrap](https://www.w3schools.com/cssref/css3_pr_flex-wrap.asp)

## Passo a Passo

O passo a passo deste exercício foi mais extenso, pois há muita informação para ser posto como cartões no html, o que serve de um ótimo modelo para ser usado posteriormente. Eis o código:

~~~html
<body>
    <header>
        <h1>Nosso Preço</h1>
        <div class="toggle">
            <label>Anualmente</label>
            <div class="toggle-btn">
                <input type="checkbox" class="checkbox" id="checkbox" />
                <label for="checkbox" id="sub" class="sub">
                    <div class="circle"></div>
                </label>
            </div>

            <label>Mensal</label>
        </div>
    </header>
    <div class="cards">
        <div class="card shadow">
            <ul>
                <li class="pack">Básico</li>
                <li class="price bottom-bar" id="basic">R&dollar; 199.90</li>
                <li class="bottom-bar">500GB de Armazenamento</li>
                <li class="bottom-bar">Máximo de 2 Usuários</li><li class="bottom-bar">Envio de 3GB</li>
                <li><button class="btn">Saiba Mais</button></li>
            </ul>
        </div>

        <div class="card active">
            <ul>
                <li class="pack">Profissional</li>
                <li class="price bottom-bar" id="professional">R&dollar; 249.90</li>
                <li class="bottom-bar">1TB de Armazenamento</li>
                <li class="bottom-bar">Máximo de 5 Usuários</li><li class="bottom-bar">Envio de 10GB</li>
                <li><button class="btn active-btn">Saiba Mais</button></li>
            </ul>
        </div>

        <div class="card shadow">
            <ul>
                <li class="pack">Mestre</li>
                <li class="price bottom-bar" id="master">R&dollar; 399.90</li>
                <li class="bottom-bar">2TB de Armazenamento</li>
                <li class="bottom-bar">Máximo de 10 Usuários</li><li class="bottom-bar">Envio de 20GB</li>
                <li><button class="btn">Saiba Mais</button></li>
            </ul>
        </div>
    </div>
    <script src="script.js"></script>
</body>
~~~

Aqui a única coisa a ser testada depois é fazer uma página com 3 ou mais opções, já que aqui só temos duas: mensal ou anual. Porém isso fica para algo após os 30 dias.

Assim o código fica da seguinte forma, antes do css:

![Resultado-Parcial-Dia-12](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_12/Imagens/Resultado-Parcial-Dia-12.png)

Já no css, teremos algo que já vimos antes, a novidade da vez é a propriedade flex-wrap. Fora essa, a maioria das propriedades já foram usadas anteriormente.

O código do css fica da seguinte forma, aqui vai está comentado como antes feito:

~~~css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    font-size: 15px;
}

body{
    background: #f7f7f7;
    font-family: 'Montserrat', sans-serif;
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: scroll;
}

header{
    color: hsl(233, 13%, 49%);
    margin: 3.3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.toggle{
    margin-top: 2rem;
    color: hsl(234, 14%, 74%);
    display: flex;
    align-items: center;
}

.toggle-btn{
    margin: 0 1rem;
}
.checkbox{
    display: none;
}

.sub{
    background: linear-gradient(
        135deg, 
        rgba(163, 168, 240,1) 0%,
        rgba(105,111,221,1)100%
    );
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 1.6rem;
    width: 3.3rem;
    border-radius: 1.6rem;
    padding: 0.3rem;
}

.circle{
    background: #fff;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
}

.checkbox:checked + .sub{
    justify-content: flex-end;
}

.card{
    background: #fff;
    color: hsl(233, 13%, 49%);
    border-radius: 0.8rem;
}

.cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.cards .card.active{
    background: linear-gradient(
        135deg, 
        rgba(163, 168, 240,1) 0%,
        rgba(105,111,221,1)100%
    );
    color: #fff;
    display: flex;
    align-items: center;
    transform: scale(1.1);
    z-index: 1;
}

ul{
    margin: 2.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

ul li{
    list-style-type: none;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0;
}

ul li.price{
    font-size: 3rem;
    color: hsl(232, 13%, 33%);
    padding-bottom: 2rem;
}

.shadow{
    box-shadow: -5px 5px 15px 1px rgba(0, 0, 0, 0.1);
}

.card.active .price{
    color: #fff;   
}

.btn{
    margin-top: 1rem;
    height: 2.6rem;
    width: 13.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: linear-gradient(
        135deg,
        rgba(163,168,240,1) 0%,
        rgba(105,111,221,1) 100%
    );
    color: #fff;
    outline: none;
    border: 0;
    font-weight: bold;
}

.active-btn{
    background: #fff;
    color: hsl(237, 63%, 64%);
}

.bottom-bar{
    border-bottom: 2px solid hsla(240, 8%, 85%, 0.582);
}

.card.active .bottom-bar{
    border-bottom: 2px solid hsla(240, 8%, 85%, 0.253);
}

.pack{
    font-size: 1.1rem;
}
/*A partir daqui fazemos responsividade para diferentes tamanhos de tela.*/
@media (max-width: 280px){
    ul{
        margin: 1rem;
    }
    h1{
        font-size: 1.2rem;
    }
    .toggle{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 80px;
    }

    .cards{
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    .card{
        transform: scale(0.8);
        margin-bottom: 1rem;
    }
    
    .cards .card.active{
        transform: scale(0.8);
    }
}

@media (min-width:320px) and (max-width:414px){
    .cards{
        display: flex;
        flex-direction: column;
    }

    .card{
        margin-bottom: 1rem;
    }

    .cards .card.active{
        transform: scale(1);
    }

}

@media (min-width:414px) and (max-width:768px){
    .card{
        margin-bottom: 1rem;
        margin-right: 1rem;
    }

    .cards .card.active{
        transform: scale(1);
    }
    
}

@media (min-width:768px) and (max-width:1046px){
    .cards{
        display: flex;
    }

    .card{
        margin-bottom: 1rem;
        margin-right: 1rem;
    }

    .cards .card.active{
        transform: scale(1);
    }
    
}
~~~

Aqui tem uma coisa para ser feita depois: a mudança do cartão selecionado. Atualmente ele não muda, está fixo em apenas um.

Agora vamos para o JavaScript, para que mude o valor nos cartões de acordo com o tipo de assinatura que vai ser escolhido: mensal ou anual. Segue o código:

~~~js
const checkbox = document.getElementById('checkbox');
const professional = document.getElementById('professional');
const master = document.getElementById('master');
const basic = document.getElementById('basic');

checkbox.addEventListener('click', () => {
    basic.textContent = basic.textContent === 'R$ 199.90' ? 'R$ 19.90' : 'R$ 199.90';
    professional.textContent = professional.textContent === 'R$ 249.90' ? 'R$ 24.90' : 'R$ 249.90';
    master.textContent = master.textContent === 'R$ 399.90' ? 'R$ 39.90' : 'R$ 399.90';
})
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-12](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_12/Imagens/Resultado-Final-Dia-12.gif)

