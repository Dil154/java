// javascript calling funcation for validations
function validate(){
var Loginid=document.getElementById("loginid").value;
var Password=document.getElementById("password").value;
var arr1=[];
var arr2=[];
var span1=document.getElementById("span1");
var span2=document.getElementById("span2");
if(Loginid=="")
{
    arr1.push("Please Enter Login Id");
    span1.innerHTML=arr1.join(",");
}
if(Password=="")
{
    arr2.push("Please Enter Password");
    span2.innerHTML=arr2.join(",");
}
else if(!/[A-Z]{1}[a-z-0-9-#-@-%]{8,15}$/.test(Password))
{
    arr2.push("Please Enter Correct Password");
    span2.innerHTML=arr2.join(",");
}
}