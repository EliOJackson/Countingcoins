/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

let coinPurse =  {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,

};

function coinCounter (dollar) {
    // Initialize a JavaScript object to hold the coins
    dollar = dollar * 100;
    
    coinPurse.quarters = Math.floor(dollar / 25);
    coinPurse.dimes = Math.floor(dollar / 10);
    coinPurse.nickels = Math.floor(dollar / 5);
    coinPurse.pennies = Math.floor(dollar / 1); 
    
   
  
    return coinPurse;
  }
  
  console.log(coinCounter(1.17));