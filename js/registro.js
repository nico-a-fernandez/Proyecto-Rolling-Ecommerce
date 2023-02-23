const button = document.getElementById("buttonSubmit");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const password = document.getElementById("password").value;

  const hash = CryptoJS.SHA256(password);

  const user = {
    name: document.getElementById("username").value,
    lastname: document.getElementById("userlastname").value,
    email: document.getElementById("correo").value,
    password: hash.toString(),
  };

  localStorage.setItem("user", JSON.stringify(user));

  window.location = "../index.html";
});
