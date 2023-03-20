import { addInputs, addRegistrationButtons, form } from "../form/form.js";
import { getPlayerById, putPlayer } from "../../commons/requests.js";

const heading = document.createElement("h2");
heading.textContent = "Replace tournament player!";
form.appendChild(heading);

addInputs();
addRegistrationButtons();


let oldPlayerData;
const loadPlayer = async () => {
    const form = document.querySelector("form");
    const urlParams = new URLSearchParams(window.location.search);
    const playerId = urlParams.get("id");

    oldPlayerData = await getPlayerById(playerId);
    // form.firstnameInput.value = oldPlayerData.firstname;
    // form.lastnameInput.value = oldPlayerData.lastname;
    // form.emailInput.value = oldPlayerData.email;
    // form.startDateInput.value = oldPlayerData.chessStartDate;
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
    // const player = {
    //     firstname:
    //         oldPlayerData.firstname !== form.firstnameInput.value
    //             ? form.firstnameInput.value
    //             : undefined,
    //     lastname:
    //         oldPlayerData.lastname !== form.form.lastnameInput.value
    //             ? form.form.lastnameInput.value
    //             : undefined
    // };

    await putPlayer(player, oldPlayerData.id);
    window.history.back();
};

const submitButton = document.getElementById("addSubmitButton");
submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    await handleFormReplace(form);
    window.location.replace("../list/list.html");
});

const cancelButton = document.getElementById("addCancelButton");
cancelButton.addEventListener("click", async (e) => {
    e.preventDefault();
    window.location.replace("../list/list.html");
});