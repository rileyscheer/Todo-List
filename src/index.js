/* eslint-disable */ 

import {showTaskScreen, check} from "./modules/addingTask.js";
import {showInbox, showToday, showWeek, showMonth, hide} from "./modules/toggle.js";


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




