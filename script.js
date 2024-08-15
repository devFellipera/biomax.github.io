const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
// Adicione a classe 'active' à barra lateral
   sidebar.classList.add('active');
   toggleBtn.addEventListener('click',() => {
   sidebar.classList.toggle('active');
});