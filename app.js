let inputEl = document.querySelector("input");
let ulEl = document.querySelector("ul");


function addTitle() {
    if (inputEl.value.trim() === "") {
        alert("Put Your Task");
    } else {
        let li = document.createElement("li");
        li.className = "List-container";
        li.innerHTML = `
            <p style="display:inline;" class="List-item">${inputEl.value}</p>
            <div class="inner-container"> 
            <input type="checkbox" name="task" class="checkBox" onclick="checkBoxValueCheaker(this)"> 
            <button class="edit" onclick="editElement(this)">Edit</button>
            </div>`;
        ulEl.appendChild(li);
        inputEl.value = "";
    }
}

// Function to add a delete button when a checkbox is clicked
let ischecked = true;
function checkBoxValueCheaker(hello) {
    let parent = hello.parentElement;
    let pEl = parent.parentElement.querySelector(".List-item");
    let deleteButton = parent.querySelector(".delete");

    if (hello.checked) {
        if (!deleteButton) {
            parent.insertAdjacentHTML("beforeend", '<button class="delete" onclick="deleteElement(this)">Remove</button>');
            ischecked = false;
            pEl.style.textDecoration = "line-through";
        }
    } else {

        ischecked = true;
        pEl.style.textDecoration = "none";
        if (deleteButton) {
            deleteButton.remove();
        }
    }
}

function deleteElement(removeElement) {
    let taskItem = removeElement.parentElement.parentElement;
    taskItem.classList.add("fade-out");
    setTimeout(() => {
        taskItem.remove();
    }, 400); // Match transition time in CSS
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

function saveEdit(saveBtn) {
    let parent = saveBtn.parentElement;
    let newText = parent.querySelector("input").value;

    // Restore original structure with updated text
    parent.innerHTML = `
        <p style="display:inline;" class="List-item">${newText}</p>
        <div class="inner-container"> 
        <input type="checkbox" name="task" class="checkBox" onclick="checkBoxValueCheaker(this)"> 
        <button class="edit" onclick="editElement(this)">Edit</button>
        </div>`;

    // 👇 Simple animation class add karo
    parent.classList.add("List-container");

    // Optional: Remove class after animation ends to avoid future conflicts
    setTimeout(() => {
        parent.classList.remove("List-container");
    }, 300); // match CSS duration
}