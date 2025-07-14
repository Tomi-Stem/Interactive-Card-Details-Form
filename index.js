const cardForm = document.querySelector('.card-form');
const submitButton = document.querySelector('.form-button');
const errorMsg = document.querySelectorAll(".error-msg");
const fields = ['cardNo', 'name', 'mm', 'yy', 'cvc'];
const completed = document.querySelector(".completed");
const contdBtn = document.querySelector(".contd-btn");
const nameInput = document.getElementById('name-i');
const cardInput = document.getElementById('cardNo-i');
const mmInput = document.getElementById('mm-i');
const yyInput = document.getElementById('yy-i');
const cvcInput = document.getElementById('cvc-i');

const validate = (e) => {
  e.preventDefault();
  const forms = document.querySelectorAll(".forms");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (forms[0].value < 1) {
    errorMsg[0].style.display = "block";
    forms[0].style.borderColor = "hsl(0, 100%, 66%)";
  } else {
    errorMsg[0].style.display = "none";
    forms[0].style.borderColor = "hsl(278, 68%, 11%)";
  }

  if (forms[1].value < 1 || /[^0-9\s]/.test(forms[1].value)) {
    // Show error if the field is less than 1 OR contains non-number characters
    errorMsg[1].style.display = "block";
    forms[1].style.borderColor = "hsl(0, 100%, 66%)";
  } else {
    // If input is valid
    errorMsg[1].style.display = "none";
    forms[1].style.borderColor = "hsl(278, 68%, 11%)";
  }

  let hasError = false;

  [2, 3].forEach(index => {
    if (forms[index].value < 1) {
      forms[index].style.borderColor = "hsl(0, 100%, 66%)";
      hasError = true;
    } else {
      forms[index].style.borderColor = "hsl(278, 68%, 11%)";
    }
  });
  
  errorMsg[2].style.display = hasError ? "block" : "none";
  

  if (forms[4].value < 1) {
    errorMsg[3].style.display = "block";
    forms[4].style.borderColor = "hsl(0, 100%, 66%)";
  } else {
    errorMsg[3].style.display = "none";
    forms[4].style.borderColor = "hsl(278, 68%, 11%)";
  }};

nameInput.addEventListener('input', () => {
  if (nameInput.value.length > 27) {
    nameInput.value = nameInput.value.slice(0, 19);
  }
});

cardInput.addEventListener('input', () => {

  if (cardInput.value.length > 19) {
  cardInput.value = cardInput.value.slice(0, 19);
  }
  
  let value = cardInput.value.replace(/\s/g, ''); // Remove existing spaces
  value = value.replace(/(.{4})/g, '$1 ').trim(); // Add space every 4 digits
  cardInput.value = value;
});

mmInput.addEventListener('input', () => {
  if (mmInput.value.length > 2) {
    mmInput.value = mmInput.value.slice(0, 2);
  }
});

yyInput.addEventListener('input', () => {
  if (yyInput.value.length > 2) {
    yyInput.value = yyInput.value.slice(0, 2);
  }
});

cvcInput.addEventListener('input', () => {
  if (cvcInput.value.length > 3) {
    cvcInput.value = cvcInput.value.slice(0, 3);
  }
});

fields.forEach(field => {
  document.getElementById(`${field}-i`).addEventListener('keyup', () => {
    document.getElementById(`${field}-o`).innerHTML = document.getElementById(`${field}-i`).value;
  });
});



submitButton.addEventListener('click', validate);

submitButton.addEventListener('click', () => {
  let hasError = false;

  errorMsg.forEach(error => {
    if (error.style.display !== 'none') {
      hasError = true;
    }
  });

  if (hasError) {
    // If there is at least one visible error, stop here
    return;
  }

  // If no errors are visible, proceed
  cardForm.style.display = "none";
  completed.style.display = "block";
});

contdBtn.addEventListener('click', () => {
  // Reset all forms
  for (let i = 0; i < document.forms.length; i++) {
    document.forms[i].reset();
  }

  // Reset all output fields to their original text using data-default
  fields.forEach(field => {
    const outputElement = document.getElementById(`${field}-o`);
    outputElement.innerHTML = outputElement.getAttribute('data-default');
  });

  // Show the card form and hide the completed section
  cardForm.style.display = "block";
  completed.style.display = "none";
});