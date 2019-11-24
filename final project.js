$(document).ready(function(){


});

function test1 (obj) {
  if (obj.value == "Please enter your RPI ID") {
      obj.value = "";
   }
}
function test2 (obj) {
  if (obj.value == "") {
      obj.value = "Please enter your RPI ID";
   }
}
function test5 (obj) {
  if (obj.value == "I have some comments...(optional)") {
      obj.value = ""
   }
}
function test6 (obj) {
  if (obj.value == "") {
      obj.value = "I have some comments...(optional)";
   }
}
function test7 (obj) {
  if (obj.value == "Please enter the location you want to report here") {
      obj.value = "";
   }
}
function test8 (obj) {
  if (obj.value == "") {
      obj.value = "Please enter the location you want to report here";
   }
}
function validate(formObj){
  if (formObj.ID.value == "Please enter your RPI ID") {
     alert("Please enter your RPI ID");
     formObj.ID.focus();
     return false;
  }
  if (formObj.loc.value == "Please enter the location you want to report here"){
    alert("Please enter the location you want to report");
    formObj.loc.focus();
    return false;
}
alert("submitted successfully!")
return true;
}
