//Enter electricity unit and calculate amount to pay
// For first 50 units, Rs: 1/unit
// For next 100 units, 2/unit
// For next 100 units, 3/ units
// For units above 250, 4/units      
// For all bills above 150 units additional surcharge of 20%  of total bill amount is added.

                                  // assigment number 1

// function calculateElectricityBill(units) {
//     let totalAmount = 0;
  
//     if (units <= 50) {
//       totalAmount = units * 1;
//     } else if (units <= 150) {
//       totalAmount = 50 * 1 + (units - 50) * 2;
//     } else if (units <= 250) {
//       totalAmount = 50 * 1 + 100 * 2 + (units - 150) * 3;
//     } else {
//       totalAmount = 50 * 1 + 100 * 2 + 100 * 3 + (units - 250) * 4;
//     }
  
//     if (totalAmount > 150) {
//       totalAmount += 0.2 * totalAmount;
//     }
  
//     return totalAmount;
//   }
 
//   const units = 200; 
//   const amountToPay = calculateElectricityBill(units);
//   console.log(`Amount to pay for ${units} units: Rs ${amountToPay}`);

                           // assignment number 2
  
 const askyear = prompt("what is the year?");

  if ((askyear % 4 === 0 && askyear % 100 !== 0 ) || askyear % 400 === 0) {
   alert (askyear + " " + " is a leap year");

 } else {

  alert ( askyear + " " + " is not a leap year");
 }
