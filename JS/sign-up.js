let createNameInput =document.getElementById("createName");
let createEmailInput =document.getElementById("createEmail");
let createPasswordInput =document.getElementById("createPassword");
let signupBtnInput =document.querySelector("#signUpBtn");

let existUsers=[]


if (localStorage.getItem("MyStorage") !== null) {
  existUsers = JSON.parse(localStorage.getItem("MyStorage"));

}

signupBtnInput.addEventListener('click' ,function(){

  addNewUser();

})


// flags
var isNameValid = false;
var isEmailValid = false;
var isPasswordValid =false;


function addNewUser(){

if ( !checkIsExist() && isNameValid && isEmailValid && isPasswordValid){

  var user={
    nameUser:createNameInput.value,
    emailUser:createEmailInput.value,
    passwordUser:createPasswordInput.value,
  }

  existUsers.push(user);
  localStorage.setItem("MyStorage", JSON.stringify(existUsers));
  clearUser();
  window.open("/index.html", "_self")
  
  console.log(existUsers);
}else{
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
    footer: 'Please follow the instructions under all inputs'
  });
}

}


function clearUser(){
    createNameInput.value =null
    createEmailInput.value=null
    createPasswordInput.value=null
}

// function validationName() {
//   // Regex for name validation (only letters )
//   var regexName = /^[a-zA-Z ]{2,30}$/;
//   var nameError = document.querySelector('.nameError');

//   if (regexName.test(createNameInput.value)) {
//     createNameInput.classList.add("is-valid");
//     createNameInput.classList.remove("is-invalid");
//     nameError.classList.add("d-none");
//   } else {
//     createNameInput.classList.add("is-invalid");
//     createNameInput.classList.remove("is-valid");
//     nameError.classList.remove("d-none");
//   }
// }

function checkIsExist(){
  for( var i=0   ;  i< existUsers.length  ; i++){
    if(existUsers[i].emailUser.toLowerCase() == createEmailInput.value.toLowerCase()){

      return true //  alert for invalid data
    }
  }
  return false

}


createNameInput.addEventListener("input", validationName);
createEmailInput.addEventListener("input", validationEmail);
createPasswordInput.addEventListener("input", validationPassword);

//&  validationName
function validationName() {
  // Regex for name validation (only letters and spaces allowed )
  var regexName = /^[a-zA-Z ]{2,30}$/;
  var nameError = document.querySelector('.nameError'); //message from Paragraph
  isNameValid = regexName.test(createNameInput.value) // = true or false
  // toggle instead of ( if statement)
  createNameInput.classList.toggle("is-valid" , isNameValid )
  createNameInput.classList.toggle("is-invalid" , ! isNameValid )
  nameError.classList.toggle("d-none" , isNameValid )
  nameError.classList.toggle("d-block" , ! isNameValid )
}



//&  validationEmail
function validationEmail() {
  
  var regexName = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  var emailError = document.querySelector('.emailError'); //message from Paragraph
  isEmailValid = regexName.test(createEmailInput.value) // = true or false
  // toggle instead of ( if statement)
  createEmailInput.classList.toggle("is-valid" , isEmailValid )
  createEmailInput.classList.toggle("is-invalid" , ! isEmailValid )
  emailError.classList.toggle("d-none" , isEmailValid )
  emailError.classList.toggle("d-block" , ! isEmailValid )
}

//&  validationPassword
function validationPassword() {
  
  var regexName = /^(?=.*[A-Z]).{4,}$/
  var passwordError = document.querySelector('.passwordError'); //message from Paragraph
  isPasswordValid = regexName.test(createPasswordInput.value) // = true or false
  // toggle instead of ( if statement)
  createPasswordInput.classList.toggle("is-valid" , isPasswordValid )
  createPasswordInput.classList.toggle("is-invalid" , ! isPasswordValid )
  passwordError.classList.toggle("d-none" , isPasswordValid )
  passwordError.classList.toggle("d-block" , ! isPasswordValid )
}

