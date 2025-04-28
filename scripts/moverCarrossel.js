
/* let count = 1;
    const radios = document.querySelectorAll('.manual-navegation input[type="radio"]'); // Seleciona os rádios corretamente

    if (radios.length > 0) {
        radios[0].checked = true; // Marca o primeiro rádio inicialmente
    }

    const nextCarrossel = () => {
        count++;
        if (count > radios.length) {
            count = 1;
        }
        const radioSelecionado = document.getElementById("radio" + count);
        if (radioSelecionado) {
            radioSelecionado.checked = true;
        }
    };

    setInterval(nextCarrossel, 2000);




let count = 1;
const radios = document.querySelectorAll('.manual-navegation input[type="radio"]');

if (radios.length > 0) {
    radios[0].checked = true;
}

const nextCarrossel = () => {
    count++;
    if (count > radios.length) {
        count = 1; // Volta para o primeiro slide ao atingir o último
    }
    const radioSelecionado = document.getElementById("radio" + count);
    if (radioSelecionado) {
        radioSelecionado.checked = true;
    }
};

setInterval(nextCarrossel, 2000); 

let count = 1
document.getElementById("radio1").checked = true

setInterval ( function() {
    nextImage()
}, 2000)

function nextImage() {
    count++
    if (count > 2) {
        count = 1
    }

    document.getElementById("radio1" +count).checked = true
}*/
let count = 1;
document.getElementById("radio1").checked = true;

// Pegando todos os inputs de tipo radio
const radios = document.querySelectorAll('input[type="radio"]');
const totalRadios = radios.length;

function nextCarrossel() {
    count++;
    if (count > totalRadios) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

setInterval(nextCarrossel, 6000);
