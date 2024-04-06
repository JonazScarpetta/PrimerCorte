function mostrarformulario() {
  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comentarios = document.getElementById("coments").value;

  const anuncio = `gracia por darnos tu datos: ${nombre}. \n email = ${email} \n ${comentarios} `;
  alert(anuncio);
}
