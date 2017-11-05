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
// for (var i=0; i< evenMoles.length; i++) {
// 	evenMoles[i].onclick = function () {
// 		evenMoles[i].style.visibility = "hidden";
// 		oddMoles[i].style.visibility = "visible";
// 	}
// }


// var totalClicks = 0;

// 	mole1.onclick = function() {
// 		mole1.style.visibility = "hidden";
// 		// mole4.style.visibility = "visible";
// 		totalClicks++;
// 		//console.log(totalClicks);
// 	};

// 	mole3.onclick = function() {
// 		mole3.style.visibility = "hidden";
// 		// mole4.style.visibility = "visible";
// 		totalClicks++;
// 	};

// 	mole5.onclick = function() {
// 		mole5.style.visibility = "hidden";
// 		mole10.style.visibility = "visible"; // mole 10 pops up
// 		totalClicks++;
// 	};

// 	mole7.onclick = function() {
// 		mole7.style.visibility = "hidden";
// 		// mole4.style.visibility = "visible";
// 		totalClicks++;
// 	};

// 	mole9.onclick = function() {
// 		mole9.style.visibility = "hidden";
// 		// mole4.style.visibility = "visible";
// 		totalClicks++;
// 	};

// 	mole11.onclick = function() {
// 		mole11.style.visibility = "hidden";
// 		mole2.style.visibility = "visible"; // mole 2 pops up
// 		totalClicks++;
// 	};

// 	mole13.onclick = function() {
// 		mole13.style.visibility = "hidden";
// 		// mole4.style.visibility = "visible";
// 		totalClicks++;
// 	};

// 	mole15.onclick = function() {
// 		mole15.style.visibility = "hidden";
// 		// mole4.style.visibility = "visible";
// 		totalClicks++;
// 	};

// 	mole17.onclick = function() {
// 		mole17.style.visibility = "hidden";
// 		mole6.style.visibility = "visible"; // mole 6 pops up
// 		totalClicks++;
// 	};

// 	mole19.onclick = function() {
// 		mole19.style.visibility = "hidden";
// 		// mole4.style.visibility = "visible";
// 		totalClicks++;
// 	};
