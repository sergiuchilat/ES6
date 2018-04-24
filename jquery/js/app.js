let tasks = [];


$(document).ready(function () {
    getTaskList();


    $("#addTaskBtn").on("click", function (e) {
        e.preventDefault();
        addTask();
    });
});



function getTaskList(){
    let tasksLS = JSON.parse(localStorage.getItem('tasks'));
    let newTaskHTML = '';
    let index = 1;
    if(tasksLS === null)
        return;
    for (task of tasksLS){
        newTaskHTML += '<div class="card" id="template">\n' +
            '            <div class="card-body">\n' +
            '                <h6 class="card-title">Задача № ' + index + '</h6>\n' +
            '                <h5 class="card-title">' +  task.title + ' </h5>\n' +
            '                <p class="card-text">' + task.description +'</p>\n' +
            '            </div>\n' +
            '        </div>';
        index++;
    }

    $('#task-list').html(newTaskHTML);
}


function addTask(){
    let newTask = {};
    let tasksLS = JSON.parse(localStorage.getItem('tasks'));
    let lastID = 0;
    if(tasksLS !== null){
        lastID = tasksLS[tasksLS.length - 1].id;
    }

    newTask.id = lastID + 1;

    newTask.title = $("#taskTitle").val();
    newTask.description = $("#taskDescription").val();
    tasks = JSON.parse(localStorage.getItem('tasks'));
    if(tasks === null)
        tasks = [];
    tasks.push(newTask);
    $("#taskTitle").val('');
    $("#taskDescription").val('');

    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTaskList();
}