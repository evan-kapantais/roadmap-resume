const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const navItems = document.querySelectorAll(".list-item");

for (let navLink of navLinks) {
  navLink.addEventListener("click", handleNavLinkClick);
}

function handleNavLinkClick() {
  menuBtn.style.top = "20px";
  menu.style.right = "-140px";
}

menuBtn.onclick = function() {
  setTimeout (function() {
    menu.style.right = 0;

    for (let index = 0, time = 0; index < navItems.length; index++, time+= .1) {
      navItems[index].style.transition = `all ${time} ease`;
      console.log(navItems[index].style.transition);
    }
  }, 300);

  this.style.top = "-100px";
}