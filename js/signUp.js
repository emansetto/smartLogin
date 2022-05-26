var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userPassword= document.getElementById("userPassword");
var exist= document.getElementById("exist");
var signupBTN= document.getElementById("signUp");
var userInfo=[];
// SignUp Event
(function () {
    // user= localStorage.getItem("sessionUsername");
    // console.log("user is ready");
    // welName.innerHTML=user;
    
    if (localStorage.getItem("userData") == null) {
        userInfo = [];
    }
    else {
        userInfo = JSON.parse(localStorage.getItem("userData"));
    }
})();
signupBTN.onclick = function()
{

    if(userName.value !="" && userEmail.value !="" && userPassword.value != "")
    {
    if(ckeckUserExistence())
    {
        exist.innerHTML="Email already exists";
    }

    else
    {  
        localStorage.setItem("sessionUsername", userName.value);
          addUser();
          console.log("add new user");
        //   signupBTN.style.formaction="index.html";
        window.location="index.html"
    }
    }
    else
    {
        exist.innerHTML="all inputs required";
        
    }

}
// document.body.removeEventListener('click', signinfunction);


function ckeckUserExistence()
{
for(var i=0; i<userInfo.length;i++)
{  
    // console.log("for loop");

    if(userEmail.value == userInfo[i].Email)
    {
        console.log("email Exists");
        return true;   
        break;
    }
}

return false;
}

function addUser()
{
var object =
{
    Name: userName.value,
    Email: userEmail.value,
    Password: userPassword.value,
};
userInfo.push(object);
localStorage.setItem("userData", JSON.stringify(userInfo));

}