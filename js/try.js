// signUp Elements
var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userPassword= document.getElementById("userPassword");
var exist= document.getElementById("exist");
var signupBTN= document.getElementById("signUp");

// logIn Elements
var login_userEmail= document.getElementById("loginuserEmail");
var login_userPassword= document.getElementById("loginuserPassword");
var signInbtn= document.getElementById("signIn");

// Home elements
var welName= document.getElementById("wel-userName");
var logOutbtn = document.getElementById("logout");
// Variables intiate
var userInfo=[];
var user;
console.log("user");

// Start Function
(function () {
    
    user= localStorage.getItem("sessionUsername");
    console.log("user is ready");
   
         welName.innerText=user;
        //  if(window.location.href == "index.html")
        //  {
        //      console.log("index page");
        //  }
 
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
// SignUp Event

    signupBTN.onclick = function()
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

// Login Event

    signInbtn.onclick = function()
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


function loginAuthorize()
{
    for(var i=0; i<userInfo.length; i++)
    {
        console.log(login_userEmail.value);
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

