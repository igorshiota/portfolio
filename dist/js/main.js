// Select DOM items
// const menuBtn = document.querySelector(".menu-btn");
// const menu = document.querySelector(".menu");
// const menuNav = document.querySelector(".menu-nav");
// const menuBranding = document.querySelector(".menu-branding");
// const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
// let showMenu = false;

// menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add("close");
//     menu.classList.add("show");
//     menuNav.classList.add("show");
//     menuBranding.classList.add("show");

//     navItems.forEach(item => item.classList.add("show"));

//     // Set Menu State
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove("close");
//     menu.classList.remove("show");
//     menuNav.classList.remove("show");
//     menuBranding.classList.remove("show");

//     navItems.forEach(item => item.classList.remove("show"));

//     // Set Menu State
//     showMenu = false;
//   }
// }


// Read More toggle button

// jQuery(document).ready(function() {
//   jQuery("#toggle").click(function() {
//     var elem = $("#toggle").text();
//     if (elem == "+ Ok, tell me more!") {
//       //Stuff to do when btn is in the read more state
//       jQuery("#toggle").text("Ok, got it!");
//       jQuery("#hidden-text").slideDown();
//     } else {
//       //Stuff to do when btn is in the read less state
//       jQuery("#toggle").text("+ Ok, tell me more!");
//       jQuery("#hidden-text").slideUp();
//     }
//   });
// });


// Multi Modals

// Get the modal
var modalparent = document.getElementsByClassName("modal_multi");

// Get the button that opens the modal

var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");

// When the user clicks the button, open the modal
function setDataIndex() {

    for (i = 0; i < modal_btn_multi.length; i++) {
        modal_btn_multi[i].setAttribute('data-index', i);
        modalparent[i].setAttribute('data-index', i);
        span_close_multi[i].setAttribute('data-index', i);
    }
}



for (i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span_close_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "none";
    };

}

window.onload = function() {

    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
        modalparent[event.target.getAttribute('data-index')].style.display = "none";
    }
};