//passed by value
var winner = "harry potter"

function changewinner(win) {
    win = "hari om"
}

console.log(winner)
changewinner(winner)
console.log("now the change winner is " + winner) //this will still print harry potter

//**************************
//passed by reffrence

var winners = ["harry", "ron"]

function changewinner(win) {
    win[0] = "hari"
    win[1] = "om"
}

console.log(winners)
changewinner(winners)
console.log("now the change winner is " + winners) //changed values are printed

