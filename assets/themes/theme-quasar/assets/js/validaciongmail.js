function validateEmail(email) {
  // Patrón para una dirección de correo electrónico válida
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;

  // Comprueba si la dirección de correo electrónico coincide con el patrón
  return regex.test(email);
}

// Ejemplo de uso
const email = "guerreroh335@gmail.com";

if (validateEmail(email)) {
  // La dirección de correo electrónico es válida
  console.log("se realizo la validacion correspondiente");
} else {
  // La dirección de correo electrónico no es válida
  console.log("no se hicieron las validaciones");
}

function verifyRecaptcha() {
  // Obtén el token de reCAPTCHA
  const token = grecaptcha.getResponse();

  // Verifica el token de reCAPTCHA
  const isVerified = grecaptcha.isTokenValid(token);

  // Haz algo con el resultado de la verificación
  if (isVerified) {
    // La solución de reCAPTCHA es válida
  } else {
    // La solución de reCAPTCHA no es válida
  }
}
