const submitBtn = document.querySelector("#submit");
const form = document.querySelector(".form");
const small = document.querySelector(".small");
const small_firstName = document.querySelector(".small-firstname");
const small_lastName = document.querySelector(".small-lastname");
const firstName = document.querySelector("#fistName");
const lastName = document.querySelector("#lastName");
const country = document.querySelector("#country");
const subject = document.querySelector("#subject");
const modal = document.querySelector('.modalContainer')

const formInfo = {};
let count = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  count = 0;
  checkValidation();
});

function checkValidation() {
  if (firstName.value.trim() === "") {
    small_firstName.innerHTML = "FirstName can't be empty String";
    setErrorFor(firstName);
    // setErrorFor(firstName,"FirstName can't be empty String")
  } else if (!moreThanThree(firstName.value.trim())) {
    small_firstName.innerHTML = "FirstName can't be less than 3 charactors";
    setErrorFor(firstName);
    // setErrorFor(firstName,"FirstName can't be less than 3 charactors")
  } else {
    small_firstName.innerHTML = "";
    setSuccessFor(firstName);
    count++;
  }

  if (lastName.value.trim() === "") {
    small_lastName.innerHTML = "lastName can't be empty String";
    setErrorFor(lastName);
  } else if (!moreThanThree(lastName.value)) {
    small_lastName.innerHTML = "lastName can't be less than 3 charactors";
    setErrorFor(lastName);
  } else {
    small_lastName.innerHTML = "";
    setSuccessFor(lastName);
    count++;
  }
  console.log(count);
  if (count == 2) {
    successfullyDone();
  }
}

function setErrorFor(input, message) {
  input.classList.add("redBorder");
}

function setSuccessFor(input) {  
  if (input.classList.contains("redBorder")) {
    input.classList.remove("redBorder");
  }
  formInfo[input.id] = input.value;  
}

function moreThanThree(input) {
  console.log(input + "inside regex")
  // return /^[A-Z0-9]{3}+$/i.test(input);
  // return /^([0-9]*[a-zA-Z]){3,}[0-9]*$.test(input);
  return /^[A-Z0-9]{3,}[0-9]*$/i.test(input);
  
}

function successfullyDone() {
  //adding other fileds to the object
  formInfo["country"] = country.value;
  formInfo["subject"] = subject.value;

 //making form clear
  firstName.value = "";
  lastName.value = "";
  country.value = "Asia";
  subject.value = "";

  //showing success message and redirecting to the other page
  modal.classList.toggle('hide')
  setTimeout(() => {
    modal.classList.toggle('hide')
    window.location.href = "RedirectPage.html";
  }, 8000);
  
}
