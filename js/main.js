const nav = document.querySelector('.navbar'); // Identify target
const button = document.querySelector('.arrow');

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    console.log(window.scrollY)

    if (window.scrollY >= 350) { // Just an example
        nav.style.backgroundColor = '#000'; // or default color
        nav.style.transition = ".8s";
        button.classList.add('opacity-100');
        button.style.transition = ".8s";
    

    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.transition = ".8s"
        button.classList.remove('opacity-100');
        button.style.transition = ".8s";
    }
});

button.addEventListener('click', () =>{
    scrollTo(0, 0)
})

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



let typed = new Typed('.typing-effect', {
    strings: [
    "WEB DEVELOPMENT",
    "CREATIVE DESIGN",
    "WEB DESIGN",
    "GRAPHIC DESIGN"
    ],
    backSpeed: '9',
    typeSpeed: '9',
    loop: true
    });