document.getElementById("loginBtn").addEventListener('click', function(){
    const emailid = document.getElementById("emailid").value;
    // console.log(emailid);
    const logPass = document.getElementById("logPass").value;
    // console.log(logPass);

    if(emailid === 'mdsadt2@gmail.com' && logPass === 'Shahadat'){
        window.location.href = './bank.html'
    }else{
        alert('input valid email')
    }
})