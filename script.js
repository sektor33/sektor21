const regForm=document.querySelector("#registration-form");
const age=regForm.querySelector("#age");
const phone=regForm.querySelector("#phone");
const personalNumber = regForm.querySelector("#personal-number");
const email=regForm.querySelector("#email");
const password=regForm.querySelector("#password");

const successPopup=document.querySelector("#success-popup");
const closePopupBtn=document.querySelector("#close-popup");

closePopupBtn.addEventListener("click", () => {
    successPopup.classList.remove("show");
});

function setError(element, message) {
    element.closest(".form-group").classList.remove("success");
    element.closest(".form-group").classList.add("error");
    element.closest(".form-group").querySelector(".message").textContent = message;
}

function setSuccess(element, message) {
    element.closest(".form-group").classList.remove("error");
    element.closest(".form-group").classList.add("success");
    element.closest(".form-group").querySelector(".message").textContent = message;
}


function isAgeValid() {
    if(age.validity.valueMissing) {
        setError(age, "Age is required");
        return false;
    } else if(!age.validity.valid) {
        setError(age, "Age should be between 1 and 10");
        return false;
    } else{
        setSuccess(age, "Valid age");
        return true;
    }
}

function isPhoneValid() {
    const regex = /^\d{9}$/;
    if(phone.value.trim()==="") {
        setError(phone, "Phone number is required");
        return false;
    }else if(!regex.test(phone.value.trim())) {
        setError(phone, "Phone number must be 9 digits");
        return false;
    }else{
        setSuccess(phone, "Valid phone");
        return true;
    }
}

function isPersonalNumberValid() {
    const regex=/^\d{11}$/;
    if(personalNumber.value.trim()==="") {
        setError(personalNumber, "Personal number is required");
        return false;
    }else if(!regex.test(personalNumber.value.trim())) {
        setError(personalNumber, "Personal number must be 11 digits");
        return false;
    } else {
        setSuccess(personalNumber, "Valid personal number");
        return true;
    }
}

function isEmailValid() {
    if (email.value.trim()==="") {
        setError(email, "Email is required");
        return false;
    } else if (!email.validity.valid) {
        setError(email, "Enter a valid email address");
        return false;
    } else {
        setSuccess(email, "Valid email");
        return true;
    }
}

function isPasswordValid() {
    if (password.value.trim()==="") {
        setError(password, "Password is required");
        return false;
    } else if (password.value.trim().length < 6) {
        setError(password, "Password must be at least 6 characters");
        return false;
    } else {
        setSuccess(password, "Valid password");
        return true;
    }
}


regForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const validAge=isAgeValid();
    const validPhone=isPhoneValid();
    const validPersonalNumber=isPersonalNumberValid();
    const validEmail=isEmailValid();
    const validPassword = isPasswordValid();

    if (validAge && validPhone && validPersonalNumber && validEmail && validPassword) {
        console.log("Form submitted successfully!");
        successPopup.classList.add("show"); 
    }
});

age.addEventListener("input", isAgeValid);
phone.addEventListener("input", isPhoneValid);
personalNumber.addEventListener("input", isPersonalNumberValid);
email.addEventListener("input", isEmailValid);
password.addEventListener("input", isPasswordValid);