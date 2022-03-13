function loadInbox() {
    text.textContent = 'Inbox';
}

function loadToday() {
    text.textContent = 'Today';
    
}

function loadWeek() {
    text.textContent = 'This Week';
    console.log('ran')
}

function loadMonth() {
    text.textContent = 'This Month';
}



export {loadInbox, loadToday, loadWeek, loadMonth}