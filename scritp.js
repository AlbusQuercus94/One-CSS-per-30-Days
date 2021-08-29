var list = window.document.querySelector('.list');

function newElement(element) {
    return window.document.createElement(element);
}

for (var i = 1; i <= 30; i++) {
    if(i<10){
        var newItem = newElement('div');
        newItem.innerHTML = `
                 <a 
                 style="filter: hue-rotate(${i}0deg);"
                 class="btn-home" href="./Desafios/Dia_0${i}/index.html">
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>Dia #0${i}</a>
        `;
         list.appendChild(newItem);
    }else if(i>=10 && i<100){
        var newItem = newElement('div');
        newItem.innerHTML = `
                 <a 
                 style="filter: hue-rotate(${i}0deg);"
                 class="btn-home" href="./Desafios/Dia_${i}/index.html">
                 <span></span>
                 <span></span>
                 <span></span>
                 <span></span>Dia #${i}</a>
        `;
         list.appendChild(newItem);
    }
}