
var Age_of_customer = prompt("how old are you?");
var Username_of_customer = prompt("whats your name");
function Information(Age , user){
    if (Age > 18 && Age < 25) {
        greeting= 'Hi youn man :' + user;
    } else if (Age < 18) {
        greeting = ' Hi kid :' + user;
    } else if (hourNow > 25) {
        greeting = 'Hi man :' + user ;
    }
    return greeting    
    }
document.write( '<h3>' + Information(Age_of_customer,Username_of_customer) + '</h3>'); 


