doc = document.body;

var table = document.createElement("table");
var head = document.createElement("thead");
var body = document.createElement("tbody");
var elems = [];
var currentr = 1;
var currentc = 1;

head.appendChild(document.createElement("tr"));
table.appendChild(head);
table.appendChild(body);
table.style.border = "1px solid";

for(var i = 1; i < 5; i++)
{
    var row = document.createElement("th");
    row.textContent = "Header " + i.toString(10);
    row.style.border = "1px solid";
    head.appendChild(row);
}

for(var i = 1; i < 4; i++)
{
    var row = document.createElement("tr");
    var rows = [];
    for(var j = 1; j < 5; j++)
    {
        var cell = document.createElement("td");
        cell.textContent = j + ", " + i;
        cell.style.border = "1px solid";
        row.appendChild(cell);
        rows.push(cell);
    }
    body.appendChild(row);
    elems.push(rows);
}

function move(row, col) {
    if(row > 3 || col > 4 || row < 1 || col < 1)
        return;

    elems[currentr - 1][currentc - 1].style.border = "1px solid";
    elems[row - 1][col - 1].style.border = "3px solid";
    currentr = row;
    currentc = col;
};

function appendButton(name, action)
{
    var button = document.createElement("button");
    button.textContent = name;
    button.style.margin = "5px";
    doc.appendChild(button);
    button.addEventListener("click", action);
}

function up() { 
    move(currentr - 1, currentc);
};

function down() { 
    move(currentr + 1, currentc);
};

function left() {
        move(currentr, currentc - 1);
};

function right() { 
    move(currentr, currentc + 1);
};

function mark() {
    elems[currentr - 1][currentc - 1].style.background = "yellow";
}

document.body.appendChild(table);
move(1, 1);
appendButton("up", up);
appendButton("down", down);
appendButton("left", left);
appendButton("right", right);
appendButton("Mark Cell", mark);
