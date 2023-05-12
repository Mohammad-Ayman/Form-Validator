// Global variables
var userNameEl = document.getElementById("username");
var emailEl = document.getElementById("email");
var passwordEl = document.getElementById("password");
var confirmPasswordEl = document.getElementById("confirm-password");
var submit = document.querySelector("button");
var password;
// Helper Functions
var conditions = function (condition, parent, smallEL, message) {
    if (condition) {
        parent === null || parent === void 0 ? void 0 : parent.classList.add("error");
        smallEL.innerText = message;
    }
    else {
        parent === null || parent === void 0 ? void 0 : parent.classList.remove("error");
        parent === null || parent === void 0 ? void 0 : parent.classList.add("success");
    }
};
// Global Functions
var username = function () {
    var username = userNameEl.value;
    var parent = userNameEl.parentElement;
    var small = userNameEl.nextElementSibling;
    var message = "Username must be at least 3 characters";
    console.log(small);
    console.log("username length: ".concat(username.length));
    var condition = username.length < 3;
    conditions(condition, parent, small, message);
};
var email = function () {
    var email = emailEl.value;
    var parent = emailEl.parentElement;
    var small = emailEl.nextElementSibling;
    var message = "Email is not valid";
    console.log("email length: ".concat(email.length));
    // if (!email.includes("@") || !email.endsWith(".com")) {
    var condition = email.length < 3;
    conditions(condition, parent, small, message);
};
var passwordFun = function () {
    password = passwordEl.value;
    var small = passwordEl.nextElementSibling;
    var message = "Password must be at least 6 characters";
    var parent = passwordEl.parentElement;
    var condition = password.length < 6;
    console.log("password is: ".concat(password));
    console.log("password length: ".concat(password.length));
    conditions(condition, parent, small, message);
};
var confirmPassword = function () {
    var confirmPassword = confirmPasswordEl.value;
    console.log("confirm Password is: ".concat(confirmPassword));
    console.log("confirm Password length: ".concat(confirmPassword.length));
    var confirmParent = confirmPasswordEl.parentElement;
    var confirmSmall = confirmPasswordEl.nextElementSibling;
    var confirmMessage;
    if (confirmPassword === "")
        confirmMessage = "This field is required";
    else if (confirmPassword.length > 6)
        confirmMessage = "Password must be at least 6 characters";
    else if (password != "" && confirmPassword != password)
        confirmMessage = "Passwords don't match";
    else
        confirmMessage = "Password not valid";
    var confirmCondition = confirmPassword.length < 6;
    conditions(confirmCondition, confirmParent, confirmSmall, confirmMessage);
};
//
var submitHandler = function (e) {
    e.preventDefault();
    console.log(e);
    username();
    email();
    passwordFun();
    confirmPassword();
};
submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", submitHandler);
