/*A única função aqui é para mudar o aria de false para true, vice-versa, quando o botão for apertado. */

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