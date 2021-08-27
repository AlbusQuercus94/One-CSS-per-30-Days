# Dia 10 Galeria de Imagens Responsivo

## Descrição

O exercício de hoje é até fácil, fazer uma galeria de imagens que se auto organizará para apresentar em grade.

CodePen:[Galeria Responsiva](https://codepen.io/albusquercus94/pen/xxrGpYy)

## Tecnologias Usadas

* HTML
* CSS

## O que aprendi

* [CSS Propriedade Column Count](https://www.w3schools.com/cssref/css3_pr_column-count.asp)

## Passo a Passo

O exercício do dia não é tão longo, o html é um conjunto de div com tag img para apresentar as imagens e o css é curtinho para poder organizar as imagens em grade. O html ficou da seguinte forma:

~~~html
<body>
    <section class="photo-grid-container">
        <div class="photo-grid-item">
            <img src="./Images/img2.jpg" alt="img2" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img8.jpg" alt="img8" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img1.jpg" alt="img1" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img5.jpg" alt="img5" />
        </div>

        <div class="photo-grid-item">
            <img src="./Images/img10.jpg" alt="img5" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img4.jpg" alt="img4" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img6.jpg" alt="img6" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img7.jpg" alt="img7" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img2.jpg" alt="img2" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img9.jpg" alt="img9" />
        </div>

        <div class="photo-grid-item">
            <img src="./Images/img13.jpg" alt="img5" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img1.jpg" alt="img1" />
        </div>

        <div class="photo-grid-item">
            <img src="./Images/img3.jpg" alt="img3" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img11.jpg" alt="img5" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img12.jpg" alt="img5" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img4.jpg" alt="img4" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img5.jpg" alt="img5" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img6.jpg" alt="img6" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img7.jpg" alt="img7" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img3.jpg" alt="img3" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img8.jpg" alt="img8" />
        </div>
        
        <div class="photo-grid-item">
            <img src="./Images/img9.jpg" alt="img9" />
        </div>
        
    </section>
</body>
~~~

Agora o css:

~~~css
body{
    background: #111;
}

img{
    width: 100%;
}
/*Aqui definimos o tamanho da área da grade e quantas colunas teremos. */
.photo-grid-container{
    column-count: 5;
    column-width: 300px;
}

.photo-grid-item{
    margin: 0 auto 15px;
    max-width: 400px;
    width: 100%;
}
~~~

O resultado é o seguinte:

![Resultado-Final-Dia-10](https://github.com/AlbusQuercus94/One-CSS-per-30-Days/blob/main/Desafios/Dia_10/Images/Resultado-Final-Dia-10.png)