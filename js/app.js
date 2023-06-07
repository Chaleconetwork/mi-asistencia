const btn = document.getElementById('btnCalcular');
const salida = document.getElementById('salida');

let resultado = 0;
let faltar = 0;
let restantes = 0;
let aprobar = 0;
let final = 0;
let sumaTotal = 0;
let inputVacio = 'Oops... Asegurate de no dejar ningún campo vacío 😅';

btn.addEventListener('click', () => {
    const presente = parseInt(document.getElementById('presente').value);
    const ausente = parseInt(document.getElementById('ausente').value);
    const total = document.getElementById('total').value;

    resultado = (presente / total) * 100;
    totalAprobar(Math.round(resultado), total, presente, ausente);
});

const totalAprobar = (resultado, total, presente, ausente) => {
    aprobar = (60 / 100) * total // asistencia en porcentaje
    sumaTotal = presente + ausente

    if (sumaTotal <= total) {
        restantes = total - sumaTotal
        faltar = aprobar - presente
        final = Math.round(restantes - faltar)
    }

    if (!Number.isInteger(parseFloat(presente)))
        return dialogAlert(inputVacio)

    if (!Number.isInteger(parseFloat(ausente)))
        return dialogAlert(inputVacio)

    if (!Number.isInteger(parseFloat(total)))
        return dialogAlert(inputVacio)

    if ((presente + ausente) > total)
        return dialogAlert('Oops... Parece que las clases presentes y ausentes sobrepasen el total de clases 😅')

    if (presente == 0 && ausente == 0 && total == 0)
        return

    if (final < 0)
        return dialogAlert('No cumples con el mínimo de asistencia para alcanzar el 60% 😥')

    if (final >= 0)
        return salida.innerHTML = 
        `Tienes ${resultado.toString()} % de asistencia
        ${restantes === 0 ? 'y ya no te quedan más clases': `<br/> Y te quedan ${restantes} semana/as de clases <br/> Puedes faltar 
        ${final === 1 ? final + ' vez más' : final + ' veces más'}`}`;

    if (sumaTotal > total)
        return salida.innerHTML = 'Los valores ingresados sobrepasan la cantidad de clases';
}

const dialogAlert = mensaje => {
    const dialogContainer = document.getElementById("dialog-container");
    const dialogText = document.getElementById("dialog-text");

    dialogContainer.classList.add("show");

    dialogText.textContent = mensaje

    setTimeout(() => {
        dialogContainer.classList.remove("show");
    }, 5000);
}