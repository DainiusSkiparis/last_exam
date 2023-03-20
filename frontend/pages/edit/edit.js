import { addInputs, addAttributes, addButtons, form, removePersonalCodeInput } from "../form/form.js";
import { getPlayerById, patchPlayer } from "../../commons/requests.js";

const heading = document.createElement("h2");
heading.textContent = "Edit tournament player!";
form.appendChild(heading);

addInputs();
addAttributes();
addButtons();
removePersonalCodeInput()

let oldPlayerData;
const loadPlayer = async () => {
    const form = document.querySelector("form");
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get("id");

    oldPlayerData = await getPlayerById(playerId);
    form.firstnameInput.value = oldPlayerData.firstname;
    form.lastnameInput.value = oldPlayerData.lastname;
    form.emailInput.value = oldPlayerData.email;
    form.startDateInput.value = oldPlayerData.chessStartDate;
};
loadPlayer();

const handleFormEdit = async (form) => {
    const player = {
        firstname: form.firstnameInput.value,
        lastname: form.lastnameInput.value,
        email: form.emailInput.value,
        chessStartDate: form.startDateInput.value,
    };
    await patchPlayer(player, oldPlayerData.id);
    window.location.replace("../list/list.html");
};

const submitButton = document.getElementById("addSubmitButton");
submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    if (form.checkValidity()) {
        await handleFormEdit(form);
    } else {
        form.reportValidity();
    }
});

const cancelButton = document.getElementById("addCancelButton");
cancelButton.addEventListener("click", async (e) => {
    e.preventDefault();
    window.location.replace("../list/list.html");
});
