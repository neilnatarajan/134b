function signup() {
    var firstInput, lastInput, addrInput, emailInput, insurInput;
    firstInput = document.getElementById("firstname").value;
    lastInput = document.getElementById("lastname").value;
    addrInput = document.getElementById("address").value;
    emailInput = document.getElementById("email").value;
    insurInput = document.getElementById("insurance").value;


    var myDiv = document.getElementById("signupForm");
    var closeMsg = "<p> Congratulations! You have signed up</p> <p> Please verify the information below</p>";
    var nameMsg = "First Name: " + firstInput + "<br>" + "Last Name: " + lastInput + "<br>";
    var addr = "Address: " + addrInput + "<br>";
    var email = "Email: " + emailInput + "<br>";
    myDiv.innerHTML = closeMsg + nameMsg + addr + email;
  }
}