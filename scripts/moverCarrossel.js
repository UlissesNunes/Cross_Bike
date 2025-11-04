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
setInterval(nextCarrossel, 4000);