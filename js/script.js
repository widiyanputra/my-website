// Toggle class active
const navbarNav = document.querySelector(".navbar-nav.active");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
