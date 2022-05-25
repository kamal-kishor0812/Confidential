$(document).ready(function() 
{ 
 $("#submit-btn").click(function(event) 
 { 
 var formdata = { 
 fname : $("#firstName").val(), 
 lname : $("#lastName").val(), 
 username : $("#username").val(), 
 city : $("#city").val(), 
 state : $("#state").val(), 
 pincode : $("#pincode").val(), 
 }; 
 storeDataToLocalStorage(formdata); 
 

 event.preventDefault(); 
 sendData(formdata); 
 
 window.location.href='displayData.html' 
 
 
 }) 
}) 
function storeDataToLocalStorage(formdata) 
 { 
 
 console.log(formdata); 
 if (!localStorage.getItem("formdata")) { 
 localStorage.setItem("formdata", JSON.stringify(formdata)); 
 } else { 
 localStorage.removeItem("formdata"); 
 localStorage.setItem("formdata", JSON.stringify(formdata)); 
 } 
 } 
 function sendData(formdata) { 
 console.log(formdata); 
 var studentData = JSON.stringify(formdata); 
 let xhr = new XMLHttpRequest(); 
 
 xhr.open("POST", "http://localhost:5501",true); 
 xhr.setRequestHeader("Content-Type", "application/json"); 
 xhr.send(studentData); 
 
 } 