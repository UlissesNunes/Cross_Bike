let count = 1;
document.getElementById("radio1").checked = true;

const radios = document.querySelectorAll('input[type="radio"]');
const totalRadios = radios.length;

function nextCarrossel() {
    count++;
    if (count > totalRadios) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

setInterval(nextCarrossel, 4000);

const linkNav = document.querySelectorAll('.nav a');
const sectionPage = document.querySelectorAll('.section');

function alturaHeader() {
    return document.querySelector('header').offsetHeight;
}

window.addEventListener('scroll', () => {
    const offset = alturaHeader();
    sectionPage.forEach(section => {
        const posScroll = window.scrollY;
        const posInitial = section.offsetTop - offset;
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
});

const scrollSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const element = document.querySelector(href);
    if (!element) return;
    requestAnimationFrame(() => {
        const positionScroll = element.offsetTop - alturaHeader();
        window.scrollTo({
            top: positionScroll,
            behavior: 'smooth'
        });
    });
};

linkNav.forEach(link => {
    link.addEventListener('click', scrollSection);
});

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}