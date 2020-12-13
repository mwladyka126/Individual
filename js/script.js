function toggleMenu(visible) {
  document.querySelector('.sidebar_list').classList.toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});