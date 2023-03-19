import { savePlayer } from "../../commons/requests.js";

const input = document.getElementById("personalCodeInput");
const maxLength = input.maxLength;
input.addEventListener("input", function () {
    if (this.value.length > maxLength) {
        this.value = this.value.slice(0, maxLength);
    }
});

const maxDate = new Date().toISOString().split('T')[0];
document.getElementById("startDateInput").setAttribute("max", maxDate);

const handleFormSubmit = async (form) => {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log(form.startDateInput.value)
        const player = {
            firstname: form.firstnameInput.value,
            lastname: form.lastnameInput.value,
            email: form.emailInput.value,
            personalCode: form.personalCodeInput.value,
            chessStartDate: form.startDateInput.value,
        };
        await savePlayer(player);
        window.location.reload();
    });
};

const handleCancelButton = () => {
    document.getElementById("cancelButton").addEventListener("click", () => {
        window.location.replace("/index.html");
    });
};

(async () => {
    const form = document.querySelector("form");
    handleCancelButton();
    await handleFormSubmit(form);
})();