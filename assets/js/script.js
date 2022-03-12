function navbarOpen() {
      const navbar = document.getElementById("navbar-list");
      const Btn = document.getElementById("navBtn");
      
      if(navbar.style.left == "-100%"){
            navbar.style.left = "0";
            Btn.classList.remove("fa-bars");
            Btn.classList.add("fa-times");
      }
      else {
            navbar.style.left = "-100%";
            Btn.classList.add("fa-bars");
            Btn.classList.remove("fa-times");
      }
}