(()=>{"use strict";class t{constructor(t,e,s,i){this.title=t,this.description=e,this.dueDate=s,this.priority=i}getValues(){const t=titleBox.value,e=descBox.value,s=dateBox.value,i=priorityBox.value,o=document.createElement("div");o.classList.add("eachTask"),a(t,e,s,i,o),l(),n()}}class e{constructor(t,e,s,i){this.title=t,this.description=e,this.dueDate=s,this.priority=i}getValues(){const t=titleBox.value,e=descBox.value,s=dateBox.value,i=priorityBox.value,o=document.createElement("div");o.classList.add("eachTask"),a(t,e,s,i,o),l(),n()}}class s{constructor(t,e,s,i){this.title=t,this.description=e,this.dueDate=s,this.priority=i}getValues(){const t=titleBox.value,e=descBox.value,s=dateBox.value,i=priorityBox.value,o=document.createElement("div");o.classList.add("eachTask"),a(t,e,s,i,o),l(),n()}}class i{constructor(t,e,s,i){this.title=t,this.description=e,this.dueDate=s,this.priority=i}getValues(){const t=titleBox.value,e=descBox.value,s=dateBox.value,i=priorityBox.value,o=document.createElement("div");o.classList.add("eachTask"),a(t,e,s,i,o),l(),n()}}function a(t,e,s,i,a){const n=s.slice(0,4),l=`${s.slice(5,7)}/${s.slice(8,10)}/${n}`;i>=0&&i<40?(i="Low",a.classList.add("low")):i>=40&&i<70?(i="Medium",a.classList.add("medium")):i>=70&&(i="High",a.classList.add("high")),a.textContent="//"===l&&""===e?t:"//"===l?`${t}:     ${e}`:`${t}:     ${e}     \n          ${l}`,function(t){const e=document.createElement("button");e.classList.add("delete"),e.textContent="Delete",content.appendChild(t),t.appendChild(e),e.addEventListener("click",(function(){t.remove()}))}(a)}function n(){taskScreen.style.display="none",taskSvg.style.display="block"}function l(){titleBox.value="",descBox.value="",dateBox.value="",priorityBox.value=""}taskScreen.style.display="none",submit.addEventListener("click",(function(){const a=titleBox.value,n=descBox.value,l=dateBox.value,o=priorityBox.value;"Inbox"===text.textContent?new t(a,n,l,o).getValues():"Today"===text.textContent?new e(a,n,l,o).getValues():"This Week"===text.textContent?new s(a,n,l,o).getValues():"This Month"===text.textContent&&new i(a,n,l,o).getValues()})),task.addEventListener("click",(function(){taskSvg.style.display="none",taskScreen.style.display="block",title.style.display="block",titleBox.style.display="block",desc.style.display="block",descBox.style.display="block",date.style.display="block",dateBox.style.display="block",priority.style.display="block",priorityBox.style.display="block",submit.style.display="block",taskScreen.classList.add("taskscreen"),content.appendChild(taskScreen),taskScreen.appendChild(title),taskScreen.appendChild(titleBox),taskScreen.appendChild(desc),taskScreen.appendChild(descBox),taskScreen.appendChild(date),taskScreen.appendChild(dateBox),taskScreen.appendChild(priority),taskScreen.appendChild(priorityBox),taskScreen.appendChild(submit)})),inbox.addEventListener("click",(function(){text.textContent="Inbox"})),today.addEventListener("click",(function(){text.textContent="Today"})),thisWeek.addEventListener("click",(function(){text.textContent="This Week"})),thisMonth.addEventListener("click",(function(){text.textContent="This Month"}))})();