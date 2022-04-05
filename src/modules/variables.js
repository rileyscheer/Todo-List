const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#week');
const thisMonth = document.querySelector('#month');
const text = document.querySelector('#text');
const task = document.querySelector('#add-task');
const taskSvg = document.querySelector('.task-svg')
const leftColumn = document.querySelector('#left-column');
const content = document.querySelector('#content');
const inputs = document.querySelector('.inputs');
const title = document.querySelector('#title');
const titleBox = document.querySelector('#titlebox');
const desc = document.querySelector('#desc');
const descBox = document.querySelector('#descbox');
const date = document.querySelector('#due');
const dateBox = document.querySelector('#duebox');
const priority = document.querySelector('#priority');
const priorityBox = document.querySelector('#prioritybox');
const submit = document.querySelector('#submit');
const taskScreen = document.createElement('div');
const inboxContainer = document.querySelector('.inboxContainer');
const todayContainer = document.querySelector('.todayContainer');
const weekContainer = document.querySelector('.weekContainer');
const monthContainer = document.querySelector('.monthContainer');
const slider = document.querySelector('.slider');

let newInbox = document.createElement('div')
let newToday = document.createElement('div')
let newWeek = document.createElement('div')
let newMonth = document.createElement('div')

let inboxList = []
let todayList = []
let weekList = []
let monthList = []

let mode = 0;
