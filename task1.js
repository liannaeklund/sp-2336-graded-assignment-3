let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");


submitButton.addEventListener("click", function(event) {

    event.preventDefault();


    if (!pwd.checkValidity()) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    } 
    else if (pwd.value !== pwd2.value) {
        pwd.setCustomValidity("Your passwords must match");
    } 
    else {
        pwd.setCustomValidity("");
    }


    pwd.reportValidity();
});
