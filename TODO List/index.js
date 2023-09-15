// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Check for existing tasks in local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button class="btn btn-sm btn-danger rounded-3" onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(li);
    });
}

// Function to add a new task
function addNewTask() {
    const newTask = taskInput.value.trim();
    if (newTask !== '') {
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
        taskInput.value = '';
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Event listeners
addTaskButton.addEventListener('click', addNewTask);
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addNewTask();
    }
});

// Initial rendering
renderTasks();
