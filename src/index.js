/* eslint-disable */ 

import {showTaskScreen, check} from "./modules/addingTask.js";
import {showInbox, showToday, showWeek, showMonth, hide} from "./modules/toggle.js";
import {night, day} from "./modules/mode.js";

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

slider.addEventListener('click', function() {
    mode += 1;
    if (mode % 2 === 1) {
        night()
    }   else {
        day()
    }
})


