import {getValues, showTaskScreen} from "./modules/addingTask.js";

taskScreen.style.display = 'none';

submit.addEventListener('click', getValues)
task.addEventListener('click', showTaskScreen)



