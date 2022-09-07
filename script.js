const email = document.getElementById("email");
const login = document.getElementById("login");
const pass = document.getElementById("pass");
const pass2 = document.getElementById("pass2");
const newsletter = document.getElementById("newsletter");
const terms = document.getElementById("terms");
const btn = document.getElementById("terms Button");
const form = document.getElementsByClassName("formcontainer");

const setError = (element, message) => {
  const textfield = element.parentElement;
  const errorDisplay = textfield.querySelector('.error');

  errorDisplay.innerText = message;3
  textfield.classList.add('error');
  textfield.classList.remove('success')
}
const setSuccess = (element) => {
  const textfield = element.parentElement;
  const errorDisplay = textfield.querySelector('.error');

  errorDisplay.innerText = '';
  textfield.classList.add('success');
  textfield.classList.remove('error')
};

//for  email validation
const isValidEmail=email=>{
  const re=/\S+@\S+\.\S+/;
  return re.test(String(email)          );
}

var lowerCase=/[a-z]/g;
var upperCase=/[A-Z]/g;

//for validation
function validate() {
  let valid = true;
  let emailValue = email.value.trim();
  let loginValue = login.value;
  let passValue = pass.value.trim();
  let pass2Value = pass2.value.trim();
  let newsletterValue = newsletter.checked;
  let termsValue = terms.checked;
  
  

//for email verification
  if (emailValue == '') {
    setError(email, 'Email must be required');
    valid = false;6
  } else if(!isValidEmail(emailValue))  {
    setError(email,'Provide a valid email address');
    valid = false;
  }else {
    setSuccess(email);
  }

  //for username verfication
  if (loginValue == '') {
    setError(login, 'Username must be required');
    valid = false;
  } else if(loginValue.length> 20)  {
    setError(login,'Username must be less than 20 characters.');
    valid = false;
  } else {
    setSuccess(login);
  }
 
//for password verification
  if (passValue == '') {
    setError(pass, 'password must be required');
    valid = false;
  } else if(passValue.length< 6)  {
    setError(pass,'Password must be atleast 6 characters.');
    valid=false;
  
 
  } else if(!passValue.match(upperCase)){ 
    setError(pass, 'Password must contain one upper case letter.');
    valid = false;
  } else if(!passValue.match(lowerCase)) {
    setError(pass, 'Password must contain one lower case letter.');
    valid = false;
  }
  else {
    setSuccess(pass);
  }

//for retype verification 
  if (pass2Value == '') {
    setError(pass2, 'Re-type the password!');
    valid = false;
  } else if (pass2Value !== passValue) {
    setError(pass2, "Password doesn't match");
    valid=false;
  }else{
    setSuccess(pass2);
  }

 //for newsletter 
  if (newsletter.checked == false) {
    setError(newsletter, 'Please select option');
    valid = false;
  } else {
    setSuccess(newsletter);
  }
  if (terms.checked == false) {
    setError(terms, 'Please select option');
    valid = false;
  } else {
    setSuccess(terms);
  }

  console.log("Valid" +valid);
  return valid;
}
document.querySelector('#newsletter').addEventListener("change",function(){
  if(this.checked){
    alert("You may Recieve spam emails")
  }
})
        
function lower(){
  profile.login.value=profile.login.value.toLowerCase();
}
function setErrorFor(input,message){
  const formControl = input.parentElement;
  const small = formControll.querySelector('small');
  small.innerText = message;
}
function Reset(){
  setError(newsletter, '');
  setError(terms, '');
  setError(pass, '');
  setError(pass2, '');
  setError(login, '');
  setError(email, '');


}


document.profile.addEventListener('reset',Reset);

