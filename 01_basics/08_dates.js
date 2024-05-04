// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()) // day of the week

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

// complete it 
/*Problem: The Time Traveler’s Diary

Imagine you’re a time traveler who has just landed in a different era. Your task is to create a diary 
entry using JavaScript that captures the date and time of your arrival, along with some interesting 
time-related calculations.

Task:

Record the current date and time of your “arrival”.
Calculate what day of the week it was exactly 50 years ago from today.
Find out how many days are left until the next leap year.
Determine the number of seconds that have passed since the beginning of the current year.
Create a countdown timer that shows the days, hours, minutes, and seconds until your next “time jump”, which is 
scheduled for New Year’s Eve at midnight.

Objective: Write a JavaScript program that performs these tasks, using Date methods like new Date(), getDay(), getFullYear(), 
and any other methods you find necessary. Use console.log to print the diary entries and calculations.*/