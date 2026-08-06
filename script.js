const PASSWORD = "123";

const lockScreen = document.getElementById("lockScreen");
const desktop = document.getElementById("desktop");
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

desktop.style.display = "none";

loginBtn.onclick = function () {

    if (passwordInput.value === PASSWORD) {

        lockScreen.style.display = "none";
        desktop.style.display = "block";

    } else {

        loginError.textContent = "Contraseña incorrecta";

    }

};

function updateClock(){

    const clock = document.getElementById("taskbarClock");

    const d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();

    if(h < 10) h = "0" + h;
    if(m < 10) m = "0" + m;

    clock.textContent = h + ":" + m;

}

updateClock();

setInterval(updateClock,1000);8
);
