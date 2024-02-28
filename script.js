    
    // carousel part
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:true
            }
        }
    })
    
    // carousel part

    // subscribe js
    var subscribe_button = document.querySelector(".subscribe_button");

    subscribe_button.addEventListener('click', function(){
	var subscribing = document.querySelector(".subscribing");
	var thanks = document.querySelector(".thanks");
	var login = document.querySelector(".login");

	subscribing.classList.add("subscribing_active");
	subscribe_button.classList.add("subscribe_button_active");
	setTimeout(function(){
		login.classList.add("login_active");
	}, 1200);
	setTimeout(function(){
		thanks.classList.add("thanks_active");
	}, 1400);

	setTimeout(function(){
		thanks.classList.remove("thanks_active");
		login.classList.remove("login_active");
		subscribing.classList.remove("subscribing_active");
		subscribe_button.classList.remove("subscribe_button_active");
	}, 4000);
    });
    // subscribe js


    /*####################### Filter Buttons ####################################### */

filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


/*####################### Filter Suche ####################################### */

function searchFunction() {
    // Declare variables
    var input, filter, list, i;
    input = document.getElementById('searchinput');
    filter = input.value.toUpperCase();
    list = document.getElementsByClassName('content');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < list.length; i++) {
        if (list[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            list[i].parentElement.parentElement.style.display = "";
        } else {
            list[i].parentElement.parentElement.style.display = "none";
        }
    }
}


var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}


//review part js
$(".button-next").click(function() {
    var e = $(".feature-slide.active");
    $(e).removeClass("active"), 
    $(e).next().addClass("active"), 
    $(".feature-slide").hasClass("active") || $(".feature-slide:first").addClass("active")
  });
  
  $(".button-prev").click(function() {
    var e = $(".feature-slide.active");
    $(e).removeClass("active"), $(e).prev().addClass("active"), $(".feature-slide").hasClass("active") || $(".feature-slide:last").addClass("active")
  });
//review part js