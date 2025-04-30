
const linkNav = document.querySelectorAll('.nav a')
const sectionPage = document.querySelectorAll('.section')
//Precisamos manipular a rolagem (scroll) e verificar a posição da section em relação ao scroll da página. Para isso, utilizamos o evento scroll do objeto window.
window.addEventListener('scroll', () => {
  sectionPage.forEach(section => {
    const posScroll = window.scrollY;//Posição da rolagem da página
    const posInitial = section.offsetTop - 40;//Posição inicial da section
    const heightSection = section.offsetHeight; //Altura da section
    const idSection = section.getAttribute('id') //id da section

    if (posScroll >= posInitial && posScroll < posInitial + heightSection) {
      linkNav.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${idSection}`) {
          link.classList.add('active')
        }
      })
    }
  })
})

/*
const scrollSection = (event) =>{
    event.preventDefault()
    const VerifElement = event.currentTarget.getAttribute('href')
    const element = document.querySelector(VerifElement)
    const positionScroll = section.offsetTop - 40;
    //const position = element.offsetTop
    window.scrollto({
        top: positionScroll,
        behavior: 'smooth'
    })


} */


const scrollSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const element = document.querySelector(href);

    if (element) {
        const positionScroll = element.offsetTop -132.36;

        window.scrollTo({
            top: positionScroll,
            behavior: 'smooth'
        });
    }
};

linkNav.forEach(link => {
    link.addEventListener('click', scrollSection);
});
