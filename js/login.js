const button = document.getElementById("buttonSubmit");
const buttonHome = document.getElementById("button-home");
const errorDiv = document.getElementById("errorDiv");

const userAdmin = {
  username: "admin",
  email: "admin@admin.com",
  password: "admin@123",
  admin: true,
};

localStorage.setItem("userAdmin", JSON.stringify(userAdmin));

button.addEventListener("click", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let user = null;

  if (username == userAdmin.username && password == userAdmin.password) {
    console.log("Logueado");

    window.location = "../html/admin.html";
  } else {
    user = JSON.parse(localStorage.getItem("user"));

    if (username == "" || password == "") {
      errorDiv.style.display = "block"; // Mostrar mensaje de error
    } else if (user && user.username == username && user.password == password) {
      user.id = Date.now();

      localStorage.setItem("user", JSON.stringify(user));

      window.location = "../index.html";
    } else {
      errorDiv.style.display = "block"; // Mostrar mensaje de error
    }
  }
});

buttonHome.addEventListener("click", function () {
  localStorage.removeItem("userAdmin");
});
