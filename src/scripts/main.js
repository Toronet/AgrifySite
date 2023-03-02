AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

//@: Utility function that takes in a HTML element
//@: and scrolls to the starting point of that element.
const goTo = (el) => {
  if(el){
    el.scrollIntoView({
      behavior: "auto",
      block: "start",
      inline: "nearest"
    });
  }
  else console.error("Element not found.")
}

//@: Select the hero button
const heroButton = document.querySelector('.--hero');

//@: Select the necessary sections
const heroSection = document.querySelector('.hero');
const demoSection = document.querySelector('.demo');
const aboutSection = document.querySelector('.about');
const contactSection = document.querySelector('.contact');

//@: Select all nav links on the header
const navLinks = document.querySelectorAll('.header__nav__list > li');
navLinks.forEach((link) => {
  link.addEventListener('click', function (e){
    e.preventDefault();
    
    switch(link.id){
      case "home":
        goTo(heroSection);
        break;
      case "about":
        goTo(aboutSection);
        break;
      case "demo":
        goTo(demoSection);
        break;
      case "contact":
        goTo(contactSection);
      default:
        console.log("Did not execute")
        break;
    }
  })
});

//@: Select all list items on the footer
const footerLinks = document.querySelectorAll('.footer__item__list > li');
footerLinks.forEach((link) => {
  link.addEventListener('click', function (e){
    e.preventDefault();
    switch(link.id){
      case "home":
        goTo(heroSection);
        break;
      case "about":
        goTo(aboutSection);
        break;
      case "demo":
        goTo(demoSection);
        break;
      case "contact":
        goTo(contactSection);
      default:
        console.log("Did not execute")
        break;
    }
  })
});

//@: Hero button click event listener
heroButton.addEventListener('click', function (e) {
  e.preventDefault();
  goTo(contactSection)
});
