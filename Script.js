document.getElementById('cuentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Captura los valores ingresados
    const nombres = document.getElementById('nombres').value;
    const apodo = document.getElementById('apodo').value;
    const colorCabello = document.getElementById('colorCabello').value;
    const colorOjos = document.getElementById('colorOjos').value;
    const edad = document.getElementById('edad').value;
    const hobby = document.getElementById('hobby').value;

    // Genera el cuento
    const cuento = `Había una vez un joven llamado ${nombres}, conocido por sus amigos como "${apodo}". 
    Tenía un hermoso cabello de color ${colorCabello} y ojos ${colorOjos}. 
    A la edad de ${edad} años, ${nombres} disfrutaba de su hobby favorito: ${hobby}. 
    Un día, decidió aventurarse en una mágica travesía que cambiaría su vida para siempre.`;

    // Muestra el cuento en la página
    document.getElementById('cuento').innerText = cuento;
});