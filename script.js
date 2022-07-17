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

const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('nav a');

window.onscroll = () => {
  var current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const pageHeight = document.body.offsetHeight;

      if (scrollY >= sectionTop - 80 && pageHeight - scrollY >= 800) {
      current = section.getAttribute('id');
    }
  });
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

//--------- ABOUT TEXT CHANGE ------------//
const programmingLanguages = document.querySelector('.programming-languages')


programmingLanguages.addEventListener('touchstart', () => {
  programmingLanguages.classList.add('.programming-languages')
})

programmingLanguages.addEventListener('touchend', () => {
  programmingLanguages.classList.remove('.programming-languages')
})