document.getElementById('depositBtn').addEventListener('click', function(){
    const dipositFild = document.getElementById('depositFild');
    const dipositValue = parseFloat(dipositFild.value);
    dipositFild.value = '';
    if(dipositValue < 0 || isNaN(dipositValue)){
        alert('Input Valid Number')
        return;
    }
    const dipositDispaly = document.getElementById('dipositDispaly');
    const dipositNum = dipositDispaly.innerText;
    const dipositpre = parseFloat(dipositNum);
    // console.log(dipositDispaly);
    const dipositValueNew = dipositValue + dipositpre;
    // console.log(dipositValueNew)
    dipositDispaly.innerText = dipositValueNew;

    const balance = document.getElementById('balance');
    const balanceStr = balance.innerText;
    const balanceValue = parseFloat(balanceStr);

    balance.innerText = balanceValue + dipositValue;
})

document.getElementById('withdrawBtn').addEventListener('click', function(){
    const withdrawFild = document.getElementById('withdrawFild');
    const withdrawValue = parseFloat(withdrawFild.value);
    withdrawFild.value = '';
    if(withdrawValue < 0 || isNaN(withdrawValue)){
        alert('Input Valid Number')
        return;
    }
    const withdrawDispaly = document.getElementById('withdrawDispaly');
    const withdrawNum = withdrawDispaly.innerText;
    const withdrawpre = parseFloat(withdrawNum);

    withdrawDispaly.innerText = withdrawpre + withdrawValue;

    const balance = document.getElementById('balance');
    const balanceStr = balance.innerText;
    const balanceValue = parseFloat(balanceStr);

    balance.innerText = balanceValue - withdrawValue;

})