
console.log("Inside validation");
let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let emailerror=document.getElementById("emailerror");

let password2=document.getElementById("password2");
let phoneno=document.getElementById("phoneno");
let city=document.getElementById("city");
let p1error=document.getElementById("p1error");
let p2error=document.getElementById("p2error");
let perror=document.getElementById("perror");

function validateEmail()
{
    let email=document.getElementById("email");
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    console.log(email.value);
    if (regexp.test(email.value))
    {
        emailerror.innerHTML="Email id is valid";
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!")
        emailerror.innerHTML="Invalid mail id";
        return false;
    }
}

function validatePassword()
{
    // let p = /^(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/;
    let p=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
    //let p=/^([A-Z]+)([a-z]+)([0-9]+)$/
    
    let password1=document.getElementById("password1");
    console.log(password1.value);
    if(p.test(password1.value)) 
    { 
        
        password1.style.border ="2px solid green";
        p1error.innerHTML = "Password is Strong";
        p1error.style.color = "green";
        return true;
    }
    else
    {  
        password1.style.border ="2px solid red";
        p1error.innerHTML = "Password is too short";
        p1error.style.color = "red";
        return false;
    }
}

function validateConfirmPassword(){
    if (password1.value == password2.value)
    {
        password2.style.border ="2px solid green";
        p2error.innerHTML = "Password Verified";
        p2error.style.color = "green";
        return true;
    }
    else
    {
        password2.style.border ="2px solid red";
        p2error.innerHTML = "Password not matched";
        p2error.style.color = "red";
        return false; 
    }
}
function validatePhoneno(){

    // var phno = /^\(?([1-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phno=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(phno.test(phoneno.value))
    {
        phoneno.style.border = "2px solid green";
        perror.innerHTML ="valid";
        perror.style.color ="green";
        return true;
    }
    else
    {
        phoneno.style.border ="2px solid red";
        perror.innerHTML ="Invalid contact number";
        perror.style.color ="red";
        return false;
    }
}
//PASSWORD METER STRENGTH CHECK

password1.addEventListener('keyup', function(){
    strength();
})
function strength(){
    var val=document.getElementById('password1').value;
    var status=document.getElementById('length');
    var counter=0;

    if(val!=''){
        if(val.length<=3)
        counter=1;
        if(val.length>3 && val.length<=6)
        counter=2;
        if(val.length>=8)
        counter=3;

        if(counter==1){
            status.innerHTML="Too WEAK";
            status.style.backgroundColor="red";
            status.style.color="white"

        }
        if(counter==2){
            status.innerHTML="WEAK";
            status.style.backgroundColor="orange";
            status.style.color="white"

        }
        if(counter==3){
            status.innerHTML="STRONG";
            status.style.backgroundColor="green";
            status.style.color="white"

        }

        
    }
}