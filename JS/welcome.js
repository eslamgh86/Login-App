let logoutBtn = document.querySelector("#logoutBtn"); //# by id

window.addEventListener('load' , function(){
  welcomeUser()

})


function welcomeUser(){
WelocomeMsg.innerHTML = ` welcome ${localStorage.getItem("savedEmail")}`
console.log(WelocomeMsg.innerHTML)
}



logoutBtn.addEventListener('click', function(){
  window.open("../index.html")
})