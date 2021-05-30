var btnSignup = document.guerySelector("#btn-login").addEventListener("click", function(){
let email= document.querySelector('#email').value; 
let password = document.guerySelector('#password').value;
let name = document.guerySelector('#name').value;  
fetch('http://localhost:3000/users/signup', {
     method: "post",
      headers: { 'Content-Type': 'application/json'
}, 
    body: JSON.stringify({ 
        "username": email, 
        "password": password,
        "name": name 
    })
 }).then(response =>{
     return response.json();
 }).then(json => {
      if (json.status === "success"){ 
     let feedback = document.querySelector(".alert"); 
     feedback.textContent = "Sign up complete!"; 
     feedback.classList.remove('hidden'); 
     let token = json.data.token;
     localStorage.setItem("token", token);
     window.location.href = "app.html";// app pagina 
      }
      })
      }); 