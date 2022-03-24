/* eslint-disable */ 
import {combineValues, resetFields, clearTaskScreen} from "./addingTask"
import {showInbox, showToday, showWeek, showMonth} from "./toggle"

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

export {InboxTasks, TodayTasks, WeekTasks, MonthTasks}
