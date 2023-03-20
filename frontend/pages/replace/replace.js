import { addInputs, addAttributes, addButtons, form } from "../form/form.js";
import { getPlayerById, putPlayer } from "../../commons/requests.js";

const heading = document.createElement("h2");
heading.textContent = "Replace tournament player!";
form.appendChild(heading);

addInputs();
addAttributes();
addButtons();

let oldPlayerData;
const loadPlayer = async () => {
    const form = document.querySelector("form");
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get("id");

    oldPlayerData = await getPlayerById(playerId);
};
loadPlayer();

const handleFormReplace = async (form) => {
    const player = {
        firstname: form.firstnameInput.value,
        lastname: form.lastnameInput.value,
        email: form.emailInput.value,
        personalCode: form.personalCodeInput.value,
        chessStartDate: form.startDateInput.value,
    };
    await putPlayer(player, oldPlayerData.id);
    window.location.replace("../list/list.html");
};

const submitButton = document.getElementById("addSubmitButton");
submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    if (form.checkValidity()) {
        await handleFormReplace(form);
    } else {
        form.reportValidity();
    }
});

const cancelButton = document.getElementById("addCancelButton");
cancelButton.addEventListener("click", async (e) => {
    e.preventDefault();
    window.location.replace("../list/list.html");
});