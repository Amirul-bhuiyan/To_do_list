// ========================DOM PART START HERE====================
let addInput = document.querySelector(".addInput")
let addTaskButton = document.querySelector(".addTaskButton")
let AddedTaskCard = document.querySelector(".AddedTaskCard")
let taskcounter = 0
// ========================DOM PART END HERE======================

// ========================Functional Part of addTaskCard===========
addTaskButton.addEventListener("click", () => {
    if (addInput.value === "") {
        alert("Enter Task");
    } else {
        taskcounter++; // Increment task counter for each new task
        
        // ===================Create New Elements================
        let addedtaskFiled = document.createElement('div');
        let taskNumber = document.createElement("span");  // Create a new span for task number
        let taskInput = document.createElement("input");
        let buttonCard = document.createElement("div");
        let editButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        // =======================Make children==============
        AddedTaskCard.appendChild(addedtaskFiled);
        addedtaskFiled.appendChild(taskNumber);  // Append task number (span)
        addedtaskFiled.appendChild(taskInput);
        addedtaskFiled.appendChild(buttonCard);
        buttonCard.appendChild(editButton);
        buttonCard.appendChild(deleteButton);

        // ====================Adding class names===========
        addedtaskFiled.classList.add("addedtaskFiled");
        taskInput.classList.add("taskInput");
        buttonCard.classList.add("buttonCard");
        editButton.classList.add("editButton");
        deleteButton.classList.add("deleteButton");

        // ================Adding content to elements=====
        editButton.innerHTML = "EDIT";
        deleteButton.innerHTML = "DELETE";
        taskNumber.innerHTML = `${taskcounter}. `;  // Add task number with counter
        
        // ===============Adding data to input field=======
        taskInput.value = addInput.value;

        // ================Set attribute=============
        taskInput.setAttribute("readonly", "readonly");

        // =================Adding margin===============
        addedtaskFiled.style.margin = "10px 0";  // 10px vertical margin

        // =========================Edit button===========
        editButton.addEventListener("click", () => {
            if (editButton.innerHTML === "EDIT") {
                editButton.innerHTML = "SAVE";
                editButton.style.background = "green";
                taskInput.removeAttribute("readonly");
            } else {
                editButton.innerHTML = "EDIT";
                editButton.style.background = "#6256CA";
                taskInput.setAttribute("readonly", "readonly");
            }
        });

        // =========================Delete button===========
        deleteButton.addEventListener("click", () => {
            AddedTaskCard.removeChild(addedtaskFiled);  // Remove task when delete is clicked
        });

        // Clear input field after adding a task
        addInput.value = "";
    }
});
