const button = document.getElementById("buttonSubmit");

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

  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    if (
      (user.username == username && user.password == password) ||
      (userAdmin.username == username && userAdmin.password == password)
    ) {
      user.id = Date.now();

      localStorage.setItem("user", JSON.stringify(user));

      window.location = "../index.html";
    } else {
      alert("Los datos ingresados son incorrectos");
    }
  }
});
