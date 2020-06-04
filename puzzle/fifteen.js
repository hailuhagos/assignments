
(function(){
    "use strict"
    $("#puzzlearea div").each(function (i, e) {
        let x = ((i % 4) * 100);
        let y = (Math.floor(i / 4) * 100);
        $(e).addClass("puzzlepiece");
        e.setAttribute("id", "square_" + ((i % 4)) + "_" + Math.floor(i / 4));
        $(e).css({ "left": x + "px", "top": y + "px", "backgroundImage": 'url("background.jpg")', "backgroundPosition": -x + 'px ' + (-y) + 'px' });
    });
    let x_empty = 3;
    let y_empty = 3;
    let x_Temp;
    let y_Temp;
    $("#puzzlearea div").click(checkMovablity);
    $("#puzzlearea div").hover(highlight);
    $("#shufflebutton").click(shuffle);
    function checkMovablity() {
        x_Temp = parseInt($(this).css("left")) / 100;
        y_Temp = parseInt($(this).css("top")) / 100;
        if (checkM(x_Temp, y_Temp)) {
            $(this).css({ "left": x_empty * 100 + "px", "top": y_empty * 100 + "px" });
            x_empty = x_Temp;
            y_empty = y_Temp;
        }
    }
    function highlight() {
        x_Temp = parseInt($(this).css("left")) / 100;
        y_Temp = parseInt($(this).css("top")) / 100;
        if (checkM(x_Temp, y_Temp)) {
            $(this).toggleClass("movablepiece");
        }
    }
     function shuffle() {
        for (let j = 0; j < 30; j++) {
            x_Temp =  Math.floor(Math.random() * 4);//Generate random number b/n 0 to 3 
            y_Temp = Math.floor(Math.random() * 4);
            if (checkM2(x_Temp, y_Temp)) {
                var str=getObject(x_Temp, y_Temp);
                $(("#"+str)).css({ "left": x_empty * 100 + "px", "top": y_empty * 100 + "px" });
                x_empty = x_Temp;
                y_empty = y_Temp;
            }
        };
    } 
    function checkM2(x,y){
        if ((x_empty-x) == 1 && y == y_empty || (y_empty-y) == 1 && x == x_empty) {
            return true;
        }  
    }
    function getObject(x1, y1) {
        return "square_" + x1 + "_" + y1;
    }
    function checkM(x2, y2) {
        if (Math.abs(x2 - x_empty) == 1 && y2 == y_empty || Math.abs(y2 - y_empty) == 1 && x2 == x_empty) {
            return true;
        }
    }
})();
