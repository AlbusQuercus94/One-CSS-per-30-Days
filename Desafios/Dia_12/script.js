const checkbox = document.getElementById('checkbox');
const professional = document.getElementById('professional');
const master = document.getElementById('master');
const basic = document.getElementById('basic');

checkbox.addEventListener('click', () => {
    basic.textContent = basic.textContent === 'R$ 199.90' ? 'R$ 19.90' : 'R$ 199.90';
    professional.textContent = professional.textContent === 'R$ 249.90' ? 'R$ 24.90' : 'R$ 249.90';
    master.textContent = master.textContent === 'R$ 399.90' ? 'R$ 39.90' : 'R$ 399.90';
})