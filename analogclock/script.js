const second=document.querySelector('.sec');
const minutes=document.querySelector('.min');
const hours=document.querySelector('.hrs');
setInterval(runTime,1000);

function runTime(){
  const time=new Date();
  const sec=time.getSeconds()/60;
  const min=(sec+time.getMinutes())/60;
  const hrs=(min+time.getHours())/12;
  hours.style.setProperty("--rotation",hrs*360);
  minutes.style.setProperty("--rotation",min*360);
  second.style.setProperty("--rotation",sec*360);
   console.log(sec,min,hrs);
}
runTime();