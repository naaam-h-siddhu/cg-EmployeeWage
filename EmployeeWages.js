//uc01
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10)%2;
if(empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
    return;

} else{
    console.log("Employee is Present");
}
//uc02
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8;
const WAGE_PER_HOUR = 20;

function  getWorkingHours(empCheck) {
  switch(empCheck) {
      case IS_PART_TIME:
        return PART_TIME_HOUR
      case IS_FULL_TIME:
        return FULL_TIME_HOUR
      default:
        return 0;
  }
}

let empHrs = 0;
empCheck = Math.floor(Math.random()*10)%3;
empHrs  = getWorkingHours(empCheck);
{
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Emp Wage : "+empWage);

// uc 03

// const NUMBER_OF_WORKING_DAY = 2
// empHrs = 0
// for(let day = 0;day<NUMBER_OF_WORKING_DAY;day++){
//   let empCheck = Math.floor(Math.random()*10)%3;
//   empHrs += getWorkingHours(empCheck);

// }
// empWage = empHrs  * WAGE_PER_HOUR;
// console.log("Total hrs : "+empHrs+" Emp wages :"+empWage);
}
function calcDailyWage(empHrs){
  return empHrs * WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH = 160;
const NUMBER_OF_WORKING_DAY = 20
let totalEmpHrs =0
let totalWorkingDays = 0
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUMBER_OF_WORKING_DAY){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck)
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs))
    empDailyHrsMap.set(totalWorkingDays,empHrs)

  }

console.log(totalEmpHrs);
console.log(empDailyHrsMap)
console.log(empDailyWageMap)
function totalWages(totalWage,dailyWage){
  return totalWage + dailyWage
}
console.log("UC 8 - Emp Wage Map totalHrs:  "+
  Array.from(empDailyWageMap.values()).reduce(totalWages,0))
{
// let empWage = calcDailyWage(totalEmpHrs)
// console.log("UC06 - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+ " Emp Wage: "+empWage)
// console.log(empDailyWageArr)

// //UC 7A
// let totalEmployeeWage = 0;
// function sum(dailyWage){
//   totalEmployeeWage+=dailyWage
// }
// empDailyWageArr.forEach(sum);
// // console.log("UC7A -Total Days : "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+totalEmployeeWage);

// //UC 7B
// let dailyCntr = 0;

// function mapDayWithWage(dailyWage){
//   dailyCntr++;
//   return dailyCntr+" = "+dailyWage;
// }

// let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
// console.log("UC7B- Daily Wage Map");
// console.log(mapDayWithWageArr)

// //UC 7C

// function fulltimeWage(dailyWage){
//   return dailyWage.includes("160")
// }
// let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage)
// console.log("UC7C - Daily Wage Filter When Fulltime Wage Earned")
// console.log(fullDayWageArr)

// //UC 7D
// function findFulltimeWage(dailyWage){
//   return dailyWage.includes("160")
// }
// console.log("UC 7D - First time Fulltime wage was earned on Day: "+mapDayWithWageArr.find(fulltimeWage))

// // UC 7E
// function isAllFulltimeWage(dailyWage){
//   return dailyWage.includes("160")
// }
// console.log("UC 7E - Check All Element have Full Time Wage: "+
//   fullDayWageArr.every(isAllFulltimeWage))

// // UC 7F
// function isAnyPartTimeWage(dailyWage){
//   return dailyWage.includes("80")
// }
// console.log("UC 7F - Check If any Part Time WageL "+
//   mapDayWithWageArr.some(isAnyPartTimeWage)
// );

// // UC 7G
// function totalDaysWorked(numOfDays, dailyWage){
//   if(dailyWage > 0 ) return numOfDays+1;
//   return numOfDays
// }
// console.log("UC 7G - Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked,0))

}
//uc 9
const findTotal = (totalVal, dailyVal)=> (totalVal+ dailyVal)
let count = 0
let totalHours = Array.from(empDailyHrsMap.values ()).reduce(findTotal,0)
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage>0).reduce(findTotal,0)

console.log("UC09- Emp Wage with Arrow. : "+"Total hours : "+totalHours+"Total Wages: "+totalSalary)


let nonWorkingDays = new Array()
let partWorkingDays = new Array()
let fullWorkingDays = new Array()

empDailyHrsMap.forEach((value,key)=> {
  if(value === 8) fullWorkingDays.push(key)
  else if (value === 4) partWorkingDays.push(key)
    else nonWorkingDays.push(key)

})

console.log("Full working days: "+fullWorkingDays.toString())
console.log("Part Working days: "+partWorkingDays.toString())
console.log("no working days: "+nonWorkingDays.toString())