//navlinks menu mobile
let menu_icon_box = document.querySelector(".btn-toggle");
let box = document.querySelector(".box");

menu_icon_box.onclick = function(){
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
        menu_icon_box.classList.remove("active");
        box.classList.remove("active_box");
    }
}

// gallery popup magnific
$(document).ready(function() {
  $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery:{enabled:true}
    });
});
$(document).ready(function() {
  $('.parent-container2').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery:{enabled:true}
    });
});
$(document).ready(function() {
  $('.parent-container3').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery:{enabled:true}
    });
});
$(document).ready(function() {
  $('.parent-container4').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery:{enabled:true}
    });
});
$(document).ready(function() {
  $('.parent-container5').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery:{enabled:true}
    });
});
$(document).ready(function() {
  $('.parent-container6').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery:{enabled:true}
    });
});
$(document).ready(function() {
  $('.parent-container7').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      gallery:{enabled:true}
    });
});


//

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
