//---------------------------------------------------------------------//
// Mostrar el tamaño del viewport

document.addEventListener("DOMContentLoaded", function() {
  browser_display_area();
  window.addEventListener("resize", browser_display_area);
});

function browser_display_area() {
  var viewportwidth;
  var viewportheight;
  
  if (typeof window.innerWidth != 'undefined') {
    viewportwidth = window.innerWidth;
    viewportheight = window.innerHeight;
  }
  
  var displayAreaElement = document.getElementById("display-area");
  displayAreaElement.innerHTML = 'El ancho de tu viewport es ' + viewportwidth + 'x' + viewportheight;
}

//---------------------------------------------------------------------//
// Frases random abajo de la foto

window.addEventListener('DOMContentLoaded', function() {
  var quotes = [
    "Experimenta la belleza de los ríos y cascadas de Bonito, donde puedes nadar, hacer snorkel y buceo en aguas cristalinas. También puedes hacer recorridos en bote, kayak y paddleboard para explorar las maravillas naturales de Bonito.",
    "Descubre la diversa flora y fauna de los bosques de Bonito, que albergan muchas especies raras y en peligro de extinción. Puedes hacer excursiones de senderismo y observación de aves para explorar la belleza de los bosques y ver la vida silvestre de cerca.",
    "Explora el mundo subterráneo de las cuevas y cavernas de Bonito, donde puedes ver impresionantes formaciones rocosas, ríos subterráneos y ecosistemas únicos. Puedes hacer recorridos guiados de las cuevas, donde podrás aprender sobre la geología e historia de la zona."
  ];
  var quoteContainer = document.getElementById("quoteContainer");

  function displayRandomQuote() {
    var rand = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = quotes[rand];
  }

  displayRandomQuote();

  setInterval(displayRandomQuote, 15000); // Para que cambie cada 15 segundos
});

//---------------------------------------------------------------------
// Cuenta regresiva a "promo primavera"

function countdown() {
  // Fecha limite: 21/09/20323
  const targetDate = new Date("September 21, 2023").getTime();

  // Actualizar el contador cada segundo
  const countdownInterval = setInterval(() => {
    // Obtener el dia y fecha actual
    const currentDate = new Date().getTime();

    // Calcular el tiempo restante
    const remainingTime = targetDate - currentDate;

    // Frenar la cuenta regresiva si ya llegamos a la fecha limite
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      return;
    }

    // Calcular los dias, horas, minutos y segundos restantes
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Mostrar el resultado en el elemento con id="countdown"
    document.getElementById("countdown").innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }, 1000);
}

// Llamar a la funcion cuando la pagina se cargue
window.onload = countdown;

