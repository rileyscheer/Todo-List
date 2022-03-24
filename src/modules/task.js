import {combineValues, resetFields, clearTaskScreen} from "./addingTask"
// import {showInbox, showToday, showWeek, showMonth} from "./toggle"

const titleBox = document.querySelector('#titlebox');
const descBox = document.querySelector('#descbox');
const dateBox = document.querySelector('#duebox');
const priorityBox = document.querySelector('#prioritybox');

let inboxList = []
let todayList = []
let weekList = []
let monthList = []



class InboxTasks{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getValues() {
        const taskTitle = titleBox.value;
        const taskDesc = descBox.value;
        const taskDate = dateBox.value;
        const taskPriority = priorityBox.value;

        newInbox = document.createElement('div')
        newInbox.classList.add('eachTask')
        inboxList.push(newInbox)

        combineValues(taskTitle, taskDesc, taskDate, taskPriority, newInbox);
        resetFields();
        clearTaskScreen();
        showInbox();
    }
}
 

class TodayTasks {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getValues() {
        const taskTitle = titleBox.value;
        const taskDesc = descBox.value;
        const taskDate = dateBox.value;
        const taskPriority = priorityBox.value;
    
        newToday = document.createElement('div')
        newToday.classList.add('eachTask')
        todayList.push(newToday)

        combineValues(taskTitle, taskDesc, taskDate, taskPriority, newToday);
        resetFields();
        clearTaskScreen();
        showToday();
    }
}

class WeekTasks {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getValues() {
        const taskTitle = titleBox.value;
        const taskDesc = descBox.value;
        const taskDate = dateBox.value;
        const taskPriority = priorityBox.value;
    
        newWeek = document.createElement('div')
        newWeek.classList.add('eachTask')
        weekList.push(newWeek)

        combineValues(taskTitle, taskDesc, taskDate, taskPriority, newWeek);
        resetFields();
        clearTaskScreen();
        showWeek();
    }
}


class MonthTasks {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getValues() {
        const taskTitle = titleBox.value;
        const taskDesc = descBox.value;
        const taskDate = dateBox.value;
        const taskPriority = priorityBox.value;
    
        newMonth = document.createElement('div')
        newMonth.classList.add('eachTask')
        monthList.push(newMonth)

        combineValues(taskTitle, taskDesc, taskDate, taskPriority, newMonth);
        resetFields();
        clearTaskScreen();
        showMonth();
    }
}

// ------------------------------------------------------------------------------ //

let newInbox = document.createElement('div')
let newToday = document.createElement('div')
let newWeek = document.createElement('div')
let newMonth = document.createElement('div')


const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#week');
const thisMonth = document.querySelector('#month');



function showInbox(){
    for (let i = 0; i < inboxList.length; i++) {
        inboxList[i].style.display = 'block';
    }
}

function showToday(){
    for (let i = 0; i < todayList.length; i++) {
        todayList[i].style.display = 'block';
    }
}

function showWeek(){
    for (let i = 0; i < weekList.length; i++) {
        weekList[i].style.display = 'block';
    }
}

function showMonth(){
    for (let i = 0; i < monthList.length; i++) {
        monthList[i].style.display = 'block';
    }
}



function hideInbox(){
    for (let i = 0; i < inboxList.length; i++) {
        inboxList[i].style.display = 'none';
    }
}

function hideToday(){
    for (let i = 0; i < todayList.length; i++) {
        todayList[i].style.display = 'none';
    }
}

function hideWeek(){
    for (let i = 0; i < weekList.length; i++) {
        weekList[i].style.display = 'none';
    }
}

function hideMonth(){
    for (let i = 0; i < monthList.length; i++) {
        monthList[i].style.display = 'none';
    }
}

function hide(){
    hideInbox()
    hideToday()
    hideWeek()
    hideMonth()
}

inbox.addEventListener('click', function() {
    hide()
    showInbox(newInbox);
})
today.addEventListener('click', function() {
    hide()
    showToday(newToday)
})
thisWeek.addEventListener('click', function(){
    hide()
    showWeek(newWeek)
})
thisMonth.addEventListener('click', function() {
    hide()
    showMonth(newMonth)
})

export {InboxTasks, TodayTasks, WeekTasks, MonthTasks}




