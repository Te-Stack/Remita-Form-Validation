//const error = document.querySelectorAll('#error');
const account = document.getElementById('accountType');
const labelChange = document.querySelector('[for=corporateName]');
const corporate = document.getElementById('corporateName');
const gov = document.querySelector('.gov');
const form = document.getElementsByTagName('form')[0];
const fName = document.getElementById('fname');
    const lName = document.getElementById('lname');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const  lab='<span class="required-field">*</span>';

    const accountHidden=document.getElementsByClassName('required');

//hidden field


account.addEventListener('change', function() {
    if (account.value == "PERSONAL") {
        document.querySelector('.hidden').style.display = "none";
        corporate.classList.remove('required');

    } else if (account.value == "SME") {
       
        labelChange.textContent = "Micro SME Name "
        labelChange.insertAdjacentHTML('beforeend',lab);
        corporate.placeholder = "Please Enter your Micro SME Name"
        gov.style.display = "block";
        document.querySelector('.hidden').style.display = "block";
        corporate.classList.add('required');

    } else if (account.value == "CORPORATE") {
        labelChange.textContent = "Corporate/SME Name "
        labelChange.insertAdjacentHTML('beforeend',lab);
        corporate.placeholder = "Please Enter your Corporate/SME Name"
        gov.style.display = "block";
        document.querySelector('.hidden').style.display = "block";
        corporate.classList.add('required');

    } else if (account.value == "GOVERNMENT") {
        document.querySelector('.hidden').style.display = "block";
        
        gov.style.display = "none";
        labelChange.textContent = "Government/MDA Name "
        labelChange.insertAdjacentHTML('beforeend',lab);
        corporate.placeholder = "Please Enter your Government/MDA Name"
        corporate.classList.add('required');
    } else {}

});



function fvalidation() {
    
    var fnameErr = lnameErr = phoneErr = emailErr = accountErr =requiredErr= true;

    if (email.validity.valid) {
        error = document.querySelector('#email + label.error');
        error.textContent = "";
        error.style.border = "inherit";

    } else {
        error = document.querySelector('#email + label.error');
        error.innerHTML = "The field is required";
        email.style.border = "2px solid red";
        email.style.background = "#ffe4dc";
        emailErr = false;
    }

    if (fName.validity.valid) {
        error = document.querySelector('#fname + label.error');
        error.textContent = "";
        error.style.border = "inherit";

    } else {
        error = document.querySelector('#fname + label.error');
        error.innerHTML = "The field is required";
        fName.style.border = "2px solid red";
        fName.style.background = "#ffe4dc";
        fnameErr = false;
    }
    if (lName.validity.valid) {
        error = document.querySelector('#lname + label.error');
        error.textContent = "";
        error.style.border = "inherit";


    } else {
        error = document.querySelector('#lname + label.error');
        error.innerHTML = "The field is required";
        lName.style.border = "2px solid red";
        lName.style.background = "#ffe4dc";
        lnameErr = false;
    }
    if (phone.validity.valid) {
        error = document.getElementById('error');
        error.textContent = "";
        error.style.border = "inherit";


    } else {
        error = document.getElementById('error');

        error.textContent = "The field is required";
        phone.style.border = "2px solid red";
        phone.style.background = "#ffe4dc";
        phoneErr = false;
    }
    if (account.validity.valid) {
        error = document.querySelector('#accountType + label.error');
        error.textContent = "";
        error.style.border = "inherit";


    } else {
        error = document.querySelector('#accountType + label.error');
        error.textContent = "The field is required";
        account.style.border = "2px solid red";
        account.style.background = "#ffe4dc";
        accountErr = false;
    }
    if(corporate.classList.contains('required')) {
     
    if ((corporate.validity.valid)) { 
        error = document.querySelector('input.required + label.error');
        error.textContent = "";
        error.style.border = "inherit";

    } else {
        error = document.querySelector('.required + label.error');
        error.textContent = "The field is required";
        corporate.style.border = "2px solid red";
        corporate.style.background = "#ffe4dc";
        requiredErr = false;
    }
}
console.log(requiredErr);
 
    if (((emailErr && fnameErr) &&(lnameErr && phoneErr) && (accountErr && requiredErr))==true) {
        alert("Form Submitted Successfully");
        location.reload();   
    } else {
        return false;
    }
}


//form.onsubmit = validation();
form.addEventListener('submit', function(event) {
    event.preventDefault();
    fvalidation();
   
});

corporate.addEventListener('input',()=>{changeEvent(corporate)});
fName.addEventListener('input',function(){changeEvent(fName)});
lName.addEventListener('input',function(){changeEvent(lName)});
phone.addEventListener('input',function(){
    if(!(phone.validity.typeMismatch)){
        error = document.getElementById('error');
        error.textContent = "";
        phone.style.border = "inherit";
        phone.style.background = "inherit";
         }
         else{
             error.textContent = "This fIeld is required";
             phone.style.border = "2px solid red";
             phone.style.background = "#ffe4dc";
         }



});
account.addEventListener('input',function(){changeEvent(account)});
email.addEventListener('input',function(){changeEvent(email)});
//fName.addEventListener('input',function(){changeEvent(fName)});

function changeEvent(element){

        if(element.validity.valid){
       error = document.querySelector("#"+ CSS.escape(element.id) + "+ label.error");
         error.textContent = "";
        element.style.border = "inherit";
       element.style.background = "inherit";
        }
        else{
            error.textContent = "This fIeld is required";
            element.style.border = "2px solid red";
            element.style.background = "#ffe4dc";
        }


}

console.log(accountHidden);
