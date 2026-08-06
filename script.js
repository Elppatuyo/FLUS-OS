const PASSWORD = "123";

const login = document.getElementById("login");
const desktop = document.getElementById("desktop");

const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const error = document.getElementById("error");

const clock = document.getElementById("clock");

const windowBox = document.getElementById("window");
const closeWindow = document.getElementById("closeWindow");

loginBtn.onclick = function () {

    if (password.value === PASSWORD) {

        login.style.display = "none";
        desktop.style.display = "block";

    } else {

        error.innerHTML = "Contraseña incorrecta";

    }

};

password.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        loginBtn.click();
    }

});

function updateClock(){

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();

    if(h < 10) h = "0" + h;
    if(m < 10) m = "0" + m;

    clock.innerHTML = h + ":" + m;

}

updateClock();

setInterval(updateClock,1000);

document.getElementById("settings").onclick = function(){

    windowBox.style.display = "block";

    document.getElementById("windowTitle").innerHTML =
    "Configuración";

    document.getElementById("frame").src =
    "about:blank";

};

document.getElementById("addGames").onclick = function(){

    windowBox.style.display = "block";

    document.getElementById("windowTitle").innerHTML =
    "Add Games";

    document.getElementById("frame").src =
    "about:blank";

};

closeWindow.onclick = function(){

    windowBox.style.display = "none";

    document.getElementById("frame").src = "";

};
