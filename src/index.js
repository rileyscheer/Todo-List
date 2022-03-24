import {showTaskScreen, check} from "./modules/addingTask.js";
import {showInbox, showToday, showWeek, showMonth, hide} from "./modules/toggle.js";

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

inbox.addEventListener('click', function() {
    hide()
    showInbox();
})
today.addEventListener('click', function() {
    hide()
    showToday()
})
thisWeek.addEventListener('click', function(){
    hide()
    showWeek()
})
thisMonth.addEventListener('click', function() {
    hide()
    showMonth()
})




