(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });


	$('.loop').owlCarousel({
      center: true,
      items:1,
      loop:true,
      autoplay: true,
      nav: true,
      margin:0,
      responsive:{ 
          1200:{
              items:5
          },
          992:{
              items:3
          },
          760:{
            items:2
        }
      }
  });
  
  $("#modal_trigger").leanModal({
		top: 100,
		overlay: 0.6,
		closeButton: ".modal_close"
});

$(function() {
		// Calling Login Form
		$("#login_form").click(function() {
				$(".social_login").hide();
				$(".user_login").show();
				return false;
		});

		// Calling Register Form
		$("#register_form").click(function() {
				$(".social_login").hide();
				$(".user_register").show();
				$(".header_title").text('Register');
				return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function() {
				$(".user_login").hide();
				$(".user_register").hide();
				$(".social_login").show();
				$(".header_title").text('Login');
				return false;
		});
});

  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });
	

	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
      $(document).on("scroll", onScroll);
      
      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");
          
          $('.scroll-to-section a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');
        
          var target = this.hash,
          menu = target;
          var target = $(this.hash);
          $('html, body').stop().animate({
              scrollTop: (target.offset().top) + 1
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
  });

  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.nav a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.nav ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }


  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });


	// Page loading animation
	 $(window).on('load', function() {

        $('#js-preloader').addClass('loaded');

    });

	

	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }




})(window.jQuery);


// Sticky Nav //

const header = document.querySelector('header');
window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop > 20){
    header.classList.add("header-sticky");
  }
  else{
    header.classList.remove("header-sticky");
  }
})


const nav = document.querySelector('nav');
window.addEventListener("scroll",function(){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
})


// Sign up file uploader //

// const form = document.querySelector("form"),
// fileInput = document.querySelector(".file-input"),
// progressArea = document.querySelector(".progress-area"),
// uploadedArea = document.querySelector(".uploaded-area");

// // form click event
// form.addEventListener("click", () =>{
//   fileInput.click();
// });

// fileInput.onchange = ({target})=>{
//   let file = target.files[0]; //getting file [0] this means if user has selected multiple files then get first one only
//   if(file){
//     let fileName = file.name; //getting file name
//     if(fileName.length >= 12){ //if file name length is greater than 12 then split it and add ...
//       let splitName = fileName.split('.');
//       fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
//     }
//     uploadFile(fileName); //calling uploadFile with passing file name as an argument
//   }
// }

// // file upload function
// function uploadFile(name){
//   let xhr = new XMLHttpRequest(); //creating new xhr object (AJAX)
//   xhr.open("POST", "php/upload.php"); //sending post request to the specified URL
//   xhr.upload.addEventListener("progress", ({loaded, total}) =>{ //file uploading progress event
//     let fileLoaded = Math.floor((loaded / total) * 100);  //getting percentage of loaded file size
//     let fileTotal = Math.floor(total / 1000); //gettting total file size in KB from bytes
//     let fileSize;
//     // if file size is less than 1024 then add only KB else convert this KB into MB
//     (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
//     let progressHTML = `<li class="row">
                          
//                           <div class="content">
//                           <i class="fas fa-file-alt"></i>
//                             <div class="details">
//                               <span class="name">${name} • Uploading</span>
//                               <span class="percent">${fileLoaded}%</span>
//                             </div>
//                             <div class="progress-bar">
//                               <div class="progress" style="width: ${fileLoaded}%"></div>
//                             </div>
//                           </div>
//                         </li>`;
//     // uploadedArea.innerHTML = ""; //uncomment this line if you don't want to show upload history
//     uploadedArea.classList.add("onprogress");
//     progressArea.innerHTML = progressHTML;
//     if(loaded == total){
//       progressArea.innerHTML = "";
//       let uploadedHTML = `<li class="row">
//                             <div class="content upload">
//                               <i class="fas fa-file-alt"></i>
//                               <div class="details">
//                                 <span class="name">${name} • Uploaded</span>
//                                 <span class="size">${fileSize}</span>
//                               </div>
//                               <i class="fas fa-check"></i>
//                             </div>
                          
//                           </li>`;
//       uploadedArea.classList.remove("onprogress");
//       // uploadedArea.innerHTML = uploadedHTML; //uncomment this line if you don't want to show upload history
//       uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML); //remove this line if you don't want to show upload history
//     }
//   });
//   let data = new FormData(form); //FormData is an object to easily send form data
//   xhr.send(data); //sending form data
// }



