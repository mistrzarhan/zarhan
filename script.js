// form validation

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let registerBtn = document.getElementById("register-btn");

// getting error spans
let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let subjectError = document.getElementById("subjectError");
let messageError = document.getElementById("messageError");
let formError = document.getElementById("formError");

// validators
let validName;
let validEmail;
let validSubject;
let validMessage;

const validation = () => {
    // name validation
name.addEventListener('input',(event)=>{
if(name.value == ""){
nameError.innerHTML = "Please enter name in this field!";
event.target.style.border = "0.5px solid red";
validName = false;
}
else if(!isNaN(event.target.value)){
nameError.innerHTML = "Please enter alphabetic characters!";
event.target.style.border = "0.5px solid red";
validName = false;
}
else if(event.target.value.search(/[0-9]/) > 0){
nameError.innerHTML = "You cannot enter digits within name!";
event.target.style.border = "0.5px solid red";
validName = false;
}
else if(event.target.value.length < 2){
nameError.innerHTML = "Please enter a proper name!"
event.target.style.border = "0.5px solid red";
validName = false;
}
else{
nameError.innerHTML = "";
event.target.style.border = "0.5px solid #5d12d2";
validName = true;
}
})

// email validation
email.addEventListener('input',(event)=>{
if(email.value == ""){
    emailError.innerHTML = "Email address cannot be empty!";
    event.target.style.border = "0.5px solid red";
    validEmail = false;
}
else if(event.target.value.includes(" ")){
    emailError.innerHTML = "You cannot enter spaces within email!";
    event.target.style.border = "0.5px solid red";
    validEmail = false;
}
else if(!event.target.value.includes("@")){
    emailError.innerHTML = "Please enter @ in your email!";
    event.target.style.border = "0.5px solid red";
    validEmail = false;
}
else{
    emailError.innerHTML = "";
    event.target.style.border = "0.5px solid #5d12d2";
    validEmail = true;
}
})

// subject validation
subject.addEventListener("input",(event)=>{
if(event.target.value == ""){
    subjectError.innerHTML = "Subject cannot be empty!";
    event.target.style.border = "0.5px solid red";
    validSubject = false;
}
else if(event.target.value.length < 2){
    subjectError.innerHTML = "Please write a proper subject!";
    event.target.style.border = "0.5px solid red";
    validSubject = false;
}
else{
    subjectError.innerHTML = "";
    event.target.style.border = "0.5px solid #5d12d2";
    validSubject = true;
}


})

// message validation
message.addEventListener("input",(event)=>{
if(event.target.value == ""){
    messageError.innerHTML = "Please write a message!";
    event.target.style.border = "0.5px solid red";
    validMessage = false;
}
else if(event.target.value.length < 2){
    messageError.innerHTML = "Please write a proper message!";
    event.target.style.border = "0.5px solid red";
    validMessage = false;
}
else{
    messageError.innerHTML = "";
    event.target.style.border = "0.5px solid #5d12d2";
    validMessage = true;
}
})
}

registerBtn.addEventListener("click",(e)=>{
    if(!(validName && validEmail && validSubject && validMessage)){
        e.preventDefault();
formError.innerHTML = "Please fill the form properly!";
formError.style.color = "red";
}
})

validation();