

function shopping(){
    var number_of_thing = prompt("how many thing you want to buy ?");
    while (isNaN(number_of_thing)  || number_of_thing == '' ){
        var number_of_thing = prompt("how many thing you want to buy ?");
    
}
    for( var i=0; i<number_of_thing;i=i+1){
        document.write('<img src="'+'images/hotel.png' +'"/>');
   }
}


shopping()




