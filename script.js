const passwordCorrecta = "123";

document.body.innerHTML = `
<div id="login">
  <h1>Windows OS</h1>
  <input id="password" type="password" placeholder="Contraseña">
  <button id="btnEntrar">Entrar</button>
</div>

<div id="os" style="display:none;">
  <h1>Bienvenido a tu OS</h1>
</div>
`;

document.getElementById("btnEntrar").onclick = function() {
  const password = document.getElementById("password").value;

  if (password === passwordCorrecta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("os").style.display = "block";
  } else {
    alert("Contraseña incorrecta");
  }
};
