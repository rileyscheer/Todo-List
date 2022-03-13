import {showTaskScreen, getValues} from "./modules/addingTask.js";
import {loadInbox, loadToday, loadWeek, loadMonth} from "./modules/time.js";


taskScreen.style.display = 'none';

// submit.addEventListener('click', getValues)
task.addEventListener('click', showTaskScreen)
inbox.addEventListener('click', loadInbox)
today.addEventListener('click', loadToday)
week.addEventListener('click', loadWeek)
month.addEventListener('click', loadMonth)




