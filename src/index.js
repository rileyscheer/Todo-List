import {getValues, showTaskScreen} from "./modules/addingTask";

taskScreen.style.display = 'none';
console.log('ok')

submit.addEventListener('click', getValues)
task.addEventListener('click', showTaskScreen)



// class Tasks {
//     constructor(title, description, dueDate, priority){
//         this.title = title;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//     }
// }

// function getValues() {
//     const titleVal = titleBox.value;
//     const descVal = descBox.value;
//     const dateVal = dateBox.value;
//     const priorityVal = priorityBox.value;
//     const newTask = new Tasks(titleVal, descVal, dateVal, priorityVal)
//     taskList.push(newTask);
//     console.log(taskList)
//     resetFields();
//     clearTaskScreen();
// }

// function resetFields() {
//     titleBox.value = '';
//     descBox.value = '';
//     dateBox.value = '';
//     priorityBox.value = '';
// }

// function showTaskScreen() {
//     taskSvg.style.display = 'none';
//     taskScreen.style.display = 'block';
//     title.style.display = 'block';
//     titleBox.style.display = 'block';
//     desc.style.display = 'block';
//     descBox.style.display = 'block';
//     date.style.display = 'block';
//     dateBox.style.display = 'block';
//     priority.style.display = 'block';
//     priorityBox.style.display = 'block';
//     submit.style.display = 'block';
//     taskScreen.classList.add('taskscreen')
//     content.appendChild(taskScreen);
//     taskScreen.appendChild(title)
//     taskScreen.appendChild(titleBox)
//     taskScreen.appendChild(desc)
//     taskScreen.appendChild(descBox)
//     taskScreen.appendChild(date)
//     taskScreen.appendChild(dateBox)
//     taskScreen.appendChild(priority)
//     taskScreen.appendChild(priorityBox)
//     taskScreen.appendChild(submit)
// }

// function clearTaskScreen() {
//     taskScreen.style.display = 'none';
//     taskSvg.style.display = 'block';
// }

// task.addEventListener('click', showTaskScreen)
// submit.addEventListener('click', getValues)

