class Task{
    constructor(title, description){
        this.title = title;
        this.description = description;
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