$(document).ready(function(){
    $(".type").click(function(){
        if($("#expression").text()==0){
            $("#expression").text($(this).text());
        }
        else{
            $("#expression").text($("#expression").text()+$(this).text());
        }
    });

    $("#backspace").click(function(){
        var value = $("#expression").text();
        if(!(parseInt(parseFloat(value)) == 0 && value.length == 1)){
            $("#expression").text(value.slice(0, value.length-1));
        }
        if(value.length==1){
            $("#expression").text("0");
            $("#expression").css('color','orange');
        }
    });

    $("#allClear").click(function(){
        $("#expression").text("0");
        $("#expression").css('color','orange');
    });

    $("#result").click(function(){
        var ans = $("#expression").text();
        //console.log(ans);
        $("#expression").text(eval(ans));
        $("#expression").css('color','blue');
    });
});