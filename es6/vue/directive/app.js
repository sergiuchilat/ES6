
const app = new Vue({
    el: '#app',
    data: {
        tasks: [],
        taskTitle: '',
        taskDescription: ''
    },
    methods: {
        addTask(){
            let newTask = {};
            newTask.title = this.taskTitle;
            newTask.description = this.taskDescription;
            if(this.tasks === null)
                this.tasks = [];
            this.tasks.push(newTask);
            this.taskTitle = '';
            this.taskDescription = '';

            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    },
    created: function () {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
});

