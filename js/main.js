const MALE_NAMES = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES = ["Akosa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
const DAY_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


// // get user input
//     // get user's birthday, 31,12,1900
//    // get user's gender, m, f
// // get user's Akan name

// var getUserInput =null
// function getUserInput()
    
// function convertStoI() {
//      var a = "1900";
//      var b = parseInt(a);
//      document.write("Integer value is" + b);
//      var d = parseInt("3 11 43");
//      document.write("</br>");

//      document.write('Integer value is ' + d);
// }

// // calculate day of birth
// var day = prompt("Enter your day:");
// var month = prompt("Enter your month:");
// var year = prompt("Enter your year:");
// var year = prompt("Enter your gender (m,f):");
// var century = year.slice (0, 2)


// // get user's Akan name
// function getAkanName(day, month, year, gender){
// var DayOfTheWeek = (((century/4) -2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + day) % 7
    
    
//     var indexOfDay = DAY_OF_THE_WEEK.indexOf(DayOfTheWeek);
//     var name = null
//     if (gender.toLocaleLowerCase().startsWith'm'){
//         name = MALE_NAMES[indexOfDay]
//     } else if (gender.toLocaleLowerCase().startsWith'f'){
//         name = FEMALE_NAMES[indexOfDay]
//     } else {
//         console.log("invalid gender!")
//     }
//       return name;
//     }
     
//     function getUserInput();
//     var userAkanName = getAkanName(day, month, year, gender)
    
    
//     console.log("yourNameis + userAkanName")
    
document.getElementById("submit").addEventListener("click",
function(){
const date =document.getElementById("date").value//2020-12-20
const gender = document.getElementById("gender").value
const day= new Date(date).getDay()

const dateOfWeek =DAY_OF_THE_WEEK[day]
let akanNAme
if(gender==="Male"){
akanNAme=MALE_NAMES[day]

}else{
    akanNAme=  FEMALE_NAMES[day]
}

alert(`Your Akan Name is ${akanNAme}, You Were Born on a ${dateOfWeek}`)


    })