// script.js
function checkAge() {
  const ageInput = document.getElementById("ageInput").value;
  const result = document.getElementById("result");
  const age = parseInt(ageInput);

  if (isNaN(age) || age < 0 || age > 120) {
    result.textContent = "Please enter a valid age between 0 and 120.";
    result.style.color = "red";
    return;
  }

  if (age < 18) {
    result.textContent = "You are a minor.";
    result.style.color = "orange";
  } else if (age >= 65) {
    result.textContent = "You are a senior.";
    result.style.color = "purple";
  } else {
    result.textContent = "You are an adult.";
    result.style.color = "green";
  }
}

function resetForm() {
  document.getElementById("ageInput").value = "";
  document.getElementById("result").textContent = "";
}
function showAlert() {
  alert("This is an alert message!");
}
// Fix: Define checkButton and attach event listener to call checkAge 
const checkButton = document.getElementById("checkButton");
if (checkButton) {
  checkButton.addEventListener("click", checkAge);
}
checkButton.addEventListener("click", () => {
 //? Grabbing age input value
  let ageInput = document.getElementById("ageInput");
  console.log(ageInput.value);

  //?Changes inputDate to acutual Date Value
  const inputDate = new Date(ageInput.value);

  //!Month Number is on a Zero-Based index
  console.log(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate());

//?Gets current date and we use this to compare.
  const currentDate = new Date();
  console.log(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
});
