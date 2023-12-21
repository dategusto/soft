$(window).on("scroll", function () {
  //efecto1
  var scrolled = $(this).scrollTop();
  $(".efecto1").css({
    transform: "translate3d(0, " + scrolled * 0.2 + "px,0)",
    opacity: 1 - scrolled / 400,
  });

  //efecto2
  var descubrir = document.getElementById("descubrir");
  d = descubrir.getBoundingClientRect().top - 300;
  $(".efecto2").css({
    transform: "translate3d(0, " + -d * 0.2 + "px,0)",
    opacity: 1 - d / 400,
  });

  //efecto3
  var surfing = document.getElementById("surfing");
  d = surfing.getBoundingClientRect().top - 300;
  $(".efecto3").css({
    transform: "translate3d(0, " + d * 0.3 + "px,0)",
    opacity: 1 - -d / 900,
  });

  //efecto4
  var esahora = document.getElementById("esahora");
  d = esahora.getBoundingClientRect().top - 100;
  $(".efecto4").css({
    transform: "translate3d(0, " + d * 0.3 + "px,0)",
    opacity: 1 - d / 900,
  });

  //animacion de mostrar texto botones
  let hideText_btn1 = document.getElementById("hideText_btn");

  let hideText1 = document.getElementById("hideText");

  hideText_btn1.addEventListener("click", toggleText);

  function toggleText() {
    setTimeout(() => {
      // Actualiza el texto del botón antes de ocultar o mostrar el texto
      if (hideText1.classList.contains("show")) {
        hideText_btn1.innerHTML = "Leer Más";
      } else {
        hideText_btn1.innerHTML = "Leer Menos";
      }

      // Oculta o muestra el texto
      hideText1.classList.toggle("show");
    }, 10);
  }
  let hideText_btn3 = document.getElementById("hideText_btn2");

  let hideText3 = document.getElementById("hideText2");

  hideText_btn3.addEventListener("click", toggleText2);

  function toggleText2() {
      // Actualiza el texto del botón antes de ocultar o mostrar el texto
      if (hideText3.classList.contains("show2")) {
        hideText_btn3.innerHTML = "Leer Más";
      } else {
        hideText_btn3.innerHTML = "Leer Menos";
      }
      // Oculta o muestra el texto
      hideText3.classList.toggle("show2");
    }
});
