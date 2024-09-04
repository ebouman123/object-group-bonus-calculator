// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// Creating a function to calculate an employee's annual bonus
// The loop should console log the results of each iteration

// function extractEmployee (employees){
//   for (let employee of employees){

//   }
// }



// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // console.log(`incoming employee`, employee)
  //   console.log(employee.name);
  //   console.log(employee.annualSalary)
// Declare the variables for the new object
let bonusPercentage = 0;
let totalCompensation = 0;
let totalBonus = 0;

 // testing how to get the length of string number
//  console.log((employee.employeeNumber).length);

 if(employee.annualSalary> 65000){
  bonusPercentage = -.01;
 } 
 if(employee.employeeNumber.length === 4){
  bonusPercentage += .05
 }
// Need to change strings to numbers
employee.annualSalary = Number(employee.annualSalary);
// calculate their bonus based on their rating 
  if (employee.reviewRating === 3){
    bonusPercentage += 0.04;
    totalCompensation = employee.annualSalary + (employee.annualSalary * bonusPercentage);
    totalBonus = (totalCompensation - employee.annualSalary).toFixed(0);
  } else if(employee.reviewRating === 4){
    bonusPercentage += 0.06;
    totalCompensation = employee.annualSalary + (employee.annualSalary * bonusPercentage);
    totalBonus = (totalCompensation - employee.annualSalary).toFixed(0);
  } else if(employee.reviewRating===5){
    bonusPercentage+= 0.1;
    totalCompensation = employee.annualSalary + (employee.annualSalary * bonusPercentage);
    totalBonus = (totalCompensation - employee.annualSalary).toFixed(0);

  }

  // setting limit for the bonus 
  if(bonusPercentage>.13 ){
    bonusPercentage= .13;
  } else if(bonusPercentage < 0){
    bonusPercentage = 0;
  }

 
  let bonusResults = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: Number(totalBonus)
  }
return bonusResults;
  // console.log(bonusResults);
  // return new object with bonus results

}

console.log(calculateIndividualEmployeeBonus(employees[0]));
console.log(calculateIndividualEmployeeBonus(employees[1]));
console.log(calculateIndividualEmployeeBonus(employees[2]));
console.log(calculateIndividualEmployeeBonus(employees[3]));
console.log(calculateIndividualEmployeeBonus(employees[4]));






// This function should calculate the bonuses of all employees in the array
function calculateAllEmployeeBonuses(employees){
  let results = [];
for(let employee of employees){
  let bonusPercentage = 0;
let totalCompensation = 0;
let totalBonus = 0;

 // testing how to get the length of string number
//  console.log((employee.employeeNumber).length);

 if(employee.annualSalary> 65000){
  bonusPercentage = -.01;
 } 
 if(employee.employeeNumber.length === 4){
  bonusPercentage += .05
 }
// Need to change strings to numbers
employee.annualSalary = Number(employee.annualSalary);
// calculate their bonus based on their rating 
  if (employee.reviewRating === 3){
    bonusPercentage += 0.04;
    totalCompensation = employee.annualSalary + (employee.annualSalary * bonusPercentage);
    totalBonus = (totalCompensation - employee.annualSalary).toFixed(0);
  } else if(employee.reviewRating === 4){
    bonusPercentage += 0.06;
    totalCompensation = employee.annualSalary + (employee.annualSalary * bonusPercentage);
    totalBonus = (totalCompensation - employee.annualSalary).toFixed(0);
  } else if(employee.reviewRating===5){
    bonusPercentage+= 0.1;
    totalCompensation = employee.annualSalary + (employee.annualSalary * bonusPercentage);
    totalBonus = (totalCompensation - employee.annualSalary).toFixed(0);

  }

  // setting limit for the bonus 
  if(bonusPercentage>.13 ){
    bonusPercentage= .13;
  } else if(bonusPercentage < 0){
    bonusPercentage = 0;
  }

 
  let bonusResults = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: Number(totalBonus)
  }

  results.push(bonusResults);

  
}
return results;
}

console.log(calculateAllEmployeeBonuses(employees));