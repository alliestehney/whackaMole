var moles = document.getElementsByClassName("mole");

var mole1 = document.getElementById("1");
var mole2 = document.getElementById("two");
var mole3 = document.getElementById("3");
var mole4 = document.getElementById("4");
var mole5 = document.getElementById("5");
var mole6 = document.getElementById("6");
var mole7 = document.getElementById("7");
var mole8 = document.getElementById("8");
var mole9 = document.getElementById("9");
var mole10 = document.getElementById("10");
var mole11 = document.getElementById("11");
var mole12 = document.getElementById("12");
var mole13 = document.getElementById("13");
var mole14 = document.getElementById("14");
var mole15 = document.getElementById("15");
var mole16 = document.getElementById("16");
var mole17 = document.getElementById("17");
var mole18 = document.getElementById("18");
var mole19 = document.getElementById("19");
var mole20 = document.getElementById("20");

// NEW WAY //

var allMoles = [mole1, mole2, mole3, mole4, mole5, mole6, mole7, mole8, mole9, mole10, mole11, mole12, mole13, mole14, mole15, mole16, mole17, mole18, mole19, mole20];
var evenMoles = [];
var oddMoles = [];

console.log(allMoles);

for (var i=0; i<allMoles.length; i++) {

	if (i % 2 === 0) {
		oddMoles.push(allMoles[i]);
		allMoles[i].style.visibility = "hidden";
	
	} else {
		evenMoles.push(allMoles[i]);

	}
}

console.log(oddMoles);
console.log("***");
console.log(evenMoles);


allMoles.forEach( function(mole) {
	mole.onclick = function() {
		mole.style.visibility = "hidden";
	}
});