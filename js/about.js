const userInvitado = JSON.parse(localStorage.getItem("user"));
const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
const buttonLog = document.getElementById("login-register");
const buttonAdmin = document.getElementById("pag-admin");

if (userInvitado || userAdmin) {
  buttonLog.innerHTML =
    '<a class="nav-link" href="../html/login.html"><button>Cerrar Sesión</button></a>';
}

if (userAdmin) {
  buttonAdmin.innerHTML =
    "<a class=nav-link><button>Pagina de Admin</button></a>";
  buttonAdmin.addEventListener("click", function () {
    // Solicitar la contraseña al usuario
    const password = prompt(
      "Por favor ingrese la contraseña del usuarioAdmin:"
    );

    // Verificar si la contraseña es correcta
    if (password === userAdmin.password) {
      // Redirigir al usuario a la página de administración
      window.location.href = "../html/admin.html";
    } else {
      // Contraseña incorrecta, redirigir al usuario a la página de inicio
      alert("Contraseña incorrecta");
      window.location.href = "../html/aboutUs.html";
    }
  });
}
