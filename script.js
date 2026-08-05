const passwordCorrecta = "123";

function entrar() {
  const password = document.getElementById("password").value;

  if (password === passwordCorrecta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("os").style.display = "block";
  } else {
    alert("Contraseña incorrecta");
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    entrar();
  }
});
