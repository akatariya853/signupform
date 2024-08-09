function container() {
    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let password = document.getElementById('password')


    let usernameErr = document.getElementById('username-err')
    let emailErr = document.getElementById('email-err')
    let passwordErr = document.getElementById('password-err')


    // REGULAR EXPRESSIONS
    let usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;


    let result1 = usernameRegex.test(username.value)
    let result2 = emailRegex.test(email.value)
    let result3 = passwordRegex.test(password.value)



    if (result1) {
        console.log(true);
        usernameErr.style.visibility = "hidden"
    } else {
        console.log(false);
        usernameErr.style.visibility = "visible"
    }
    if (result2) {
        console.log(true);
        emailErr.style.visibility = "hidden"
    } else {
        console.log(false);
        emailErr.style.visibility = "visible"
    }
    if (result3) {
        console.log(true);
        passwordErr.style.visibility = "hidden"
    } else {
        console.log(false);
        passwordErr.style.visibility = "visible"
    }
}