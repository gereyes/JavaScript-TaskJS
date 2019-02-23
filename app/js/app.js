// Get tasks
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    return tasks;
}

// Remove task from the localstorage
function removeTaskFromLocalStorage(title){
    const tasks = getTasks();

    tasks.forEach((task, index) => {
        if(task.title === title){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

    display();
}


function display(){
    const tasks = getTasks();
    const tasksList = document.getElementById('tasks');

    tasksList.innerHTML = '';
    for(let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;
    

        tasksList.innerHTML += `
        <div class="card border-primary mb-3 mx-auto" style="max-width: 40rem;">
        <div class="card-header">${title}</div>
            <div class="card-body">
                <p class="card-text">${description}</p>
                <a href="#" class="btn btn-danger btn-sm" onclick="removeTaskFromLocalStorage('${title}')">Delete</a>
            </div>
        </div>
        `;   
        }
}


display();