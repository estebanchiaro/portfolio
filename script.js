//----------------- header ----------------------

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 60) {
            $('.header-inner').addClass('header-inner-active');
        } else {
            $('.header-inner').removeClass('header-inner-active');
        }
    });
});

//------------- IFRAME ---------------------//
$(window)
  .on('load resize', () => {
    var projectGridHeight = $('iframe')
      .contents()
      .find('.project-grid')
      .height()
    $('iframe').css('height', projectGridHeight)
    $('iframe').attr('height', projectGridHeight)
  })
  .resize()





//------------------- NAV BAR ------------- //
//we need to match nav links to section IDs ....... so we grab sections and navlinks
const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('nav a');

//when we scroll the page ...
window.onscroll = () => {
  //create empty variable for ID of section currently in view
  var current = '';

  //loop through sections to find out which section in view
  sections.forEach((section) => {
    //variable for how far a section is from top of page
    const sectionTop = section.offsetTop;
    //variable for height of entire page
    const pageHeight = document.body.offsetHeight;

    // scrollY is distance we have scrolled from top of page, console.log(scrollY) if u wanna see it in action
    //compare how far we scroll from top of page TO how far a section is from top of page. if distances match, we know a specific section is in view (we do minus 80 so active-nav switches a bit before section at top of page)
    // && AND
    // make sure we not within 800px of bottom of the page
    // ...this because our code says whatever section was last current, keep matching nav active until reach next <section>. but contact is last section and we dont want 'contact' nav link active over footer
    if (scrollY >= sectionTop - 80 && pageHeight - scrollY >= 800) {
      //set empty variable to id of current section
      current = section.getAttribute('id');
    }
  });

  //after using previous loop to find out which section is in view, loop through navlinks to match section ID to navlink class. if match, show active state. if not, remove.
  navLink.forEach((link) => {
    link.classList.remove('active-link');
    if (link.classList.contains(current)) {
      link.classList.add('active-link');
    }
  });
};

//----------------- Projects Pop up ----------------------

// var modal1= document.getElementById('modal1');
// var btn=document.getElementById('myBtn');
// var projectModalClose=document.querySelector('.close');

// btn.onclick= function(){
//     modal1.style.display= "block";
//     modal1.setAttribute("data-visible", true);
// }

// projectModalClose.onclick= function(){
//     modal1.style.display='none';
//     modal1.setAttribute("data-visible", false);
// }

// window.onclick = function (e){
//     if(e.target== modal1){
//         modal1.style.display='none';
//         modal1.setAttribute("data-visible", false)
//     }
// }
