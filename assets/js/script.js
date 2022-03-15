const navbar = document.getElementById("navbar-list");
const Btn = document.getElementById("navBtn");

function navbarOpen() {
  if (navbar.style.left == "-100%") {
    navbar.style.left = "0";
    Btn.classList.remove("fa-bars");
    Btn.classList.add("fa-times");
  } else {
    navbar.style.left = "-100%";
    Btn.classList.add("fa-bars");
    Btn.classList.remove("fa-times");
  }
}

Btn.addEventListener("click", navbarOpen);

const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");

menu1.addEventListener("click", function () {
  menu1.classList.add("active");
  menu2.classList.remove("active");
  menu3.classList.remove("active");
  menu4.classList.remove("active");
});
menu2.addEventListener("click", function () {
  menu1.classList.remove("active");
  menu2.classList.add("active");
  menu3.classList.remove("active");
  menu4.classList.remove("active");
});
menu3.addEventListener("click", function () {
  menu1.classList.remove("active");
  menu2.classList.remove("active");
  menu3.classList.add("active");
  menu4.classList.remove("active");
});
menu4.addEventListener("click", function () {
  menu1.classList.remove("active");
  menu2.classList.remove("active");
  menu3.classList.remove("active");
  menu4.classList.add("active");
});

menu1.addEventListener("click", navbarOpen);
menu2.addEventListener("click", navbarOpen);
menu3.addEventListener("click", navbarOpen);
menu4.addEventListener("click", navbarOpen);
