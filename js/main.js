function login(){
  let userNameField = document.getElementById("username");
  let passWordField = document.getElementById("password");
  let userName = userNameField.value;
  let passWord = passWordField.value;  

  userNameField.addEventListener('focus',(e)=>e.target.style.borderColor="rgb(41, 41, 44)")
  passWordField.addEventListener('focus', (e)=>e.target.style.borderColor="rgb(41, 41, 44)");
  

  if(userName==""){   

    userNameField.style.borderColor="red";   
    return;
  }
  if (passWord==""){
    passWordField.style.borderColor="red";   
    return;
  }
  // pass key and value
 let paraData="user=" + userName + "&pass="+ passWord;
 requestAjax(paraData); 
}

let buttonLogin =document.getElementById("buttonLogin");
buttonLogin.addEventListener('click',login);




function requestAjax(paraData){
// creating & calling a AJAX request
let xmlhttp = new XMLHttpRequest();
let method ="post";
let url = "http://localhost/library/login.php"
let asynchronous =true;



xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {    
    let res =JSON.parse(this.responseText);
    if(res["success"]){
      window.location.replace("dashboard.html");      
    }else{
      alert("Incorect credentials")
    }
  }
};

xmlhttp.open(method, url, asynchronous);

    // Specifying the MIME type of the request body
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xmlhttp.send((paraData));
}






