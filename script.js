document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let assignedDateInput = document.getElementById("assignedDateInput");
    let deadlineInput = document.getElementById("deadlineInput");
    let taskText = taskInput.value.trim();
    let assignedDate = assignedDateInput.value;
    let deadline = deadlineInput.value;
    
    if (taskText === "" || assignedDate === "" || deadline === "") {
        alert("Harap isi semua kolom!");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let task = { text: taskText, assignedDate, deadline, completed: false };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    loadTasks();
    
    taskInput.value = "";
    assignedDateInput.value = "";
    deadlineInput.value = "";
}

function renderTask(task, index) {
    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${index})"> 
                    <div class="task-info">
                        <strong>${task.text}</strong><br>
                        <span class="task-date">Diberikan: <strong>${task.assignedDate}</strong></span> | 
                        <span class="task-deadline">Deadline: <strong>${task.deadline}</strong></span>
                    </div>
                    <button onclick="removeTask(${index})">Hapus</button>`;
    const taskInput = document.getElementById("taskInput");
    const assignedDateInput = document.getElementById("assignedDateInput");
    const assignedTimeInput = document.getElementById("assignedTimeInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const deadlineTimeInput = document.getElementById("deadlineTimeInput");

    const taskText = taskInput.value;
    const assignedDate = `${assignedDateInput.value} ${assignedTimeInput.value}`;
    const deadline = `${deadlineInput.value} ${deadlineTimeInput.value}`;

    if (taskText && assignedDateInput.value && deadlineInput.value) {
        const task = { text: taskText, assignedDate, deadline, completed: false };

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        loadTasks();

        taskInput.value = "";
        assignedDateInput.value = "";
        assignedTimeInput.value = "";
        deadlineInput.value = "";
        deadlineTimeInput.value = "";
    } else {
        alert("Harap isi semua kolom!");
    }
}

function renderTask(task, index) {
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${index})"> 
        <div class="task-info ${task.completed ? "completed" : ""}">
            <strong>${task.text}</strong><br>
            <span class="task-date">Diberikan: <strong>${task.assignedDate.trim()}</strong></span> | 
            <span class="task-deadline">Deadline: <strong>${task.deadline.trim()}</strong></span>
        </div>
        <button onclick="removeTask(${index})">Hapus</button>`;
    document.getElementById("taskList").appendChild(li);
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => renderTask(task, index));
}

function toggleTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

function removeTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(${index})"> 
            <div class="task-info">
                <strong>${task.text}</strong><br>
                <span class="task-date">Diberikan: <strong>${task.assignedDate}</strong></span> | 
                <span class="task-deadline">Deadline: <strong>${task.deadline}</strong></span>
            </div>
            <button onclick="removeTask(${index})">Hapus</button>`;
        taskList.appendChild(li);
    });

function toggleTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();  
}

function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();  
}