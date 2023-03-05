const button = document.getElementById("buttonSubmit");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const user = {
    username: document.getElementById("username").value,
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("correo").value,
    password: document.getElementById("password").value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  window.location = "../index.html";
});
