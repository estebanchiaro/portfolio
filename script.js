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

//--------- AVATAR IMG CHANGE ------------//
const avatarContainer = document.querySelector('.avatar')
const avatarOverlay = document.querySelector('.overlay-avatar')

avatarContainer.addEventListener('touchstart', () => {
  avatarOverlay.style.display = 'block'
})

avatarContainer.addEventListener('touchend', () => {
  avatarOverlay.style.display = 'none'
})

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

//----------------- Nav Bar ----------------------//

const nav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.menu-toggle');
const pageBody= document.querySelector('body');
const headerNav= document.getElementById('header');


navToggle.addEventListener('click', (e) => {
    navToggle.classList.toggle('menu-toggle-active');

    const visibility = nav.getAttribute('data-visible');
    if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        e.target.setAttribute('aria-expanded', true);
        pageBody.classList.add('nav_open-no_scroll');
        headerNav.classList.add('nav-bar-open');

    } else {
        nav.setAttribute('data-visible', false);
        e.target.setAttribute('aria-expanded', false);
        pageBody.classList.remove('nav_open-no_scroll');
        headerNav.classList.remove('nav-bar-open');
    }
});

//---------------- NAV BAR CLOSE ------------//
const navLinks = document.querySelector('.nav')
  
const focusableElements =
  'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), details:not([disabled]), [tabindex]:not([tabindex="-1"])'

const firstFocusableElement = navLinks.querySelectorAll(focusableElements)[0]
const focusableContent = navLinks.querySelectorAll(focusableElements)
const lastFocusableElement = focusableContent[focusableContent.length - 1]

const navigationLinks= document.querySelectorAll('.nav-link')

navigationLinks.forEach((link)=>{
  link.addEventListener('click', ()=> {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    navToggle.classList.toggle('menu-toggle-active');
    pageBody.classList.remove('nav_open-no_scroll');
    headerNav.classList.remove('nav-bar-open');
  })
})

