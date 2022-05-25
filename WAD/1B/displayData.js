$(document).ready(function () { 
    getData(); 
    }); 

    function getData() { 
    let localStorageData = localStorage.getItem("formdata"); 
    let studentObj = JSON.parse(localStorageData); 
    console.log(studentObj); 
    
    $("#firstName").text(studentObj.fname); 
    $("#lastName").text(studentObj.lname); 
    $("#userName").text(studentObj.username); 
    $("#city").text(studentObj.city); 
    $("#state").text(studentObj.state); 
    $("#pincode").text(studentObj.pincode); 
    } 