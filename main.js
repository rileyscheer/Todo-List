(()=>{"use strict";function t(){text.textContent="Inbox";for(let t=0;t<inboxList.length;t++)inboxList[t].style.display="block"}function e(){text.textContent="Today";for(let t=0;t<todayList.length;t++)todayList[t].style.display="block"}function n(){text.textContent="This Week";for(let t=0;t<weekList.length;t++)weekList[t].style.display="block"}function s(){text.textContent="This Month";for(let t=0;t<monthList.length;t++)monthList[t].style.display="block"}function i(){!function(){for(let t=0;t<inboxList.length;t++)inboxList[t].style.display="none"}(),function(){for(let t=0;t<todayList.length;t++)todayList[t].style.display="none"}(),function(){for(let t=0;t<weekList.length;t++)weekList[t].style.display="none"}(),function(){for(let t=0;t<monthList.length;t++)monthList[t].style.display="none"}()}class o{constructor(t,e,n,s){this.title=t,this.description=e,this.dueDate=n,this.priority=s}getValues(){const e=titleBox.value,n=descBox.value,s=dateBox.value,i=priorityBox.value;newInbox=document.createElement("div"),newInbox.classList.add("eachTask"),inboxList.push(newInbox),d(e,n,s,i,newInbox),u(),r(),t()}}class l{constructor(t,e,n,s){this.title=t,this.description=e,this.dueDate=n,this.priority=s}getValues(){const t=titleBox.value,n=descBox.value,s=dateBox.value,i=priorityBox.value;newToday=document.createElement("div"),newToday.classList.add("eachTask"),todayList.push(newToday),d(t,n,s,i,newToday),u(),r(),e()}}class a{constructor(t,e,n,s){this.title=t,this.description=e,this.dueDate=n,this.priority=s}getValues(){const t=titleBox.value,e=descBox.value,s=dateBox.value,i=priorityBox.value;newWeek=document.createElement("div"),newWeek.classList.add("eachTask"),weekList.push(newWeek),d(t,e,s,i,newWeek),u(),r(),n()}}class c{constructor(t,e,n,s){this.title=t,this.description=e,this.dueDate=n,this.priority=s}getValues(){const t=titleBox.value,e=descBox.value,n=dateBox.value,i=priorityBox.value;newMonth=document.createElement("div"),newMonth.classList.add("eachTask"),monthList.push(newMonth),d(t,e,n,i,newMonth),u(),r(),s()}}function d(t,e,n,s,i){const o=n.slice(0,4),l=`${n.slice(5,7)}/${n.slice(8,10)}/${o}`;s>=0&&s<40?(s="Low",i.classList.add("low")):s>=40&&s<70?(s="Medium",i.classList.add("medium")):s>=70&&(s="High",i.classList.add("high")),i.textContent="//"===l&&""===e?t:"//"===l?`${t}:     ${e}`:`${t}:     ${e}     \n          ${l}`,function(t){const e=document.createElement("button");e.classList.add("delete"),e.textContent="Delete",content.appendChild(t),t.appendChild(e),e.addEventListener("click",(function(){t.remove()}))}(i)}function r(){taskScreen.style.display="none",taskSvg.style.display="block"}function u(){titleBox.value="",descBox.value="",dateBox.value="",priorityBox.value=""}taskScreen.style.display="none",submit.addEventListener("click",(function(){const t=titleBox.value,e=descBox.value,n=dateBox.value,s=priorityBox.value;if("Inbox"===text.textContent){const i=new o(t,e,n,s);return i.getValues(),i}if("Today"===text.textContent){const i=new l(t,e,n,s);return i.getValues(),i}if("This Week"===text.textContent){const i=new a(t,e,n,s);return i.getValues(),i}if("This Month"===text.textContent){const i=new c(t,e,n,s);return i.getValues(),i}})),task.addEventListener("click",(function(){taskSvg.style.display="none",taskScreen.style.display="block",title.style.display="block",titleBox.style.display="block",desc.style.display="block",descBox.style.display="block",date.style.display="block",dateBox.style.display="block",priority.style.display="block",priorityBox.style.display="block",submit.style.display="block",taskScreen.classList.add("taskscreen"),content.appendChild(taskScreen),taskScreen.appendChild(title),taskScreen.appendChild(titleBox),taskScreen.appendChild(desc),taskScreen.appendChild(descBox),taskScreen.appendChild(date),taskScreen.appendChild(dateBox),taskScreen.appendChild(priority),taskScreen.appendChild(priorityBox),taskScreen.appendChild(submit)})),inbox.addEventListener("click",(function(){i(),t()})),today.addEventListener("click",(function(){i(),e()})),thisWeek.addEventListener("click",(function(){i(),n()})),thisMonth.addEventListener("click",(function(){i(),s()}))})();