function insert(num)   
{  
documentdocument.form1.textview.value = document.form1.textview.value + num;  
}  
  
function equal()  
{  
var exp = document.form1.textview.value;  
if(exp)  
{  
document.form1.textview.value = eval(exp)  
}  
}  
  
function backspace()  
{  
var exp = document.form1.textview.value;  
document.form1.textview.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  