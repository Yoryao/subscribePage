console.log("App Working")

function checkEmail() {
    console.log("Chequeando Email!")
    // Get our input reference.
    let mail = document.getElementById('mailInput');
    console.log(mail.value)

    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(validEmail.test(mail.value)) {
        console.log("mail Correcto")
    } else {
        console.log("mail Incorrecto")
    }

}


                
	

// 	// Using test we can check if the text match the pattern
// 	if( validEmail.test(emailField.value) ){
// 		alert('Email is valid, continue with form submission');
// 		return true;
// 	}else{
// 		alert('Email is invalid, skip form submission');
// 		return false;
// 	}
// } 