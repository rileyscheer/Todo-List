import {showTaskScreen, getValues} from "./modules/addingTask.js";
import {loadToday} from "./modules/today.js";
import {loadInbox} from "./modules/inbox.js";

taskScreen.style.display = 'none';

submit.addEventListener('click', getValues)
task.addEventListener('click', showTaskScreen)
inbox.addEventListener('click', loadInbox)
today.addEventListener('click', loadToday)




