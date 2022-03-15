import {showTaskScreen, check} from "./modules/addingTask.js";
import {loadInbox, loadToday, loadWeek, loadMonth} from "./modules/time.js";


taskScreen.style.display = 'none';

submit.addEventListener('click', check)
task.addEventListener('click', showTaskScreen)
inbox.addEventListener('click', loadInbox)
today.addEventListener('click', loadToday)
thisWeek.addEventListener('click', loadWeek)
thisMonth.addEventListener('click', loadMonth)




