// Mostrar el tamaño del viewport

// Agrega un evento que se ejecuta cuando el contenido de la web se cargó completamente
document.addEventListener("DOMContentLoaded", function() {
    // Llama a la función "browser_display_area" para mostrar el tamaño del viewport
    browser_display_area();
    // Agrega un evento que se ejecuta cuando se cambia el tamaño de la ventana
    window.addEventListener("resize", browser_display_area);
});

// Define una función para obtener y mostrar el tamaño del viewport
function browser_display_area() {
    let viewportwidth;
    let viewportheight;

    // Verifica si la propiedad "window.innerWidth" está definida para obtener el ancho y alto del viewport
    if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerWidth;
        viewportheight = window.innerHeight;
    }

    // Obtiene el elemento con el ID "display-area"
    let displayAreaElement = document.getElementById("display-area");
    // Actualiza el contenido HTML del elemento con el tamaño del viewport
    displayAreaElement.innerHTML = 'El tamaño de tu viewport es ' + viewportwidth + 'x' + viewportheight;
}

//---------------------------------------------------------------------
// Frases random abajo de la foto

// Agrega un evento que se ejecuta cuando el contenido de la web se cargó completamente
window.addEventListener('DOMContentLoaded', function() {
    // Define un arrange de frases
    const quotes = [
        "Experimentá la belleza de los ríos y cascadas de Bonito, donde podés nadar, hacer snorkel y buceo en unas de las aguas más cristalinas del mundo.",
        "Preparate para hacer recorridos en kayak, paddleboard y a flote para explorar sus maravillas naturales.",
        "Podés hacer excursiones de senderismo y observación de aves para explorar la belleza de la selva y ver la vida silvestre de cerca.",
        "Explorá el mundo subterráneo de las cuevas y cavernas de Bonito, donde podés ver impresionantes formaciones rocosas, ríos subterráneos y ecosistemas únicos.",
        "Podés hacer recorridos guiados de las cuevas, donde aprenderás sobre la geología e historia de la zona.",
        "Adentrate en la exuberante selva de Bonito y maravillate con su diversidad de especies vegetales y animales.",
        "Descubrí la emoción de recorrer senderos en medio de la selva y observa de cerca monos, aves tropicales y muchos otros habitantes de este ecosistema único.",
        "Sumergite en la aventura y disfruta de actividades como el rappel, el canopy y el safari fotográfico en la selva de Bonito, viviendo experiencias inolvidables rodeado de naturaleza salvaje."
    ];

    // Obtiene el contenedor donde se mostrarán las frases
    let quoteContainer = document.getElementById("quoteContainer");

    // Define una función para mostrar una frase aleatoria
    function displayRandomQuote() {
        // Genera un número aleatorio entre 0 y la longitud del arrange de frases
        let rand = Math.floor(Math.random() * quotes.length);
        // Asigna el contenido de texto de quoteContainer a la frase seleccionada
        quoteContainer.textContent = quotes[rand];
    }

    // Muestra una frase aleatoria al cargar la página
    displayRandomQuote();

    // Establece un intervalo para cambiar la frase cada 15 segundos
    setInterval(displayRandomQuote, 7000);
});

//---------------------------------------------------------------------
// Cuenta regresiva para "promo primavera"

// Uso una función anónima autoejecutable para evitar conflictos de nombres y mantener el ámbito local.
(function() {
    // Se definen las constantes para representar las unidades de tiempo en milisegundos.
    const segundo = 1000,
        minuto = segundo * 60,
        hora = minuto * 60,
        dia = hora * 24;

    // Se define el 21 de septiembre de 2023 como fecha objetivo y se convierte a milisegundos.
    const fechaObjetivo = new Date("September 21, 2023").getTime();

    // Se utiliza setInterval para ejecutar la función cada segundo.
    const cuentaRegresiva = setInterval(function() {
        // Se obtiene la fecha actual en milisegundos.
        const ahora = new Date().getTime();

        // Se calcula la diferencia entre la fecha objetivo y la fecha actual.
        const distancia = fechaObjetivo - ahora;

        // Se actualizan los elementos en el documento HTML con los valores correspondientes.
        document.getElementById("days").innerText = Math.floor(distancia / dia);
        document.getElementById("hours").innerText = Math.floor((distancia % dia) / hora);
        document.getElementById("minutes").innerText = Math.floor((distancia % hora) / minuto);
        document.getElementById("seconds").innerText = Math.floor((distancia % minuto) / segundo);

        // Si la distancia es menor que cero, significa que se alcanzó o pasó la fecha objetivo.
        // Se actualiza el texto del "headline" y se oculta el elemento "countdown".
        if (distancia < 0) {
            document.getElementById("headline").innerText = "Llegó la Promo Primavera!";
            document.getElementById("countdown").style.display = "none";

            // Se utiliza clearInterval para detener la ejecución de la cuenta regresiva.
            clearInterval(cuentaRegresiva);
        }
    }, 1000);
})();