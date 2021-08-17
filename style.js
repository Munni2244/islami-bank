document.getElementById('submit-button').addEventListener('click', function(){
    const emailField= document.getElementById('email-text');
    const  userEmail = emailField.value;

    const passwordField = document.getElementById('password-text');
    const useerPassword = passwordField.value;

    // condition////

    if(userEmail== 'maria123@gmail.com' && useerPassword == 'secret'){
        window.location.href ='bank.html'
    }
})

