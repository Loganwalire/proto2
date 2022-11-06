let Answer =document.getElementById("answer");
function display(num){
    Answer.value += num;
}
function calculate(){
try{
    Answer.value = eval(Answer.value);
}
catch(err){
    alert(invalid);
}
}
function allclear(){
    Answer.value ="";
}
function del(){
    Answer.value = Answer.value.slice(0,-1);
}
function square(num){
    Answer.value = Answer.value**2;
}