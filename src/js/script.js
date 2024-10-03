const header = document.getElementById("header");

// Agrega un evento de scroll a la ventana
window.addEventListener("scroll", () => {
  // Verifica si el usuario ha hecho scroll
  if (window.scrollY > 50) {
    // Scroll Activo
    header.classList.add("scrolled");
  } else {
    // Scroll Inactivo
    header.classList.remove("scrolled");
  }
});
