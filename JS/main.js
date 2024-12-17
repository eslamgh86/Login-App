let emailUserInput = document.querySelector("#emailUser"); //# by id
let passUserInput = document.querySelector("#passUser"); //# by id
let btnSignIn = document.querySelector("#btnSignIn"); //# by id



let existUsers = [];

if (localStorage.getItem("MyStorage") !== null) {
  existUsers = JSON.parse(localStorage.getItem("MyStorage"));
}

btnSignIn.addEventListener('click', function(){

  checkExistUser();

})

function checkExistUser() {
  for (var i = 0; i < existUsers.length; i++) {
    if (
      existUsers[i].emailUser.toLowerCase() == emailUserInput.value.toLowerCase() &&
      existUsers[i].passwordUser == passUserInput.value
    ) {

      localStorage.setItem("savedEmail", existUsers[i].emailUser); // Save the email
        window.open("welcome.html","_self");
        // return true;

    } 
  }

  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Either email or password is wrong",
    footer: 'Enter vaild email and password'
  });
  
  // return false
}



