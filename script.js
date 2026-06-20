// LOGIN PAGE ----------------------------

let emailinput = document.getElementById("email-input");
let password = document.getElementById("password-input");
let loginbutton = document.querySelector("#login-button");

if (loginbutton) {
    loginbutton.addEventListener("click", function (e) {
        e.preventDefault();
        login();
    });
}

function login() {
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";

    let email = emailinput.value;
    let pass = password.value;

    if (email == "") {
        document.getElementById("email-error").textContent = "Give your email";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("email-error").textContent = "Invalid email format";
    }
    else{
        const userData = JSON.parse(localStorage.getItem("user"));

        if ( userData.email === email && userData.password === pass) {
            alert("Login successful! Welcome, " + userData.name + "!");
            window.location.href = "mainpage.html";
        } else {
            document.getElementById("password-error").textContent = "Invalid email or password";
        }
    }
}

if (emailinput){
    emailinput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            password.focus();
        }
    });
}

if(password){
    password.addEventListener("keydown",function(e){
        if(e.key === "Enter"){
            e.preventDefault();
            loginbutton.click();
            
        }
});
}

// SIGNUP PAGE ----------------------------

let signupemail = document.getElementById("email");
let signupname = document.getElementById("name");
let signuppassword = document.getElementById("password");
let confirmpassword = document.getElementById("confirm-password");
let signupbutton = document.getElementById("signup-button");

if (signupbutton) {
    signupbutton.addEventListener("click", function (e) {
        e.preventDefault();
        Signup();
    });
}

function Signup() {
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("confirm-password-error").textContent = "";

    let name= signupname.value;
    let email = signupemail.value;
    let password = signuppassword.value;
    let confirmPassword = confirmpassword.value;

    if (email == "") {
        document.getElementById("email-error").textContent = "Email is required";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("email-error").textContent = "Invalid email format";
    }
    else if (password == "") {
        document.getElementById("password-error").textContent = "Password is required";
    }
    else if (password.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters";
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirm-password-error").textContent = "Passwords do not match";
    }
    else{
        const user={
            name: name,
            email: email,
            password: password
            
        }
        localStorage.setItem("user", JSON.stringify(user));
        alert("Sign up successful! Please log in.");
        window.location.href = "index.html";
    }
}

if(signupemail){
    signupemail.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            signuppassword.focus();
        }   
});
}

if(signupname){
    signupname.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            signupemail.focus();
        }   
});
}

if(signuppassword){
    signuppassword.addEventListener("keydown",function(e){
        if(e.key === "Enter"){
            e.preventDefault();
            confirmpassword.focus();
        }
    });
}

if(confirmpassword){
    confirmpassword.addEventListener("keydown",function(e){
        if(e.key === "Enter"){
            e.preventDefault();
            signupbutton.click();
        }
    });
}   





