const button = document.getElementById("buttonSubmit");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const email = document.getElementById("correo").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    const hash = CryptoJS.SHA256(password);

    if (user.email == email && user.password == hash.toString()) {
      user.id = Date.now();

      localStorage.setItem("user", JSON.stringify(user));

      window.location = "../index.html";
    } else {
      alert("Los datos ingresados son incorrectos");
    }
  }
});
