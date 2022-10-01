var table = document.getElementById("table");
var row = document.getElementById("rows");
var column = document.getElementById("columns");
var errorMessage = document.querySelector(".error-message");

function DisplayTable() {
    
    var rowValue = row.value;
    var columnValue = column.value;

    for(var rowCount = 0; rowCount<rowValue; rowCount++){
        var tr = document.createElement("tr");

        for(var columnCount = 0; columnCount<columnValue; columnCount++){
            var td = document.createElement("td");

            rowNumber = rowCount + 1;
            columnNumber = columnCount + 1; 

            var text = document.createTextNode(rowNumber + "." +columnNumber);

            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

document.getElementById("button").addEventListener("click", function() {

    if (row.classList.contains("invalid") || column.classList.contains("invalid")) {
        errorMessage.classList.add("active");
        return;
    }

    errorMessage.classList.remove("active");
    DisplayTable();

})

row.addEventListener("input", function(e) {
    var rowValue = e.target.value;
    if (!rowValue || isNaN(rowValue) || rowValue < 1) {
        row.classList.add("invalid");
    } 
    else {
        row.classList.remove("invalid");
    }
})

column.addEventListener("input", function(e) {
    var columnValue = e.target.value;
    if (!columnValue || isNaN(columnValue) || columnValue < 1) {
        column.classList.add("invalid");
    } 
    else {
        column.classList.remove("invalid");
    }
})
