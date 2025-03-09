
// Menu Clicker
var menu = document.getElementsByClassName("hamburger-container");
for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function () {
        // Toggle between adding and removing the "active" class
        this.querySelector('.hamburger').classList.toggle('on');
        
        // Toggle between hiding and showing the active panel
        var nav = document.querySelector(".nav-exterior");
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
          nav.style.display = "block";
        }
    });
}
  
// Clicking for Dropdown Mobile Clicks
document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(e) {
      e.preventDefault();
      let dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
});

