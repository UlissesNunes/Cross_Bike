
//Pegando elementos com o DOM
const linkNav = document.querySelectorAll('.nav a')
const sectionPage = document.querySelectorAll('.section')
//Precisamos manipular a rolagem (scroll) e verificar a posição da section
window.addEventListener('scroll', () => { 
sectionPage.forEach(section => {
    const posScroll = window.scrollY //Posição da rolagem 
    const posInitial = section.offsetTop - 40 //Posição inicial da section
    const heightSection = section.offsetHeight //Altura da section
    const idSection = section.getAttribute('id') //Pegando o id da section

    
    if(posScroll >= posInitial && posScroll < posInitial + heightSection){
        linkNav.forEach(link => {
            link.classList.remove('active')
            
        })

    }
})





})

// scripts/scrollMenu.js

/* const linkNav = document.querySelectorAll('.nav a'); // Seleciona os links <a> dentro de .nav
const sectionPage = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sectionPage.forEach(section => {
    const posScroll = window.scrollY;
    const posInitial = section.offsetTop - 40;
    const heightSection = section.offsetHeight;
    const idSection = section.getAttribute('id');

    if (posScroll >= posInitial && posScroll < posInitial + heightSection) {
      linkNav.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${idSection}`) {
          link.classList.add('active');
        }
      });
    }
  });
}); */