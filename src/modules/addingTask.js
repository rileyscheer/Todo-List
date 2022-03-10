import { Tasks } from "./task";

function getValues() {
    const titleVal = titleBox.value;
    const descVal = descBox.value;
    const dateVal = dateBox.value;
    const priorityVal = priorityBox.value;
    const newTask = new Tasks(titleVal, descVal, dateVal, priorityVal)
    taskList.push(newTask);
    const allValues = [titleVal, descVal, dateVal, priorityVal]
    resetFields();
    clearTaskScreen();
    combineValues(allValues);
}


function combineValues(allValues) {
    const addTask = document.createElement('div')
    addTask.classList.add('allTasks')
    const taskTitle = allValues[0]
    const taskDesc = allValues[1]
    const taskDate = allValues[2]
    let taskPriority = allValues[3]

    if (taskPriority >= 0 && taskPriority < 4) {
        taskPriority = 'Low';
    }   else if (taskPriority > 3 && taskPriority < 7) {
        taskPriority = 'Medium';
    }   else if (taskPriority > 6) {
        taskPriority = 'High';
    }
    
    addTask.textContent = `${taskTitle}: \u00A0\u00A0\u00A0\u00A0${taskDesc} \u00A0\u00A0\u00A0\u00A0
    \u00A0\u00A0Priority: ${taskPriority} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${taskDate}`;

    deleteButton(addTask)
}

function deleteButton(addTask){
    const del = document.createElement('button');
    del.classList.add('delete')
    del.textContent = 'Delete';
    content.appendChild(addTask)
    addTask.appendChild(del)

    del.addEventListener('click', function(){
        addTask.remove()
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




export { getValues, showTaskScreen }

