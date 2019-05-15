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
  this.style.top = "-100px";
  menu.style.right = 0;
}