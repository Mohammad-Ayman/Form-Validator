// Global variables
const userNameEl = document.getElementById("username") as HTMLInputElement;
const emailEl = document.getElementById("email") as HTMLInputElement;
const passwordEl = document.getElementById("password") as HTMLInputElement;
const confirmPasswordEl = document.getElementById(
  "confirm-password"
) as HTMLInputElement;
const submit = document.querySelector("button") as HTMLButtonElement;
let password: string;

// Helper Functions
const conditions = (
  condition: boolean,
  parent: HTMLElement,
  smallEL,
  message?: string
) => {
  if (condition) {
    parent?.classList.add("error");
    smallEL.innerText = message;
  } else {
    parent?.classList.remove("error");
    parent?.classList.add("success");
  }
};

// Global Functions
const username = () => {
  const username: string = userNameEl.value;
  const parent = userNameEl.parentElement as HTMLElement;
  const small = userNameEl.nextElementSibling;
  const message = "Username must be at least 3 characters";
  console.log(small);
  console.log(`username length: ${username.length}`);
  const condition = username.length < 3;
  conditions(condition, parent, small, message);
};

const email = () => {
  const email: string = emailEl.value;
  const parent = emailEl.parentElement as HTMLElement;
  const small = emailEl.nextElementSibling;
  const message = "Email is not valid";
  console.log(`email length: ${email.length}`);
  // if (!email.includes("@") || !email.endsWith(".com")) {
  const condition = email.length < 3;
  conditions(condition, parent, small, message);
};

const passwordFun = () => {
  password = passwordEl.value;
  const small = passwordEl.nextElementSibling;
  const message = "Password must be at least 6 characters";
  const parent = passwordEl.parentElement as HTMLElement;
  const condition = password.length < 6;
  console.log(`password is: ${password}`);
  console.log(`password length: ${password.length}`);
  conditions(condition, parent, small, message);
};
const confirmPassword = () => {
  const confirmPassword: string = confirmPasswordEl.value;
  console.log(`confirm Password is: ${confirmPassword}`);
  console.log(`confirm Password length: ${confirmPassword.length}`);
  const confirmParent = confirmPasswordEl.parentElement as HTMLElement;
  const confirmSmall = confirmPasswordEl.nextElementSibling;
  let confirmMessage: string;
  if (confirmPassword === "") confirmMessage = "This field is required";
  else if (confirmPassword.length > 6)
    confirmMessage = "Password must be at least 6 characters";
  else if (password != "" && confirmPassword != password)
    confirmMessage = "Passwords don't match";
  else confirmMessage = "Password not valid";
  const confirmCondition = confirmPassword.length < 6;
  conditions(confirmCondition, confirmParent, confirmSmall, confirmMessage);
};

//
const submitHandler = (e): void => {
  e.preventDefault();
  console.log(e);
  username();
  email();
  passwordFun();
  confirmPassword();
};

submit?.addEventListener("click", submitHandler);
