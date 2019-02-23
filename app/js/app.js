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
}