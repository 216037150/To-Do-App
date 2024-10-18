let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask() {
    const task = taskInput.value.trim();

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.style.borderRadius = '5px';
    deleteButton.onclick = function() {
        const confirmation = confirm('Are you sure you want to delete this task?');
        if (confirmation) {
            taskList.removeChild(li);
        }
    };

    li.appendChild(deleteButton); 
    taskList.appendChild(li);
    taskInput.value = ''; 
}
