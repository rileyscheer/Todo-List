import {combineValues, resetFields, clearTaskScreen} from "./addingTask"

class Tasks {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}


class InboxTasks extends Tasks{
    getValues() {
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
}
 

class TodayTasks extends Tasks{
    getValues() {
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
}
  

class WeekTasks extends Tasks{
    getValues() {
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
}


class MonthTasks extends Tasks{
    getValues() {
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
}

export {Tasks}


// class InboxTasks extends Tasks{
//     getValues() {
//         const taskTitle = titleBox.value;
//         const taskDesc = descBox.value;
//         const taskDate = dateBox.value;
//         const taskPriority = priorityBox.value;
    
//         new Tasks(taskTitle, taskDesc, taskDate, taskPriority)
    
//         let newInbox = document.createElement('div')
//         newInbox.classList.add('eachTask')
//         checkDay(taskTitle, taskDesc, taskDate, taskPriority, newInbox);
//         resetFields();
//         clearTaskScreen();
//         // taskList.push(newTask);
//     }
// }


// class TodayTasks extends Tasks{
//     getValues() {
//         const taskTitle = titleBox.value;
//         const taskDesc = descBox.value;
//         const taskDate = dateBox.value;
//         const taskPriority = priorityBox.value;
    
//         new Tasks(taskTitle, taskDesc, taskDate, taskPriority)
    
//         let newToday = document.createElement('div')
//         newToday.classList.add('eachTask')
//         checkDay(taskTitle, taskDesc, taskDate, taskPriority, newToday);
//         resetFields();
//         clearTaskScreen();
//         // taskList.push(newTask);
//     }
// }


// class WeekTasks extends Tasks{
//     getValues() {
//         const taskTitle = titleBox.value;
//         const taskDesc = descBox.value;
//         const taskDate = dateBox.value;
//         const taskPriority = priorityBox.value;
    
//         new Tasks(taskTitle, taskDesc, taskDate, taskPriority)
    
//         let newWeek = document.createElement('div')
//         newWeek.classList.add('eachTask')
//         combineValues(taskTitle, taskDesc, taskDate, taskPriority, newWeek);
//         resetFields();
//         clearTaskScreen();
//         // taskList.push(newTask);
//     }
// }


// class MonthTasks extends Tasks{
//     getValues() {
//         const taskTitle = titleBox.value;
//         const taskDesc = descBox.value;
//         const taskDate = dateBox.value;
//         const taskPriority = priorityBox.value;
    
//         new Tasks(taskTitle, taskDesc, taskDate, taskPriority)
    
//         let newMonth = document.createElement('div')
//         newMonth.classList.add('eachTask')
//         combineValues(taskTitle, taskDesc, taskDate, taskPriority, newMonth);
//         resetFields();
//         clearTaskScreen();
//         // taskList.push(newTask);
//     }
// }
