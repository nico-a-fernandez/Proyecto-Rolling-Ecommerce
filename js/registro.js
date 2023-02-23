const button = document.getElementById("buttonSubmit");

let userList = [];

button.addEventListener("click", (event) => {
  event.preventDefault();

  const password = document.getElementById("password").value;

  const hash = CryptoJS.SHA256(password);

  const user = {
    username: document.getElementById("username").value,
    name: document.getElementById("name").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("correo").value,
    password: hash.toString(),
  };

  userList += user;

  localStorage.setItem("user", JSON.stringify(user));

  window.location = "../index.html";
});
