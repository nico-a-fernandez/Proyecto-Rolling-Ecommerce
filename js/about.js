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
    '<a class="nav-link" href="../html/admin.html"><button>Pagina de Admin</button></a>';
}
