const btn = document.getElementById('btnCalcular');
const salida = document.getElementById('salida');

var resultado = 0;
var faltar = 0;
var restantes = 0;
var aprobar = 0;
var final = 0;
var sumaTotal = 0;

btn.addEventListener('click', () => {
    const presente = parseInt(document.getElementById('presente').value);
    const ausente = parseInt(document.getElementById('ausente').value);
    const total = document.getElementById('total').value;

    resultado = (presente / total) * 100;
    totalAprobar(resultado, total, presente, ausente)
});

const totalAprobar = (resultado, total, presente, ausente) => {
    aprobar = (60 / 100) * total // calculo para saber el minimo de asistencias que necesitas para aprobar
    sumaTotal = presente + ausente

    if (sumaTotal <= total) {
        restantes = total - sumaTotal
        faltar = aprobar - presente
        final = restantes - faltar
    }

    if (final < 0)
        return salida.innerHTML ='No cumples con el mínimo de asistencia'

    if (final >= 0)
        return salida.innerHTML = `Tienes ${Math.round(resultado.toString())} % de asistencia <br/> Te quedan ${restantes} días de clases <br/> Puedes faltar ${Math.round(final)} veces más`
    
    if (sumaTotal > total)
        return salida.innerHTML ='Los valores ingresados no son válidos'
}