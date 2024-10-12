// ========================DOM PART START HERE====================
let addInput = document.querySelector(".addInput")
let addTaskButton = document.querySelector (".addTaskButton")
let AddedTaskCard = document.querySelector (".AddedTaskCard")
// ========================DOM PART END HERE======================
// ========================Functional Part of addTaskCard===========
addTaskButton.addEventListener ("click",()=>{
    if (addInput.value == ""){
        alert ("Enter Task")
    }
    else{
        //===================Create New Element================
        let addedtaskFiled = document.createElement ('div')
         let taskInput = document.createElement ("input")
         let buttonCard = document.createElement ("div")
         let editButton = document .createElement ("button")
         let deleteButton = document.createElement ("button")
    // =======================making child==============
    AddedTaskCard.appendChild (addedtaskFiled)
    addedtaskFiled.appendChild (taskInput)
    addedtaskFiled.appendChild (buttonCard)
    buttonCard.appendChild (editButton)
    buttonCard.appendChild (deleteButton)
    // ====================adding class name===========
    addedtaskFiled.classList.add("addedtaskFiled")
    taskInput.classList.add ("taskInput")
    buttonCard.classList.add("buttonCard")
    editButton.classList.add("editButton")
    deleteButton.classList.add("deleteButton")
    // ================adding content to the tag=====
    editButton.innerHTML="EDIT"
    deleteButton.innerHTML = "DELETE"
    // ===============adding data to input field=======
    taskInput.value = addInput.value
    // =================adding margin===============
    addedtaskFiled.style.margin = "10px 0"; // 10px vertical margin
    }
   
})