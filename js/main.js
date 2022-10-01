const MALE_NAMES = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES = ["Akosa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
const DAY_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var day = "null"
var month = "null"
var year = "null"
var gender ="null"
var century = "null"

// get user input
    // get user's birthday, 31,12,1900
   // get user's gender, m, f

// calculate day of birth
// get user's Akan name

var getUserInput =null
function getUserInput(){
var day = prompt ("Enter your day");
var month = prompt ("Enter your month");
var year = prompt ("Enter your year");
var gender = prompt ("Enter your gender (m/f):");
var century = year.slice(0,2);
}
    
function convertStoI() {
     var a = "1900";
     var b = parseInt(a);
     document.write("Integer value is" + b);
     var d = parseInt("3 11 43");
     document.write("</br>");

     document.write('Integer value is ' + d);
}


function getAkanName(day, month, year, gender){
var DayOfTheWeek = (((century/4) -2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + day) % 7
Sunday = (((19/4) -2*19-1) + ((5*1900/4)) + ((26*(12+1)/10)) + 31) % 7;
Monday = (((19/4) -2*19-1) + ((5*1900/4)) + ((26*(12+1)/10)) + 31) % 7;
Tuesday = (((19/4) -2*19-1) + ((5*1900/4)) + ((26*(12+1)/10)) + 31) % 7;
Wednesday = (((19/4) -2*19-1) + ((5*1900/4)) + ((26*(12+1)/10)) + 31) % 7;
Thursday = (((19/4) -2*19-1) + ((5*1900/4)) + ((26*(12+1)/10)) + 31) % 7;
Friday = (((19/4) -2*19-1) + ((5*1900/4)) + ((26*(12+1)/10)) + 31) % 7;
Saturday = (((19/4) -2*19-1) + ((5*1900/4)) + ((26*(12+1)/10)) + 31) % 7;

var indexOfDay = DAY_OF_THE_WEEK.indexOf(DayOfTheWeek);
var name = null
if (gender.toLocaleLowerCase().startsWith'm'){
    name = MALE_NAMES[indexOfDay]
} else if (gender.toLocaleLowerCase().startsWith'f'){
    name = FEMALE_NAMES[indexOfDay]
} else {
    console.log("invalid gender!")
}
  return name;
}
 
getUserInput();
var userAkanName = getAkanName(day, month, year, gender)
Kwasi = getAkanName(day, month, year, gender)
Kwadwo = getAkanName(day, month, year, gender)
Kwabena = getAkanName(day, month, year, gender)
Kwaku = getAkanName(day, month, year, gender)
Yaw = getAkanName(day, month, year, gender)
Kofi = getAkanName(day, month, year, gender)
Kwame = getAkanName(day, month, year, gender)
Akosa = getAkanName(day, month, year, gender)
Adwoa= getAkanName(day, month, year, gender)
Abenaa = getAkanName(day, month, year, gender)
Akua = getAkanName(day, month, year, gender)
Yaa = getAkanName(day, month, year, gender)
Afua = getAkanName(day, month, year, gender)
Ama = getAkanName(day, month, year, gender)

console.log("yourNameis + userAkanName")