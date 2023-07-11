document.getElementById("loginform").addEventListener("submit", auth);

function auth(event) {
     event.preventDefault();

     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
     console.log(username);

     if (username === "admin@gmail.com" && password === "user") {
          window.location.replace("index.html");
     }  if (username === "" && password === "") {
          alert("Please enter information");
     } else{
         alert("Please enter valid information");
         return;
     }
}