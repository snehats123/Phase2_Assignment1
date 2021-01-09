
let emailerror=document.getElementById("emailerror");
let perror=document.getElementById("perror");
function validateEmail()
{
    let email=document.getElementById("email");
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    console.log(email.value);
    if (regexp.test(email.value))
    {
        emailerror.innerHTML="Email id is valid";
        emailerror.style.color="green";
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!")
        emailerror.innerHTML="Invalid mail id";
        emailerror.style.color="red";
        return false;
    }
}
function validatePassword()
{
    // let p = /^(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/;
    let p=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
    //let p=/^([A-Z]+)([a-z]+)([0-9]+)$/
    
    let password=document.getElementById("password");
    console.log(password.value);
    if(p.test(password.value)) 
    { 
        
        password.style.border ="2px solid green";
        perror.innerHTML = "Password is Strong";
        perror.style.color = "green";
        return true;
    }
    else
    {  
        password.style.border ="2px solid red";
        perror.innerHTML = "Password is too short";
        perror.style.color = "red";
        return false;
    }
}
// function validateEmail()
// {
//     let email=document.getElementById("email");
//     let password=document.getElementById("password");
//     let emailerror=document.getElementById("emailerror");
//     let perror=document.getElementById("perror");

//     let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
//     if(email.value=="")
//     {
//         alert("Email field cannot be empty");
//         return false;
//     }
//     else 
//     {
//         if(regexp.test(email.value))
//         {
//             emailerror.innerHTML="Valid";
//             emailerror.style.color="green";
//             return true;
//         }
//         else
//         {
//             emailerror.innerHTML="Invalid";
//             emailerror.style.color="red";
//             return false;
//         }
//     }
//     if(password.value=="")
//     {
//         alert("Password field cannot be empty..!");
//         return false;
//     }
//     else if(password.value.length<=8)
//     {
//         perror.innerHTML="Password is too short ";
//         perror.style.color="red";
//         password.style.border="2px solid red";
//         return false;
//     }
    
//     else 
//     {
//         return true;
//     }
// }