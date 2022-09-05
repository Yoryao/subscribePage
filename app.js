console.log("App Working")

function checkEmail() {
    console.log("Chequeando Email!")
    // Get our input reference.
    let mail = document.getElementById('mailInput');
    console.log(mail.value)

    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(validEmail.test(mail.value)) {
        let errorMessage = document.getElementById('errorContainer');  
        errorMessage.classList.add("showError");
        let errorIcon = document.getElementById('errorIcon');  
        errorIcon.classList.add("showError");
    } else {
    errorMessage.classList.remove("showError");
    errorIcon.classList.remove("showError");

    }

}

