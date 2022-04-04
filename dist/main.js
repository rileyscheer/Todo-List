(()=>{"use strict";function t(){text.textContent="Inbox";for(let t=0;t<inboxList.length;t++)inboxList[t].style.display="block"}function e(){text.textContent="Today";for(let t=0;t<todayList.length;t++)todayList[t].style.display="block"}function s(){text.textContent="This Week";for(let t=0;t<weekList.length;t++)weekList[t].style.display="block"}function n(){text.textContent="This Month";for(let t=0;t<monthList.length;t++)monthList[t].style.display="block"}function o(){!function(){for(let t=0;t<inboxList.length;t++)inboxList[t].style.display="none"}(),function(){for(let t=0;t<todayList.length;t++)todayList[t].style.display="none"}(),function(){for(let t=0;t<weekList.length;t++)weekList[t].style.display="none"}(),function(){for(let t=0;t<monthList.length;t++)monthList[t].style.display="none"}()}class l{constructor(t,e,s,n){this.title=t,this.description=e,this.dueDate=s,this.priority=n}getValues(){const e=titleBox.value,s=descBox.value,n=dateBox.value,o=priorityBox.value;newInbox=document.createElement("div"),newInbox.classList.add("eachTask"),inboxList.push(newInbox),d(e,s,n,o,newInbox),u(),r(),t()}}class i{constructor(t,e,s,n){this.title=t,this.description=e,this.dueDate=s,this.priority=n}getValues(){const t=titleBox.value,s=descBox.value,n=dateBox.value,o=priorityBox.value;newToday=document.createElement("div"),newToday.classList.add("eachTask"),todayList.push(newToday),d(t,s,n,o,newToday),u(),r(),e()}}class a{constructor(t,e,s,n){this.title=t,this.description=e,this.dueDate=s,this.priority=n}getValues(){const t=titleBox.value,e=descBox.value,n=dateBox.value,o=priorityBox.value;newWeek=document.createElement("div"),newWeek.classList.add("eachTask"),weekList.push(newWeek),d(t,e,n,o,newWeek),u(),r(),s()}}class c{constructor(t,e,s,n){this.title=t,this.description=e,this.dueDate=s,this.priority=n}getValues(){const t=titleBox.value,e=descBox.value,s=dateBox.value,o=priorityBox.value;newMonth=document.createElement("div"),newMonth.classList.add("eachTask"),monthList.push(newMonth),d(t,e,s,o,newMonth),u(),r(),n()}}function d(t,e,s,n,o){const l=s.slice(0,4),i=`${s.slice(5,7)}/${s.slice(8,10)}/${l}`;n>=0&&n<40?(n="Low",o.classList.add("low")):n>=40&&n<70?(n="Medium",o.classList.add("medium")):n>=70&&(n="High",o.classList.add("high")),o.textContent="//"===i&&""===e?t:"//"===i?`${t}:     ${e}`:`${t}:     ${e}     \n          ${i}`,o.style.color="black",function(t){const e=document.createElement("button");e.classList.add("delete"),e.textContent="Delete",content.appendChild(t),t.appendChild(e),e.addEventListener("click",(function(){t.remove()}))}(o)}function r(){taskScreen.style.display="none",taskSvg.style.display="block"}function u(){titleBox.value="",descBox.value="",dateBox.value="",priorityBox.value=""}submit.addEventListener("click",(function(){const t=titleBox.value,e=descBox.value,s=dateBox.value,n=priorityBox.value;if("Inbox"===text.textContent){const o=new l(t,e,s,n);return o.getValues(),o}if("Today"===text.textContent){const o=new i(t,e,s,n);return o.getValues(),o}if("This Week"===text.textContent){const o=new a(t,e,s,n);return o.getValues(),o}if("This Month"===text.textContent){const o=new c(t,e,s,n);return o.getValues(),o}})),task.addEventListener("click",(function(){taskSvg.style.display="none",taskScreen.style.display="block",title.style.display="block",titleBox.style.display="block",desc.style.display="block",descBox.style.display="block",date.style.display="block",dateBox.style.display="block",priority.style.display="block",priorityBox.style.display="block",submit.style.display="block",taskScreen.classList.add("taskscreen"),content.appendChild(taskScreen),taskScreen.appendChild(title),taskScreen.appendChild(titleBox),taskScreen.appendChild(desc),taskScreen.appendChild(descBox),taskScreen.appendChild(date),taskScreen.appendChild(dateBox),taskScreen.appendChild(priority),taskScreen.appendChild(priorityBox),taskScreen.appendChild(submit)})),inbox.addEventListener("click",(function(){o(),t()})),today.addEventListener("click",(function(){o(),e()})),thisWeek.addEventListener("click",(function(){o(),s()})),thisMonth.addEventListener("click",(function(){o(),n()})),slider.addEventListener("click",(function(){mode+=1,mode%2==1?(leftColumn.style.backgroundColor="black",leftColumn.style.color="white",leftColumn.style.boxShadow="0px 0px 0px",content.style.backgroundColor="rgb(50, 50, 50)",content.style.color="white",taskScreen.style.backgroundColor="rgb(27, 27, 27)",taskScreen.style.boxShadow="0px 0px 0px",taskSvg.classList.remove("task-svg"),taskSvg.classList.add("dark")):(leftColumn.style.backgroundColor="rgb(211, 211, 211)",leftColumn.style.color="black",leftColumn.style.boxShadow="0px 0px 15px",content.style.backgroundColor="white",content.style.color="black",taskScreen.style.backgroundColor="rgb(211, 211, 211)",taskScreen.style.boxShadow="0px 0px 15px",taskSvg.classList.remove("dark"),taskSvg.classList.add("task-svg"))}))})();