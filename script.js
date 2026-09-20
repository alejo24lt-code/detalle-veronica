const button = document.getElementById("surpriseBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {

    message.style.display = "block";

    button.textContent = "💛 Sorpresa desbloqueada";

});