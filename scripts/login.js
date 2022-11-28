const loginform = document.getElementById("login-form")
const btn = document.getElementById("login-btn")
const loginErrorMsg = document.getElementById("login-error-msg");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    username = document.getElementById("inputUsername")
    password = document.getElementById("inputPassword")

    if (username.value === "user" && password.value === "123") {
        location.href="index.html";
        alert("You have successfully logged in.");
    } else {
        loginErrorMsg.style.opacity = 1;
        username.value = "";
        password.value = "";
    }
}
);

