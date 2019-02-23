class Task{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}



class Store{

    // Get tasks
    static getTasks(){
        let tasks;
        if(localStorage.getItem('tasks') === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        return tasks;
    }

    // Add task in the localstorage
    static addTaskToLocalStorage(task){
        const tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Remove task from the localstorage
    static removeTaskFromLocalStorage(title){
        const tasks = Store.getTasks();

        tasks.forEach((task, index) => {
            if(task.title === title){
                tasks.splice(index, 1);
            }
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}



class Utils{
    static clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    }

    static showMessage(message, type){
        // create div
        const div = document.createElement('div');
        div.className = `alert alert-${type}`;
        div.appendChild(document.createTextNode(message));
        const container = document.getElementById('cardB');
        const form = document.getElementById('formAdd');
        container.insertBefore(div,form);

        // Clear message in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
}

document.getElementById('formAdd').addEventListener('submit', (e) =>{
    
    // PreventDefault
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    // Validate fields
    if(title === '' || description === ''){
        // Message for empty fields
        Utils.showMessage('The fields are empty', 'danger')
    }else{
        const task = new Task(title, description);

        // Add task to the UI
        UI.addTaskToList(task);

        // Add task to the localstorage
        Store.addTaskToLocalStorage(task);

        // Show success message
        Utils.showMessage('The task was added correctly', 'success');

        // Crear form fields
        Utils.clearFields();

    }
});