import { getPlayers } from "../../commons/requests.js";

const calculateAge = (personalCode) => {
    const firstNumber = parseInt(personalCode[0]);
    const century = firstNumber <= 2 ? 18 : firstNumber <= 4 ? 19 : 20;

    const year = century * 100 + parseInt(personalCode.slice(1, 3));
    const month = parseInt(personalCode.slice(3, 5));
    const day = parseInt(personalCode.slice(5, 7));

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    let age = currentYear - year;

    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
        age--;
    }
    return age;
};

const calculateExperience = (chessStartDate) => {
    const today = new Date();
    const start = new Date(chessStartDate);
    let months = (today.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth() + 1;
    months += today.getMonth() + 1;
    const years = Math.floor(months / 12);
    months = months % 12;
    const experience = `${years} years, ${months} months`;
    return experience;
};

const getGenderFromPersonalCode = (personalCode) => {
    const firstNumber = parseInt(personalCode.charAt(0));
    return firstNumber % 2 === 0 ? "Female" : "Male";
};

const renderPlayerTableRows = async (players) => {

    const playerTable = document.getElementById("playerTable");
    console.log("111");
    const playerTableBody = document.querySelector("tbody");
    players.forEach((p) => {
        const playerRow = document.createElement("tr");

        const firstnameCell = document.createElement("td");
        firstnameCell.innerText = p.firstname;
        playerRow.appendChild(firstnameCell);

        const lastnameCell = document.createElement("td");
        lastnameCell.innerText = p.lastname;
        playerRow.appendChild(lastnameCell);

        const emailCell = document.createElement("td");
        emailCell.innerText = p.email;
        playerRow.appendChild(emailCell);

        const genderCell = document.createElement("td");
        genderCell.innerText = getGenderFromPersonalCode(p.personalCode);
        playerRow.appendChild(genderCell);

        const ageCell = document.createElement("td");
        const age = calculateAge(p.personalCode);
        ageCell.innerText = age ? `${age} years` : "";
        playerRow.appendChild(ageCell);

        const experienceCell = document.createElement("td");
        const experience = calculateExperience(p.chessStartDate);
        experienceCell.innerText = experience || "";

        playerRow.appendChild(experienceCell);

        const actionCell = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.classList.add("btn", "btn-primary");
        editButton.innerText = "Edit";
        actionCell.appendChild(editButton);

        const replaceButton = document.createElement("button");
        replaceButton.classList.add("btn", "btn-warning");
        replaceButton.innerText = "Rreplace";
        actionCell.appendChild(replaceButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger");
        deleteButton.innerText = "Delete";
        actionCell.appendChild(deleteButton);
        playerRow.appendChild(actionCell);

        playerTableBody.appendChild(playerRow);
    });
};


(async () => {
    const player = await getPlayers();
    renderPlayerTableRows(player);
})();