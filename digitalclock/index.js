const hours=document.querySelector('#hours')
const minutes=document.querySelector('#min')
const seconds=document.querySelector('#sec')
const section=document.querySelector('#section')
const clock=document.querySelector('.clock')

function time(){
    const date=new Date();
const h=date.getHours();
const m=date.getMinutes();
const s=date.getSeconds();
 hours.innerHTML=h<10?"0"+h:h && h>12?h-12:h;
 minutes.innerHTML=m<10?"0"+m:m;
 seconds.innerHTML=s<10?"0"+s:s;
section.innerHTML=h>12?"PM":"AM";

}
setInterval(time,1000);
