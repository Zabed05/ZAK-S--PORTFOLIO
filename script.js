const navLinks= document.querySelectorAll('header nav a');
const logoLink= document.querySelector('.logo');
const sections= document.querySelectorAll('section');

const activePage=() =>{
    navLinks.forEach(link =>{
        link.classList.remove('active');
    });

     sections.forEach(section =>{
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

navLinks.forEach((link, idx) =>{
    link.addEventListener('click', () =>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(()=>{
                sections[idx].classList.add('active');
            },10)
        }
    });
});

logoLink.addEventListener('click', () =>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(()=>{
            sections[0].classList.add('active');
        },10)
    }
});

// MENU ICON CONTROL

const menuIcon= document.querySelector('#menu-icon');
const navbar= document.querySelector('header nav');

menuIcon.addEventListener('click',() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// PROJECT SECTION (CLICK FUNCTION)

const arrowRight= document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft= document.querySelector('.project-box .navigation .arrow-left');

let index= 0;
const activeProject=() =>{
    const imgSlide= document.querySelector('.project .img-slide');
    const projectDetails= document.querySelectorAll('.project-details');

    imgSlide.style.transform= `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    projectDetails.forEach(details => {
        details.classList.remove('active');
    });
    projectDetails[index].classList.add('active');
}
arrowRight.addEventListener('click',()=>{
    if(index < 1){
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index= 2;
        arrowRight.classList.add('disabled');
    }
    activeProject();
});
arrowLeft.addEventListener('click',()=>{
    if(index > 1){
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index= 0;
        arrowLeft.classList.add('disabled');
    }
    activeProject();
});

// Disable scroll-based section highlighting for now (This Section copied from AI)

window.addEventListener("scroll", () => {
  let currentPos = window.scrollY;

  sections.forEach((sec) => {
    let offsetTop = sec.offsetTop - 150;
    let offsetBottom = offsetTop + sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (currentPos >= offsetTop && currentPos < offsetBottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Optional: also add active class when clicked

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

//When refresh the page it will smoothly return on the Home Section

window.addEventListener("load", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});