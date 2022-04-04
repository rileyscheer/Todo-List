/* eslint-disable */ 

import {InboxTasks, TodayTasks, WeekTasks, MonthTasks} from "./task";

function combineValues(taskTitle, taskDesc, taskDate, taskPriority, newTask) {
    // reformat date
    const year = taskDate.slice(0, 4);
    const month = taskDate.slice(5, 7);
    const day = taskDate.slice(8, 10);
    const fullDate = `${month}/${day}/${year}`;

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


    newTask.style.color = "black";


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

function check() {
    const taskTitle = titleBox.value;
    const taskDesc = descBox.value;
    const taskDate = dateBox.value;
    const taskPriority = priorityBox.value;

    if (text.textContent === 'Inbox') {
        const inboxTask = new InboxTasks(taskTitle, taskDesc, taskDate, taskPriority)
        inboxTask.getValues()
        return inboxTask
    }   else if (text.textContent === 'Today') {
        const todayTask = new TodayTasks(taskTitle, taskDesc, taskDate, taskPriority)
        todayTask.getValues()
        return todayTask
    }   else if (text.textContent === 'This Week') {
        const weekTask = new WeekTasks(taskTitle, taskDesc, taskDate, taskPriority)
        weekTask.getValues()
        return weekTask
    }   else if (text.textContent === 'This Month') {
        const monthTask = new MonthTasks(taskTitle, taskDesc, taskDate, taskPriority)
        monthTask.getValues()
        return monthTask
    }
}


export {showTaskScreen, combineValues, resetFields, clearTaskScreen, check}

