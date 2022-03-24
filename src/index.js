import {showTaskScreen, check} from "./modules/addingTask.js";
import {loadInbox, loadToday, loadWeek, loadMonth} from "./modules/toggle.js";

const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#week');
const thisMonth = document.querySelector('#month');
const task = document.querySelector('#add-task');
const submit = document.querySelector('#submit');
const taskScreen = document.createElement('div');

taskScreen.style.display = 'none';


submit.addEventListener('click', check)
task.addEventListener('click', showTaskScreen)
inbox.addEventListener('click', loadInbox)
today.addEventListener('click', loadToday)
thisWeek.addEventListener('click', loadWeek)
thisMonth.addEventListener('click', loadMonth)




