const btn = document.getElementById('btnCalcular');
const salida = document.getElementById('salida');

let resultado = 0;
let faltar = 0;
let restantes = 0;
let aprobar = 0;
let final = 0;
let sumaTotal = 0;

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

    if (final < 0)
        return salida.innerHTML = 'No cumples con el mínimo de asistencia para alcanzar el 60%';

    if (final >= 0)
        return salida.innerHTML = `Tienes ${resultado.toString()} % de asistencia <br/> Te quedan ${restantes} semanas de clases <br/> Puedes faltar 
        ${final === 1 ? final + ' vez más' : final + ' veces más'}`;

    if (sumaTotal > total)
        return salida.innerHTML = 'Los valores ingresados sobrepasan la cantidad de clases';
}