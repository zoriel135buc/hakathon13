
const form  = document.getElementsByTagName('form')[0];
console.log(form)
const email = document.getElementById("mail");
const name = document.getElementById("name");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
  if(!email.validity.valid) {
      email.setCustomValidity("I am expecting an e-mail address!");
  } else {
      email.setCustomValidity("");
  }
});
    
    //   submit button valid
const button  = document.getElementsByTagName("form")[0];

button.addEventListener("submit", getUserComments)

function getUserComments(e){
//   e.preventDefault()
  alert('Your submission was successful. ! ')
} 
      