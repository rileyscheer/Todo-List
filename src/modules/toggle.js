/* eslint-disable */ 

function showInbox(){
    text.textContent = 'Inbox';
    for (let i = 0; i < inboxList.length; i++) {
        inboxList[i].style.display = 'block';
    }
}

function showToday(){
    text.textContent = 'Today';
    for (let i = 0; i < todayList.length; i++) {
        todayList[i].style.display = 'block';
    }
}

function showWeek(){
    text.textContent = 'This Week';
    for (let i = 0; i < weekList.length; i++) {
        weekList[i].style.display = 'block';
    }
}

function showMonth(){
    text.textContent = 'This Month';
    for (let i = 0; i < monthList.length; i++) {
        monthList[i].style.display = 'block';
    }
}

function hideInbox(){
    for (let i = 0; i < inboxList.length; i++) {
        inboxList[i].style.display = 'none';
    }
}

function hideToday(){
    for (let i = 0; i < todayList.length; i++) {
        todayList[i].style.display = 'none';
    }
}

function hideWeek(){
    for (let i = 0; i < weekList.length; i++) {
        weekList[i].style.display = 'none';
    }
}

function hideMonth(){
    for (let i = 0; i < monthList.length; i++) {
        monthList[i].style.display = 'none';
    }
}

function hide(){
    hideInbox()
    hideToday()
    hideWeek()
    hideMonth()
}

export {showInbox, showToday, showWeek, showMonth,
        hideInbox, hideToday, hideWeek, hideMonth,
        hide}
    