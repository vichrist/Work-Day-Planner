// Created a const varaible and assigned the moment function to pull in current date 
const todaysDate = moment(); 
console.log(" Date: "+ todaysDate.format('MM-DD-YYYY'));

// Manipulated the h2 tag 
$("#dateDisplay").text(todaysDate.format('MM-DD-YYYY'));
console.log($("#dateDisplay")); 
moment().format('MMMM Do YYYY, h:mm:ss a'); 

// Created variables for all ID elements 
var hourOne = document.querySelector('#hour-1'); 
var hourTwo = document.querySelector('#hour-2'); 
var hourThree = document.querySelector('#hour-3'); 
var hourFour = document.querySelector('#hour-4'); 
var hourFive = document.querySelector('#hour-5'); 
var hourSix = document.querySelector('#hour-6'); 
var hourSeven = document.querySelector('#hour-7'); 
var hourEight = document.querySelector('#hour-8'); 
var hourNine = document.querySelector('#hour-9'); 


// Created function click event holding the value and storing the value to local storage 
$(".saveBtn").click(function(event){
  event.preventDefault(); 
  console.log("I was clicked!"); 
  var value = $(this).siblings("textarea").val(); 
  console.log("value", value); 
  var time = $(this).parent().attr("id"); 
  console.log("time: ", time); 
  localStorage.setItem(time, value);   
}); 

v=""; 

function getSavedValue (v) {
  if (localStorage.getItem(v)) {
    return localStorage.getItem(v); 
    console.log(localStorage.getItem("hour-1")); 
  }
} 
getSavedValue(v); 

