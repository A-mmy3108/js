 console.log ( 2 > 1);
 console.log ( 2 >= 1);
 console.log ( 2 < 1);
 console.log (2==1);
 console.log (2 != 1);

 console.log("2">1);
 console.log("02">1);

/*****************AVOID SUCH TYPE OF COMPARISONS , THEY CAUSE CONFUSION************************* */

 console.log( null > 0 );    
 console.log( null == 0 );  // In javascript the working of == is different in contrast to >,<, >=,<= 
 console.log (null >= 0) ; //  == does not convert the data types to number like null/ undefined whereas other operator do. 

console.log ( undefined == 0);
console.log (undefined > 0 );
console.log (undefined < 0 );

/************************************************************************************************* */

// === ( Strict check / triple check , it is also checks the data type along with the value ) 

console.log ("2"=== 2);