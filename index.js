const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    // console.log(taskText);
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }else{
        alert("Please enter a task..")
    }
});

function addTask(text) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${text}</span>
        <button class="deleteTaskButton">Delete</button>
    `;
    taskList.appendChild(taskItem);

    const deleteButton = taskItem.querySelector('.deleteTaskButton');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}
