const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const week = document.querySelector('week');
const month = document.querySelector('#month');
const project = document.querySelector('#add-project');
const task = document.querySelector('#add-task');
const taskSvg = document.querySelector('#task-svg')
const leftColumn = document.querySelector('#left-column');
const content = document.querySelector('#content');

const inputs = document.querySelector('.inputs');
const title = document.querySelector('#title');
const titleBox = document.querySelector('#titlebox');
const desc = document.querySelector('#desc');
const descBox = document.querySelector('#descbox');
const date = document.querySelector('#due');
const dateBox = document.querySelector('#duebox');
const priority = document.querySelector('#priority');
const priorityBox = document.querySelector('#prioritybox');
const submit = document.querySelector('#submit');

let taskList = [];

class Tasks {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function getValues() {
    const titleVal = titleBox.value;
    const descVal = descBox.value;
    const dateVal = dateBox.value;
    const priorityVal = priorityBox.value;
    const newTask = new Tasks(titleVal, descVal, dateVal, priorityVal)
    taskList.push(newTask);
    console.log(taskList)
    resetFields();
}

function resetFields() {
    titleBox.value = '';
    descBox.value = '';
    dateBox.value = '';
    priorityBox.value = '';
}

task.addEventListener('click', () => {
    const taskScreen = document.createElement('div')
    taskSvg.style.display = 'none';
    title.style.display = 'block';
    titleBox.style.display = 'block';
    desc.style.display = 'block';
    descBox.style.display = 'block';
    date.style.display = 'block';
    dateBox.style.display = 'block';
    priority.style.display = 'block';
    priorityBox.style.display = 'block';
    submit.style.display = 'block';
    taskScreen.classList.add('taskscreen')
    content.appendChild(taskScreen);
    taskScreen.appendChild(title)
    taskScreen.appendChild(titleBox)
    taskScreen.appendChild(desc)
    taskScreen.appendChild(descBox)
    taskScreen.appendChild(date)
    taskScreen.appendChild(dateBox)
    taskScreen.appendChild(priority)
    taskScreen.appendChild(priorityBox)
    taskScreen.appendChild(submit)
})

submit.addEventListener('click', getValues)

