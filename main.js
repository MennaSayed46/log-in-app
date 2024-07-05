
var emailInput = document.getElementById('emailInput');
var password = document.getElementById('password');
var login = document.querySelector('.login');
var signUpAnchor = document.querySelector('#signUpAnchor');
var box = document.querySelector('.box');
var boxUp = document.querySelector('.boxUp');
var signInAnchor = document.querySelector('#signInAnchor');
var successLogIn = document.querySelector('.successLogIn');
var nameInput = document.getElementById('nameInput');
var emailSignUp = document.getElementById('emailSignUp');
var passwordSignUp = document.getElementById('passwordSignUp');
var signUpBtn = document.getElementById('signUpBtn');
var successSignUP = document.querySelector('.successSignUP');

var containerSignUp;


var containerLogIn = [];

if (localStorage.getItem('infoLogIn') != null) {
    containerLogIn = JSON.parse(localStorage.getItem('infoLogIn'));
} else {
    containerLogIn = [];
}

signUpAnchor.addEventListener('click', function (eventInfo) {

    box.classList.add('d-none');
    box.nextElementSibling.classList.remove('d-none');


});

signInAnchor.addEventListener('click', function (eventInfo) {
    box.nextElementSibling.classList.add('d-none');
    box.classList.remove('d-none')

});


login.addEventListener('click', function (eventInfo) {

    infoLogIn();

    if (emailInput.classList.contains('is-valid') && password.classList.contains('is-valid')) {
        if (password.value == '' || emailInput.value == '') {
            validationLogIn(emailInput);
            validationLogIn(password);
            password.nextElementSibling.classList.remove('d-none');

            setTimeout(clearLogIn, 250);
        }
        else {
            successLogIn.classList.remove('d-none')
            setTimeout(clearLogIn, 400);

        }

    }

    else if (password.value == '' || emailInput.value == '') {
        password.nextElementSibling.classList.remove('d-none');
        setTimeout(clearLogIn, 250);

    }



});

function clearLogIn() {
    emailInput.value = '';
    password.value = '';
    successLogIn.classList.add('d-none');
    password.nextElementSibling.classList.add('d-none');

}

function infoLogIn() {

    var personInfoLogIn = {
        email: emailInput.value,
        password: password.value
    };
    containerLogIn.push(personInfoLogIn);
    console.log(containerLogIn);
    localStorage.setItem('infoLogIn', JSON.stringify(containerLogIn));

}

emailInput.addEventListener('input', function (eventInfo) {
    validationLogIn(emailInput);
})
password.addEventListener('input', function (eventInfo) {
    validationLogIn(password);
})


function validationLogIn(element) {

    var regex = {
        emailInput: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
        password: /^[A-Z]?[A-Za-z0-9]{15,45}$/
    };
    if (regex[element.id].test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
    }
    else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    };

}


//SIGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGN UP


signUpAnchor.addEventListener('click', function (eventInfo) {
    box.classList.add('d-none');
    box.nextElementSibling.classList.remove('d-none');
    var nameInput = document.getElementById('nameInput');
    var emailSignUp = document.getElementById('emailSignUp');
    var passwordSignUp = document.getElementById('passwordSignUp');
    var signUpBtn = document.getElementById('signUpBtn');
    var successSignUP = document.querySelector('.successSignUP');

    var containerSignUp;

    if (localStorage.getItem('infoSignUP') != null) {
        containerSignUp = JSON.parse(localStorage.getItem('infoSignUP'));
    }
    else {
        containerSignUp = [];
    }


    function check (){
        for (var i=0 ; i < containerSignUp.length;i++){
            if(containerSignUp[i].email==emailSignUp.value){
               alert('the email is already exists');
            }
            else {
                alert('the email is new');
            }
        }
        

    }


    signUpBtn.addEventListener('click', function () {
        check();
        infoSignUp();
       
      
        if (emailSignUp.classList.contains('is-valid') && passwordSignUp.classList.contains('is-valid') && nameInput.classList.contains('is-valid')) {


        
            


            if (emailSignUp.value == '' || passwordSignUp.value == '' || nameInput.value == '') {
                validationSignUp(emailSignUp);
                validationSignUp(passwordSignUp);
                validationSignUp(nameInput);
                passwordSignUp.nextElementSibling.classList.remove('d-none');  // all inputs is required
                setTimeout(clearSignUp, 250);

          

            }
            else {
              
                successSignUP.classList.remove('d-none');
                setTimeout(clearSignUp, 400);
                
                
            }

        }

        else if (passwordSignUp.value == '' || emailSignUp.value == '' || nameInput.value == '') {
            passwordSignUp.nextElementSibling.classList.remove('d-none');
            setTimeout(clearLogIn, 250);
           

        }
        else if (passwordSignUp.value == ''  && emailSignUp.value == '' && nameInput.value == '') {
            successSignUP.classList.add('d-none');
            passwordSignUp.nextElementSibling.classList.remove('d-none');
            successSignUP.classList.add('d-none');
        

        }

    })
    function infoSignUp(){
        var x = nameInput.value;
        var y = passwordSignUp.value;
        var z = emailSignUp.value;
        var personSignUp = { x, y, z };
        containerSignUp.push(personSignUp);

        console.log(containerSignUp);
        localStorage.setItem('infoSignUP', JSON.stringify(containerSignUp));

    }
});




function clearSignUp() {
    nameInput.value = '';
    passwordSignUp.value = ''
    emailSignUp.value = '';
    passwordSignUp.nextElementSibling.classList.add('d-none');
    successSignUP.classList.add('d-none')

};

emailSignUp.addEventListener('input', function (eventInfo) {
    validationSignUp(emailSignUp);

})

passwordSignUp.addEventListener('input', function (eventInfo) {
    validationSignUp(passwordSignUp);

})

nameInput.addEventListener('input', function (eventInfo) {
    validationSignUp(nameInput);

})

function validationSignUp(elementSignUp) {

    var regexSignUp = {
        emailSignUp: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,
        passwordSignUp: /^[A-Z]?[A-Za-z0-9]{15,45}$/,
        nameInput: /[A-Za-z]+$/

    };

    if (regexSignUp[elementSignUp.id].test(elementSignUp.value)) {
        elementSignUp.classList.add('is-valid');
        elementSignUp.classList.remove('is-invalid');
    }

    else {
        elementSignUp.classList.add('is-invalid');
        elementSignUp.classList.remove('is-valid');
    }


}



