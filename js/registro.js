const button = document.getElementById("buttonSubmit");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("correo").value;
  const password = document.getElementById("password").value;

  const hash = CryptoJS.SHA256(password);

  const user = {
    email,
    password: hash.toString(),
  };

  localStorage.setItem("user", JSON.stringify(user));

  window.location = "../index.html";
});
