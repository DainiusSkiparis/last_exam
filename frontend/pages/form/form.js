// Get the form element by ID
export let form = document.getElementById("tournamentForm");

export function addInputs() {
    const myclass = "form-control";
    const firstNameInput = createInputElement("text", myclass, "firstnameInput", "First name", true);
    const lastnameInput = createInputElement("text", myclass, "lastnameInput", "Last name", true);
    const emailInput = createInputElement("email", myclass, "emailInput", "Email address", true);
    const personalCodeInput = createInputElement("text", myclass, "personalCodeInput", "Personal code", true);
    personalCodeInput.setAttribute("pattern", "[3-6][0-9]{10}");
    personalCodeInput.setAttribute("minlength", "11");
    personalCodeInput.setAttribute("maxlength", "11");
    personalCodeInput.setAttribute("placeholder", "Personal code");
    personalCodeInput.setAttribute("inputmode", "numeric");

    const startDateInput = createInputElement("date", myclass, "startDateInput", "Date when started playing chess", true);
    startDateInput.setAttribute("min", "1900-01-01");

    // Append the elements to the form
    form.appendChild(firstNameInput);
    form.appendChild(lastnameInput);
    form.appendChild(emailInput);
    form.appendChild(personalCodeInput);
    form.appendChild(startDateInput);
}

export function addRegistrationButtons() {
    const submitButton = createButtonElement("Submit", "btn-primary", "addSubmitButton");
    const submitCancelButton = createButtonElement("Cancel", "btn-secondary", "addCancelButton");
    form.appendChild(createDivElement([submitButton, submitCancelButton]));
}

export function addEditButtons() {
    const editSubmitButton = createButtonElement("Submit", "btn-primary", "editSubmitButton");
    const editCancelButton = createButtonElement("Cancel", "btn-secondary", "editCancelButton");
    form.appendChild(createDivElement([editSubmitButton, editCancelButton]));
}

export function removePersonalCodeInput() {
    const personalCodeInput = document.getElementById("personalCodeInput");
    const personalCodeInputDiv = personalCodeInput.parentNode;
    personalCodeInputDiv.remove();
}

// // Helper function to create input element
function createInputElement(type, className, id, label, required) {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("id", id);
    input.setAttribute("placeholder", label);
    input.setAttribute("class", className);
    if (required) {
        input.setAttribute("required", "");
    }

    const inputLabel = document.createElement("label");
    inputLabel.setAttribute("for", id);
    inputLabel.textContent = label;

    const formGroup = document.createElement("div");
    formGroup.classList.add("form-floating", "mb-3");
    formGroup.appendChild(input);
    formGroup.appendChild(inputLabel);

    return formGroup;
}

// Helper function to create button element
function createButtonElement(text, className, id) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", `btn ${className} btn-lg`);
    button.setAttribute("id", id);
    button.textContent = text;

    return button;
}

// Helper function to create div element with child elements
function createDivElement(children) {
    const div = document.createElement("div");
    div.classList.add("gap-2");
    for (const child of children) {
        div.appendChild(child);
    }

    return div;
}

