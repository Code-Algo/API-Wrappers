var iRandomNumber;
var iRollDice;
var i;

iRollDice = prompt("How Many Times Would You Like To Roll?", 5)


for(i=1; i<=iRollDice; i++){
iRandomNumber = Math.ceil(Math.random()*6);
document.writeln(iRandomNumber+"<br>");
}
document.writeln("----Done----");