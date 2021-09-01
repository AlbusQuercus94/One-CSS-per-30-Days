# Dia 14 CSS SmartWatch

## Descrição

No exercício de hoje fiz uma smartwatch usando apenas css, que precisa de muita criatividade para fazer. Até agora é o exercício que, mesmo sendo simples em entendimento, é muito extenso e muito complexo de ser feito.

CodePen:[CSS SmartWatch](https://codepen.io/albusquercus94/pen/powyEKj)

## Tecnologias Usadas

* HTML

* CSS

## O que aprendi

* Reforço do que já foi aprendido

## Passo a Passo

No HMTL é posto uma div para cada parte do relógio: tela, ponteiros, pulseiras e botões. Eis aqui cada div:

~~~html
<body>
    <div class="main-dial">
        <div class="screen"></div>
        <div class="hands"></div>
        <div class="hands-holder"></div>
        <div class="strap-holder-up-1"></div>
        <div class="circle-hide-11"></div>
        <div class="line-hide-11"></div>
        <div class="strap-holder-up-2"></div>
        <div class="circle-hide-12"></div>
        <div class="line-hide-12"></div>
        <div class="strap-holder-down-1"></div>
        <div class="circle-hide-21"></div>
        <div class="line-hide-21"></div>
        <div class="strap-holder-down-2"></div>
        <div class="circle-hide-22"></div>
        <div class="line-hide-22"></div>
        <div class="strap-1"></div>
        <div class="strap-2"></div>
        <div class="back-strap"></div>
        <div class="button-1"></div>
        <div class="button-hide"></div>
        <div class="button-2"></div>
    </div>
</body>
~~~

Como o CSS é muito extenso, vou escrever em comentário o que entendi qual a função de cada seletor no exercício:

~~~css
body{
    background: #f8f8f8;
}
/*O main dial é a base do relógio.*/
.main-dial{
    position: relative;
    margin: auto;
    margin-top: 220px;
    background: #f2d1cb;
    height: 250px;
    width: 250px;
    border-radius: 50%;
    box-shadow: 
        inset 2px -2px 8px #997771,
        inset -2px 2px 8px #997771;   
}

.main-dial::before{
    content: '';
    position: absolute;
    margin: auto;
    top: 4px;
    left: 4px;
    background: black;
    height: 240px;
    width: 240px;
    border: 1px solid black;
    border-radius: 50%;
    box-shadow: 
        inset 3px 3px 3px white,
        inset 8px 5px #6c757d,
        inset -2.5px -1px 2.5px white,
        inset 5.5px 3px #6c757d;
}

.main-dial::after{
    content: '';
    position: absolute;
    margin: auto;
    top: 25px;
    left: 25px;
    background: white;
    height: 200px;
    width: 200px;
    border-radius: 50%;
}
/*Screen é a tela onde os ponteiros ficam.*/
.screen{
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(
        135deg,
        #ff447e,
        #ac46a1
    );
    border-radius: 50%;
    top: 10%;
    left: 10%;
    z-index: 1;
}

.screen::before{
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: linear-gradient(
        5deg,
        #ff5c8a,
        #ffc2d4
    );
    -webkit-mask: linear-gradient(
        #fff,
        transparent
    );
    mask: linear-gradient(
        #fff,
        transparent
    );
    border-radius: 50%;
    top: 0%;
    left: 0%;
    z-index: 1;
}
/*Hands são os ponteiros. Hands principal é o ponteiro dos minutos.*/
.hands{
    position: absolute;
    height: 80px;
    width: 5px;
    background: white;
    top: 25%;
    left: 60%;
    border-radius: 50px;
    transform: rotate(45deg);
    box-shadow: 2px 2px 1px #ff5c8a;
    z-index: 2;
}
/*Hands Before é o ponteiro das horas*/
.hands::before{
    content: '';
    position: absolute;
    height: 60px;
    width: 10px;
    background: white;
    bottom: -32px;
    right: 500%;
    border-radius: 50px;
    box-shadow: -2px 2px 1px #ff5c8a;
    transform: rotate(-100deg);
    z-index: 2;
}
/*Hands After é o ponteiro dos segundos*/
.hands::after{
    content: '';
    position: absolute;
    height: 100px;
    width: 2px;
    background: white;
    top: 65%;
    left: 330%;
    border-radius: 50px;
    box-shadow: -0.5px 0.5px 1px #ff5c8a;
    transform: rotate(150deg);
    z-index: 2;
}
/*Hands Holder é o círculo no meio do relógio que segura os ponteirtos*/
.hands-holder{
    position: absolute;
    height: 13px;
    width: 13px;
    top: 48.5%;
    left: 48.5%;
    background: white;
    border-radius: 50%;
    box-shadow: 
        0.5px 0.5px 0.5px #ff5c8a,
        -0.5px 0.5px 0.5px #ff5c8a;
    z-index: 3;
}

.hands-holder::after{
    content: '';
    position: absolute;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #ff477e;
    top: 30%;
    left: 30%;
}
/*Straps são as pulseiras*/
.strap-1{
    position: absolute;
    width: 110px;
    height: 110px;
    top: 99%;
    left: 28%;
    background: linear-gradient(
        to right,
        #ccb0ab,
        #e6c7c2
    );
    border-radius: 10%;
    z-index: -1;
    box-shadow: inset 0 2px 7px #000;
}

.strap-2{
    position: absolute;
    width: 110px;
    height: 110px;
    top: -42%;
    left: 28%;
    background: linear-gradient(
        to right,
        #ccb0ab,
        #e6c7c2
    );
    border-radius: 10%;
    z-index: -1;
    box-shadow: inset 0 -1px 4px #000;
}
/*Strap holder é as abas que seguram as pulseiras ao redor do relógio. Os up são da pulseira de cima e os down da pulseira de baixo.*/
.strap-holder-up-1{
    position: absolute;
    width: 26px;
    height: 45px;
    top: -6%;
    left: 18%;
    background: linear-gradient(
        to right,
        #ccb0ab,
        #e6c7c2
    );
    box-shadow: inset 0 -1px 4px #000;
    border-radius: 10%;
    z-index: -2;
}

.strap-holder-up-2{
    position: absolute;
    width: 26px;
    height: 45px;
    top: -6%;
    right: 18%;
    background: linear-gradient(
        to right,
        #ccb0ab,
        #e6c7c2
    );
    box-shadow: inset 0 -1px 4px #000;
    border-radius: 10%;
    z-index: -2;
}

.strap-holder-down-1{
    position: absolute;
    width: 26px;
    height: 45px;
    bottom: -6%;
    left: 18%;
    background: linear-gradient(
        to right,
        #ccb0ab,
        #e6c7c2
    );
    box-shadow: inset 0 -1px 4px #000;
    border-radius: 10%;
    z-index: -2;
}

.strap-holder-down-2{
    position: absolute;
    width: 26px;
    height: 45px;
    bottom: -6%;
    right: 18%;
    background: linear-gradient(
        to right,
        #ccb0ab,
        #e6c7c2
    );
    box-shadow: inset 0 -1px 4px #000;
    border-radius: 10%;
    z-index: -2;
}
/*Todos com o hide a seguir são para estilizar os strap, para ficar mais parecidos visualmente com um real. Os que começam com 1 são para o holder de cima e o 2 é o holder debaixo.*/
.circle-hide-11{
    position: absolute;
    width: 103px;
    height: 103px;
    left: -18%;
    top: -23%;
    background: #f8f9fa;
    border-radius: 50%;
}

.circle-hide-12{
    position: absolute;
    width: 103px;
    height: 103px;
    right: -18%;
    top: -23%;
    background: #f8f9fa;
    border-radius: 50%;
}

.circle-hide-21{
    position: absolute;
    width: 103px;
    height: 103px;
    left: -18%;
    bottom: -23%;
    background: #f8f9fa;
    border-radius: 50%;
}

.circle-hide-22{
    position: absolute;
    width: 103px;
    height: 103px;
    right: -18%;
    bottom: -23%;
    background: #f8f9fa;
    border-radius: 50%;
}

.line-hide-11{
    position: absolute;
    width: 30px;
    height: 10px;
    left: 15%;
    top: -7.5%;
    background: #f8f9fa;
    transform: rotate(-25deg);
}

.line-hide-12{
    position: absolute;
    width: 30px;
    height: 10px;
    right: 15%;
    top: -7.5%;
    background: #f8f9fa;
    transform: rotate(25deg);
}

.line-hide-21{
    position: absolute;
    width: 30px;
    height: 10px;
    left: 15%;
    bottom: -7.5%;
    background: #f8f9fa;
    transform: rotate(25deg);
}

.line-hide-22{
    position: absolute;
    width: 30px;
    height: 10px;
    right: 15%;
    bottom: -7.5%;
    background: #f8f9fa;
    transform: rotate(-25deg);
}
/*Responsável por um detalho no fundo do desenho.*/
.back-strap{
    position: absolute;
    width: 100px;
    height: 400px;
    background: #774936;
    left: 30%;
    top: -30%;
    z-index: -2;
}
/*Botões laterais.*/
.button-1{
    position: absolute;
    height: 50px;
    width: 15px;
    background: black;
    right: 3%;
    top: 17%;
    border-radius: 40%;
    transform: rotate(-27deg);
    border: 0.7px #000 solid;
    box-shadow: 
        inset 7px 7px 10px white,
        inset -2px -1px 1px #6c757d;
    z-index: -2;
}

.button-2{
    position: absolute;
    height: 9px;
    width: 35px;
    right: -1.5%;
    bottom: 25%;
    background: #ccb0ab;
    border: 1px #000 solid;
    border-radius: 50%;
    transform: rotate(117deg);
    box-shadow: inset -1px 1px 3px #fff;
    z-index: -1;
}
~~~

Assim temos os seguinte resultado final:

![Resultado-Final-Dia-14](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_14/Imagens/Resultado-Final-Dia-14.png)