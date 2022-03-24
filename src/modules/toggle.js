const text = document.querySelector('#text');

function loadInbox() {
    text.textContent = 'Inbox';
}

function loadToday() {
    text.textContent = 'Today';
}

function loadWeek() {
    text.textContent = 'This Week';
}

function loadMonth() {
    text.textContent = 'This Month';
}

export {loadInbox, loadToday, loadWeek, loadMonth}


// const inbox = document.querySelector('#inbox');
// const today = document.querySelector('#today');
// const thisWeek = document.querySelector('#week');
// const thisMonth = document.querySelector('#month');

// let newInbox = document.createElement('div')
// let newToday = document.createElement('div')
// let newWeek = document.createElement('div')
// let newMonth = document.createElement('div')



// inbox.addEventListener('click', function() {
//     hide()
//     showInbox(newInbox);
// })
// today.addEventListener('click', function() {
//     hide()
//     showToday(newToday)
// })
// thisWeek.addEventListener('click', function(){
//     hide()
//     showWeek(newWeek)
// })
// thisMonth.addEventListener('click', function() {
//     hide()
//     showMonth(newMonth)
// })


// function showInbox(newInbox){
//     console.log('show inbox')
//     newInbox.style.display = 'block';
//     return newInbox;
// }

// function showToday(newToday){
//     console.log('show today')
//     newToday.style.display = 'block';
//     return newToday;
// }

// function showWeek(newWeek){
//     console.log('show week')
//     newWeek.style.display = 'block';
//     return newWeek;
// }

// function showMonth(newMonth){
//     console.log('show month')
//     newMonth.style.display = 'block';
//     return newMonth;
// }



// function hideInbox(newInbox){
//     console.log('hide inbox')
//     newInbox.style.display = 'none';
// }

// function hideToday(newToday){
//     console.log('hide today')
//     newToday.style.display = 'none';
// }

// function hideWeek(newWeek){
//     console.log('hide week')
//     newWeek.style.display = 'none';
// }

// function hideMonth(newMonth){
//     console.log('hide month')
//     newMonth.style.display = 'none';
// }

// function hide(){
//     hideInbox(newInbox)
//     hideToday(newToday)
//     hideWeek(newWeek)
//     hideMonth(newMonth)
// }

// export {showInbox, showToday, showWeek, showMonth, loadInbox, loadToday, loadWeek, loadMonth}