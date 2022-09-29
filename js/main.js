const MALE_NAMES = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES = ["Akosa", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
const DAY_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// get user input
    // get user's birthday, 31,12,1800
   // get user's gender, m, f

// calculate day of birth
// get user's Akan name

var day = prompt ("Enter your day");
var month = prompt ("Enter your month");
var year = prompt ("Enter your year");
var gender = prompt ("Enter your gender (m/f):");
var century = year.slice (0, 2);


var DayOfTheWeek = (((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7
