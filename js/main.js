function CheckAuth(){
    let user = getCookie("user");
    let obj = JSON.parse(user);
    if (user != "") {
        alert("Welcome again " + obj.username);
    } 
    else {
        window.location = "login.html";
        if (user != "" && user != null) {
          setCookie("user", user, 30);
        }
    }
    
}
function setCookie(key,value,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
  }
  
  function getCookie(key) {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function login() {
    let un = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    const userLogin = {username: un, pass: pass};
    const myJSON = JSON.stringify(userLogin);
    setCookie("user",myJSON,10);
  }

  $("#spass").click(function(){
    event.preventDefault();
   var attr = $(".password").attr("type");
   if(attr == "text"){
    $(".password").attr("type","password");
   }
   else {
    $(".password").attr("type","text");
   }
  });

