var count = 0;
$("#dec").prop('disabled',true);
function checkdisabled(){
    if(count>=10){
        $("#inc").prop('disabled',true);
    }
    else{
        $("#inc").prop('disabled',false);
    }
    if(count<=0){
        $("#dec").prop('disabled',true);
    }
    else{
        $("#dec").prop('disabled',false);
    }
}
function checkbg(){
    if(count%2==0){
        $("body").css("backgroundColor","skyblue");
        $("#counter").css("color","white");
    }
    else{
        $("body").css("backgroundColor","grey");
        $("#counter").css("color","red");
    }
}
$(document).ready(function(){
    $("#inc").click(function(){
        count++;        
        checkdisabled();
        checkbg();
        $("#counter").text(count);
    });
    $("#dec").click(function(){
        count--;
        checkdisabled();
        checkbg();
        $("#counter").text(count);
    });
    
    $("#reset").click(function(){
        count = 0;
        $("#dec").prop('disabled',true);
        checkbg();
        $("#counter").text(count);
    });
});