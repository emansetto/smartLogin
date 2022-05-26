// logIn Elements
var login_userEmail= document.getElementById("loginuserEmail");
var login_userPassword= document.getElementById("loginuserPassword");
var signInbtn= document.getElementById("signIn");

var userInfo=[];

// Login Event
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

signInbtn.onclick = function()
{
    if(login_userEmail.value !="" && login_userPassword.value != "")
    {
        if(loginAuthorize())
{
// localStorage.setItem("sessionUsername", login_userEmail.value);
window.location="index.html";
}
else
{
   exist.innerHTML="there is something wrong in your email or passowrd."
}
    }
    else
    {
        exist.innerHTML="all inpust required"
    }

}


function loginAuthorize()
{
for(var i=0; i<userInfo.length; i++)
{
    console.log(i);
    if(login_userEmail.value == userInfo[i].Email && login_userPassword.value == userInfo[i].Password)
    {
        
        localStorage.setItem("sessionUsername",userInfo[i].Name);
     
        console.log("Success");
        return true;
        break;
    }
} 
return false;
}

