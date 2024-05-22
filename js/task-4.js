
const form = document.querySelector(".login-form");
const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');

const formFunk = (e) => {
  e.preventDefault();
  const resultObj = {};

  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
    return;
  }

  resultObj.email = e.target[0].value.trim();
  resultObj.password = e.target[1].value.trim();

  form.reset();
  console.log(resultObj);
};

form.addEventListener("submit", formFunk);

