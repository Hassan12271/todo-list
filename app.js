let inputEl = document.querySelector("input");
let ulEl = document.querySelector("ul");


function addTitle() {
    if (inputEl.value.trim() === "") {
        alert("Put Your Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `
            <p style="display:inline;">${inputEl.value}</p>
            <div class="inner-container"> 
            <input type="checkbox" name="task" class="checkBox" onclick="checkBoxValueCheaker(this)"> 
            <button class="edit" onclick="editElement(this)">Edit</button>
            </div>`;
        ulEl.appendChild(li);
        inputEl.value = "";
    }
}

// Function to add a delete button when a checkbox is clicked
function checkBoxValueCheaker(hello) {
    let parent = hello.parentElement;
    let deleteButton = parent.querySelector(".delete");

    if (hello.checked) {
        if (!deleteButton) {
            parent.insertAdjacentHTML("beforeend", '<button class="delete" onclick="deleteElement(this)">Remove</button>');
        }
    } else {
        if (deleteButton) {
            deleteButton.remove();
        }
    }
}

// Function to remove a task
function deleteElement(removeElement) {
    removeElement.parentElement.parentElement.remove();
}

// Function to edit a task
function editElement(editBtn) {
    let parent = editBtn.parentElement.parentElement;
    let currentText = parent.querySelector("p").innerText;

    // Create input field and set value
    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "task_Eidt";
    inputField.value = currentText;

    // Create save button
    let saveButton = document.createElement("button");
    saveButton.innerText = "Save";
    saveButton.onclick = function () {
        saveEdit(this);
    };

    // Replace paragraph with input and save button
    parent.innerHTML = "";
    parent.appendChild(inputField);
    parent.appendChild(saveButton);
}

// Function to save edited task
function saveEdit(saveBtn) {
    let parent = saveBtn.parentElement;
    let newText = parent.querySelector("input").value;

    // Restore original structure with updated text
    parent.innerHTML = `
        <p style="display:inline;">${newText}</p>
        <div class="inner-container"> 
        <input type="checkbox" name="task" class="checkBox" onclick="checkBoxValueCheaker(this)"> 
        <button class="edit" onclick="editElement(this)">Edit</button>
        </div>`;
}

// setInterval(function () {
//     let allEl = document.querySelector("*");
//     allEl.style.transition = "0.1s linear";
// }, 100)