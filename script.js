
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
  }
} 
getSavedValue(v); 

// have user input from local storage loaded and appended to the document 

document.addEventListener('DOMContentLoaded', ()=> {

  // var hrlist = document.getElementsByClassName('row').getSavedValue('hour-1'); 
  //   for (var i = 0; i <hrlist.length; i ++) {
  //   console.log('hrlist', hrlist[i]);
  //   }
  

var hr1 = getSavedValue('hour-1'); 
console.log("Hour1", hr1); 
$('#hour-1 > textarea').val(hr1); 

var hr2 = getSavedValue('hour-2'); 
console.log("Hour2", hr2); 
$('#hour-2 > textarea').val(hr2); 

var hr3 = getSavedValue('hour-3'); 
console.log("Hour3", hr3); 
$('#hour-3 > textarea').val(hr3); 

var hr4 = getSavedValue('hour-4'); 
console.log("Hour4", hr4); 
$('#hour-4 > textarea').val(hr4); 

var hr5 = getSavedValue('hour-5'); 
console.log("Hour5", hr5); 
$('#hour-5 > textarea').val(hr5); 

var hr6 = getSavedValue('hour-6'); 
console.log("Hour6", hr6); 
$('#hour-6 > textarea').val(hr6); 

var hr7 = getSavedValue('hour-7'); 
console.log("Hour7", hr7); 
$('#hour-7 > textarea').val(hr7); 

var hr8 = getSavedValue('hour-8'); 
console.log("Hour8", hr8); 
$('#hour-8 > textarea').val(hr8); 

var hr9 = getSavedValue('hour-9'); 
console.log("Hour9", hr9); 
$('#hour-9 > textarea').val(hr9); 

});