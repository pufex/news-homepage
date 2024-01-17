const hamburger = document.querySelector('#hamburger')
const navLinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', () => {
  if(navLinks.classList.contains('link-bar')){
    navLinks.classList.remove('link-bar');
    navLinks.style.display = "none";
  }
  else{
    navLinks.classList.add('link-bar');
    navLinks.style.display = "flex";

  }
})