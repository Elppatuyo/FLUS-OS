// Contraseña temporal
const PASSWORD = "123";

// Entrar al sistema
function login() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === PASSWORD) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("desktop").style.display = "block";
    } else {
        error.textContent = "Contraseña incorrecta";
    }
}

// Actualizar reloj
function updateClock() {
    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
clock.textContent = `${h}:${m}`;
}

setInterval(updateClock, 1000);
updateClock();

// Botones temporales
window.onload = () => {

    document.getElementById("addGame").onclick = () => {
        alert("En la siguiente parte agregaremos el sistema Add Games.");
    };

    document.getElementById("settings").onclick = () => {
        alert("La configuración llegará en la siguiente parte.");
    };

};
