
var Age_of_customer = prompt("how old are you? we have prize for the lucky number");
var Username_of_customer = prompt("whats your name");
function Information(Age, user) {
    if (Age > 18 && Age < 25) {
        greeting = ' Hi youn man :' + user;
    } else if (Age < 18) {
        greeting = ' Hi kid :' + user;
    } else if (Age > 25) {
        greeting = ' Hi man :' + user;
    }
    return greeting
}
function LuckyNumber() {
    var Age_of_customer = prompt("how old are you? we have prize for the lucky number");
    if (Age_of_customer == 33) {
        Result = ' its your lucky day, congratulation ' + Username_of_customer;
    } else {
        Result = ' Sorry , hrad luck ';
    }
    return Result    
}


document.write('<h3>' + Information(Age_of_customer, Username_of_customer) + LuckyNumber() + '</h3>');


