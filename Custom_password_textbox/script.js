const eye = document.querySelector('#eyeicon');
const input = document.querySelector('.input-container input');


eye.style="color:white";
let password =true;
eye.addEventListener("click", function (){
    if(password){
    input.setAttribute("type","text");
    eye.setAttribute("class","fa fa-eye-slash");

    password=false;
    }else{
    input.setAttribute("type","password");
    eye.setAttribute("class","fa fa-eye");
    password=true;

    }
})
