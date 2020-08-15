//writing a function to validate the forrm

function validate(){
    const email = document.getElementById('email-address').value;
    const number = document.getElementById('number').value;
    const first = document.getElementById('first-name').value;
    const last = document.getElementById('last-name').value;
    const money = document.getElementById("money").value;
    const errortext = document.getElementById('error');
    var message;

    errortext.style.padding= "20px";

    if(email.indexOf('@') === -1 || email.length < 7){
        message = "Enter A Valid Email Address"
        errortext.innerHTML = message
        return false
    }

    if(number.length < 14 || isNaN(number)){
        message  = "Enter A Valid Number"
        errortext.innerHTML = message
        return false
    }

    if(first.length < 3){
        message = "Enter a Valid  first-Name"
        errortext.innerHTML = message
        return false
    }
    if(last.length < 3){
        message = 'Enter  A Valid Last-Name'
        errortext.innerHTML = message
        return false
    }
    if(money.indexOf("P") === 0 ){
        message = "Type Of Organization Is needed";
        errortext.innerHTML = message
        return false
    }

    alert("Succesfully Registered Check Your Email For A Link")
    return true


    

}