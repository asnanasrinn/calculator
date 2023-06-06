var screen=document.getElementById('screen');

function btnclick(value){
    screen.value+=value;
}
function clearscreen(){
    // console.log("clear");
    screen.value="";
}
function findresult(){
    var result=eval(screen.value);
    screen.value=result;
}