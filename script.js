function insert(num){
  document.form.textview.value = document.form.textview.value + num
}

function equal(){
var expo = document.form.textview.value;
if(expo){
  document.form.textview.value = eval(expo)
}
}

function clean(){
document.form.textview.value = "";
}

function back(){
  var exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0,exp.length-1);
}