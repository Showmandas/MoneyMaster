const calculate=document.getElementById('calculate');
const savebtn=document.getElementById('savebtn');
calculate.addEventListener('click',function(){
    let income=parseFloat(document.getElementById('income').value);
    let food=parseFloat(document.getElementById('food').value);
let rent=parseFloat(document.getElementById('rent').value);
let clothes=parseFloat(document.getElementById('clothes').value);

   if(document.getElementById('income').value == '' || document.getElementById('food').value == '' || document.getElementById('rent').value == '' || document.getElementById('clothes').value == ''){
    alert('Pls fill up all fields');
   }
   else{
    let totalExpenseStr=food+rent+clothes;
    document.getElementById('expense').innerText=totalExpenseStr;
    let totalExpense=parseFloat(totalExpenseStr);
    let balanceStr=income-totalExpense;
    document.getElementById('balance').innerText=balanceStr;
   }

})


// saving amount 
savebtn.addEventListener('click',function(){
    let save=parseFloat(document.getElementById('save').value);
    let income=parseFloat(document.getElementById('income').value);

    let savePercent=save / 100;
    let savingStr=income * savePercent;
    // console.log(savingStr);
    document.getElementById('savingAmount').innerText=savingStr;
    

    // remaining amount 
    let balanceString=document.getElementById('balance').innerText;
    let balance=parseFloat(balanceString);
    // console.log(balance)
    let saving=parseFloat(savingStr);
    // console.log(saving)
    let remainAmount=balance-saving;
    document.getElementById('remainAmount').innerText=remainAmount;

})