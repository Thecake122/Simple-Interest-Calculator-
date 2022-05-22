//Update Rate for slider.  
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Compute Rate, Years, Interest, Principal for the function compute button.

function compute(){

var principal=document.getElementById("principal").value;
var rate=document.getElementById("rate").value;
var years=document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
// Principal, result, rate, inner HTML Text for results. 
document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an interest of "+interest+",\<br\>in the year "+year+"\<br\>"
// Alert for Users on Browser if they entered a positive number. 
if(principal == undefined || principal <=0 )
   alert ("Enter a Positive Number");
   document.getElementById("principal").focus();return
   

}
