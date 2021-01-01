const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menus = document.querySelector('.navbar__menus');
const links = document.querySelector('.navbar__links');

toggleBtn.addEventListener('click', () => {
  menus.classList.toggle('active');
  links.classList.toggle('active');
});
