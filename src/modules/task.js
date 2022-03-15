import {combineValues, resetFields, clearTaskScreen} from "./addingTask"


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
    
        const newInbox = document.createElement('div')
        newInbox.classList.add('eachTask')

        combineValues(taskTitle, taskDesc, taskDate, taskPriority, newInbox);
        resetFields();
        clearTaskScreen();
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
    
        const newToday = document.createElement('div')
        newToday.classList.add('eachTask')

        combineValues(taskTitle, taskDesc, taskDate, taskPriority, newToday);
        resetFields();
        clearTaskScreen();
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
    
        const newWeek = document.createElement('div')
        newWeek.classList.add('eachTask')

        combineValues(taskTitle, taskDesc, taskDate, taskPriority, newWeek);
        resetFields();
        clearTaskScreen();
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
    
        const newMonth = document.createElement('div')
        newMonth.classList.add('eachTask')

        combineValues(taskTitle, taskDesc, taskDate, taskPriority, newMonth);
        resetFields();
        clearTaskScreen();
    }
}


export {InboxTasks, TodayTasks, WeekTasks, MonthTasks}




