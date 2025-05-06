const NavOpen = document.getElementById('nav_btn');
const navContent = document.getElementById('navbarContent');

NavOpen.addEventListener("click", toggleNav);

function toggleNav(){
  NavOpen.classList.toggle('navOpen');
  navContent.classList.toggle('lg_show');
}

// btn-1
