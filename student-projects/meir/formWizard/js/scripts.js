function curPage(num) {
            
    let divLength = $(".mySec").length;

    for (let i=1; i <= divLength; i++){
        if(i == num) {
            $("#step_" + i).show(500);
            $(".bg" + i).css("background","#10386c");
            $(".ln" + i).css("border","2px solid #10386c");
        }else {
            $("#step_" + i).hide(500);
            $(".bg" + i).css("background","gray");
            $(".ln" + i).css("border","2px solid gray");
        }

    }
}