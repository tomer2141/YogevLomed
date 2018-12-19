function init(){
    var GAME_TEMPLATE = document.getElementById("game-template");
    //Start
    var rows = 3;
    var cols = 3;

    for(var i = 0; i < rows; i++){
        var row = [];
        var rowElem = document.createElement("DIV");
        rowElem.classList.add("row");
        for(var j = 0; j < cols; j++){
            var cell = {row: i, col: j};
            rowElem.innerHTML += "<div class='cell'></div>";
        }
        GAME_TEMPLATE.appendChild(rowElem);
    }
}