
var Age_of_customer = prompt("how old are you? we have prize for the lucky number");
var number_of_thing = prompt("how many thing you want to buy ?")

function shopping(){
    while (isNaN(number_of_thing)  || Age_of_customer == '' ){
        var Age_of_customer = prompt("how old are you? we have prize for the lucky number");
        number_of_thing += 1 ;
}
    for( var i=0; i<number_of_thing;i=i+1){
        document.write('<img src="'+'images/hotel.png' +'"/>');
   }
}


shopping()




