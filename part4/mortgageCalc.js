function mortgage() {
    
    let mAmount = document.getElementById("mAmount").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let payFreq = document.getElementById("payFreq").value;

    if(mAmount === "" || rate === "" || years === "")
    {
       alert("Please enter a value in the boxes")
    }   

    var iR = GetInterest(rate, payFreq);
    var totalNumPayments = years*GetPP(payFreq);
    var term = Math.pow((1+iR), totalNumPayments);


    var payment = GetMortgage(mAmount, iR, term);
    
    result(payment);
}

function GetInterest(interest, payFreq){
    var i = interest/100;
    var int = GetPP(payFreq);
    return i/int;
}

function GetPP(payFreq)
{
    // 52 weeks in a year
    if(payFreq == "month")
        return 12;
    else if(payFreq == "bi")
        return 52/2;
    else
        return 52;
}

function GetMortgage(mAmount, interest, term){
    return mAmount*((interest*term)/(term-1));
}

function result(pay)
{
    var payment = document.getElementById("payment");
    payment.textContent  = pay.toFixed(2);
}