const loginform = document.getElementById("login-form")
const btn = document.getElementById("login-btn")
const registerBtn = document.getElementById("register-btn")
const loginErrorMsg = document.getElementById("login-error-msg");




btn.addEventListener("click", (e) => {
    e.preventDefault();
    username = document.getElementById("inputUsername")
    password = document.getElementById("inputPassword")

    if (localStorage.getItem(username.value) === password.value) {
        location.href="index.html";
        localStorage.setItem("user",username.value)
    } else {
        loginErrorMsg.style.opacity = 1;
        username.value = "";
        password.value = "";
    }
}
);

registerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    username = document.getElementById("inputUsername")
    password = document.getElementById("inputPassword")

    localStorage.setItem(username.value, password.value)
    location.href="login.html";
    alert("You have successfully registered");

    
}
);

