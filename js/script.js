// Home elements
var welName= document.getElementById("wel-userName");
var logOutbtn = document.getElementById("logout");
// Variables intiate
var userInfo=[];
var user="";
console.log("user");

// Start Function
(function () {
    
    user= localStorage.getItem("sessionUsername");
    console.log("user is ready");
    welName.innerHTML=user;
    
    if (localStorage.getItem("userData") == null) {
        userInfo = [];
    }
    else {
        userInfo = JSON.parse(localStorage.getItem("userData"));
    }
})();

logOutbtn.onclick= function()
{
    
   localStorage.removeItem('sessionUsername');
    window.location='signup.html';
}