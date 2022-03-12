import {InboxTasks, TodayTasks, WeekTasks, MonthTasks} from "./task";

import {Tasks} from "./task";

function getValues() {
    const taskTitle = titleBox.value;
    const taskDesc = descBox.value;
    const taskDate = dateBox.value;
    const taskPriority = priorityBox.value;

    new Tasks(taskTitle, taskDesc, taskDate, taskPriority)

    const newTask = document.createElement('div')
    newTask.classList.add('eachTask')
    combineValues(taskTitle, taskDesc, taskDate, taskPriority, newTask);
    resetFields();
    clearTaskScreen();
    // taskList.push(newTask);
}

function combineValues(taskTitle, taskDesc, taskDate, taskPriority, newTask) {
    // reformat date
    const year = taskDate.slice(0, 4);
    const month = taskDate.slice(5, 7);
    const day = taskDate.slice(8, 10);
    const fullDate = `${month}/${day}/${year}`

    if (taskPriority >= 0 && taskPriority < 40) {
        taskPriority = 'Low';
        newTask.classList.add('low')
    }   else if (taskPriority >= 40 && taskPriority < 70) {
        taskPriority = 'Medium';
        newTask.classList.add('medium')
    }   else if (taskPriority >= 70) {
        taskPriority = 'High';
        newTask.classList.add('high')
    }

    if (fullDate === '//' && taskDesc === ''){
        newTask.textContent = taskTitle;
    }   else if (fullDate === '//') {
        newTask.textContent = `${taskTitle}: \u00A0\u00A0\u00A0\u00A0${taskDesc}`;
    }   else {
        newTask.textContent = `${taskTitle}: \u00A0\u00A0\u00A0\u00A0${taskDesc} \u00A0\u00A0\u00A0\u00A0
        \u00A0\u00A0${fullDate}`;
    }

    deleteButton(newTask)
}


function deleteButton(newTask){
    const del = document.createElement('button');
    del.classList.add('delete')
    del.textContent = 'Delete';
    content.appendChild(newTask)
    newTask.appendChild(del)

    del.addEventListener('click', function(){
        newTask.remove()
    })
}

function showTaskScreen() {
    taskSvg.style.display = 'none';
    taskScreen.style.display = 'block';
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
}

function clearTaskScreen() {
    taskScreen.style.display = 'none';
    taskSvg.style.display = 'block';
}

function resetFields() {
    titleBox.value = '';
    descBox.value = '';
    dateBox.value = '';
    priorityBox.value = '';
}

export {showTaskScreen, combineValues, resetFields, clearTaskScreen, getValues}



