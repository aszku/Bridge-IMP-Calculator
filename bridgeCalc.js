
let contractValue=1;
let contractColor="♣";
let handsPoints=20;
let tricksTaken=7;
let xKontra = 'Bez kontry';
let xPrzed = 'Przed partią';
let xIMP = 0;
console.log("A0 contractValue = " + contractValue);
console.log( "A0: contractValue = " + contractValue + " \\ contractColor = " + contractColor  + 
    " \\ handsPoints = " + handsPoints  + " \\ tricksTaken = " + tricksTaken + " \\ xPrzed = " + xPrzed + " \\ xKontra = " + xKontra) ;

function setupContractValue(choice) {
  contractValue=choice;
  document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + "p, (" + xPrzed + ") "
  // return contractValue;
 }

function setupContractColor(choice) {
  contractColor=choice;
  document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + "p, (" + xPrzed + ") "
  // return contractColor;
 }

function setupHandsPoints(choice) {
  handsPoints=choice;
  document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + "p, (" + xPrzed + ") "
  // return handsPoints;
 }

function setupTricksTaken(choice) {
  tricksTaken=choice;
  document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + "p, (" + xPrzed + ") "
  // return tricksTaken;
 }

/*

function startApp() {
  document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + xPrzed ;
  }


function calculationOutput(){
  var x = document.getElementById("s_Kontra");
  if (x.innerHTML == "Bez kontry") {
    xKontra = "";
  } else if (x.innerHTML == "Z kontrą") {
    xKontra = "x";
  } else {
    xKontra = "xx";
  } 
  
  var x = document.getElementById("s_Partia");
  if (x.innerHTML == "Przed partią") {
    xPrzed = "p (Przed) ";
  } else {
    xPrzed = "p (Po) ";
  } 
  IMP = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + xPrzed + ' => ' + 'value' + ' IMP';
  var x = document.getElementById("calculatedResult");
  x.innerHTML = IMP ;
 }

*/
















/*
function chooseThis(testCase) {
  var x = document.getElementById("chosenCase")
  x.innerHTML = testCase
  contractValue = testCase.substr(26,1)
  contractColor = testCase.substr(27,1)
    if (contractColor == "B") { contractColor = "BA" }
  handsPoints = testCase.substr(22,2)
  tricksTaken = testCase.substr(testCase.lastIndexOf(",")+1,2)
    if (tricksTaken.substr(-1,1) == ")") { tricksTaken = tricksTaken.substr(0,1) }
  xKontra = testCase.slice(testCase.indexOf(",",27)+2,testCase.indexOf(",",30)-1)
  xPrzed = testCase.substr(testCase.indexOf(",",30)+1,1)
    if (xPrzed == "T") { xPrzed = "Po partii" } else {xPrzed = "Przed partią" }
  toAddLog = " <br /> Data input: contractValue = " + contractValue + " \\ contractColor = " + contractColor  + 
    " \\ handsPoints = " + handsPoints  + " \\ tricksTaken = " + tricksTaken + " \\ xPrzed = " + xPrzed + " \\ xKontra = " + xKontra;
  y = document.getElementById("caseLog")
  y.innerHTML = '// //CaseLog// //' + toAddLog 
  calculateIMP(contractValue, contractColor, handsPoints, tricksTaken, xKontra, xPrzed)
}
*/


///////////////////////// below good, up is from wip 

function calculate_HowManyPointsRequired(handsPoints) {
  console.log("----in: How many points req")
  const TABLE1 =  ['20', 0, 0, '21', 50, 50, '22', 70, 70, '23', 110, 110, '24', 200, 290, '25', 300, 440, '26', 350, 520, '27', 400, 600, '28', 430, 630, '29', 460, 660, '30', 490, 690, '31', 600, 800, '32', 700, 1050, '33', 900, 1350, '34', 1000, 1500, '35', 1100, 1650, '36', 1200, 1800, '37', 1400, 2100, '38', 1400, 2100, '39', 1400, 2100, '40', 1400, 2100];
  var pointsForTableCalc = handsPoints ; 
  if (handsPoints < 20) {
    pointsForTableCalc = 40 - handsPoints;
	b_Opponents_Should_Play = true	;
	console.log(" b_Opponents_Should_Play = true, pointsForTableCalc = " + pointsForTableCalc);
  } else {
	console.log(" pointsForTableCalc = " + pointsForTableCalc);
  };
  // wyznaczenie pointsRequired w zaleznosci od po partii
  var i = 0
  pointsForTableCalc = pointsForTableCalc.toString() ; 
  pointsRequiredTableIndex  = 0 ;
  while (pointsForTableCalc !== TABLE1[i]) {
	i += 3
	pointsRequiredTableIndex = i ;
	console.log("pointsRequiredTableIndex = " + pointsRequiredTableIndex) ;
  } ;
  console.log("final pointsRequiredTableIndex = " + pointsRequiredTableIndex) ;
  if (xPrzed == "Przed partią") {
	pointsRequired = TABLE1[pointsRequiredTableIndex+1]
  } else {
	pointsRequired = TABLE1[pointsRequiredTableIndex+2]
  }
  console.log("pointsRequired = " + pointsRequired) ;
}


function calculate_PointsWIP_ugrane(contractValue,contractColor,xPrzed,tricksForCalc,xKontra) {
  console.log("----in: ugrane")
  pointsWIP = 0
  console.log("contractValue = " + contractValue + " \\ contractColor = " + contractColor + " \\ xPrzed = " + xPrzed + " \\ xKontra = " + xKontra)
  if (xKontra == "" || xKontra == "Bez kontry" ) {
	  if (contractColor == "♣" || contractColor == "♦") {  
	    pointsWIP += tricksForCalc * 20
		console.log("pointsWIP (trefl/karo) = " + pointsWIP)
  	    if (contractValue < 5) { 
		  pointsWIP += 50
		} else if (contractValue == 5) {
		  if (xPrzed == 'Przed partią') {
		    pointsWIP += 300
		  } else {
		    pointsWIP += 500
		  }
		} else if (contractValue == 6) {
		  if (xPrzed == 'Przed partią') {
		    pointsWIP += 300 + 500
		  } else {
		    pointsWIP += 500 + 750
		  }			
		} else { // contractValue == 7
		  if (xPrzed == 'Przed partią') {
		    pointsWIP += 300 + 1000
		  } else {
		    pointsWIP += 500 + 1500
		  }				
		}
	  } else if (contractColor == "♥" || contractColor == "♠") {
	    pointsWIP += tricksForCalc * 30
		console.log("pointsWIP (kier/pik) = " + pointsWIP)
	    if (contractValue < 4) { 		  
		  pointsWIP += 50
		} else if (contractValue <= 5) {
		  if (xPrzed == 'Przed partią') {
		    pointsWIP += 300
		  } else {
		    pointsWIP += 500
		  }
		} else if (contractValue == 6) {
		  if (xPrzed == 'Przed partią') {
		    pointsWIP += 300 + 500
		  } else {
		    pointsWIP += 500 + 750
		  }			
		} else { // contractValue == 7
		  if (xPrzed == 'Przed partią') {
		    pointsWIP += 300 + 1000
		  } else {
		    pointsWIP += 500 + 1500
		  }				
		}  
	  } else { // NT
	    pointsWIP += (tricksForCalc * 30) + 10
		console.log("pointsWIP (BA) = " + pointsWIP)
		if (contractValue < 3) { 
		  pointsWIP += 50
		} else if (contractValue <= 5) {
		  if (xPrzed == 'Przed partią') {
		    pointsWIP += 300
		  } else {
		    pointsWIP += 500
		  }
		} else if (contractValue == 6) {
		  if (xPrzed == 'Przed partią') {
		    pointsWIP += 300 + 500
		  } else {
		    pointsWIP += 500 + 750
		  }			
		
		} else { // contractValue == 7
		  if (xPrzed == 'Przed partią') {
		    pointsWIP += 300 + 1000
		  } else {
		    pointsWIP += 500 + 1500
		  }				
		}	  
	  }
  } else { 
    var liczbaNadrobek = tricksForCalc - contractValue
	var liczbaZadeklarowanych = contractValue
	var pointsFromOvertricks = 0
	console.log("liczbaNadrobek = " + liczbaNadrobek + "\\ liczbaZadeklarowanych = " + liczbaZadeklarowanych)
	if (xPrzed == 'Przed partią' || xPrzed == 'Invulnerable') {
      pointsFromOvertricks = liczbaNadrobek * 100
	} else {
	  pointsFromOvertricks = liczbaNadrobek * 200
	}

	if (xKontra == "x" || xKontra == "Z kontrą") {
	  console.log("pointsFromOvertricks (when Kontra) = " + pointsFromOvertricks)
	  if (contractColor == "♣" || contractColor == "♦") {
		  pointsWIP = liczbaZadeklarowanych * 20 * 2
		} else if (contractColor == "♥" || contractColor == "♠") {
		  pointsWIP = liczbaZadeklarowanych * 30 * 2
		} else { // BA
		  pointsWIP = (liczbaZadeklarowanych * 30 + 10 )* 2
		}
	
	} else { // xKontra == "xx"
		pointsFromOvertricks *= 2
		console.log("pointsFromOvertricks (when ReKontra) = " + pointsFromOvertricks)
		if (contractColor == "♣" || contractColor == "♦") {
		  pointsWIP = liczbaZadeklarowanych * 20 * 4
		} else if (contractColor == "♥" || contractColor == "♠") {
		  pointsWIP = liczbaZadeklarowanych * 30 * 4
		} else { // BA
		  pointsWIP = ( liczbaZadeklarowanych * 30 + 10 ) * 4 
	    }
	}
	console.log("pointsWIP (x/xx wip1) = " + pointsWIP)
	if (pointsWIP < 100) {
	  pointsWIP += 50
	} else {  
	  if (xPrzed == 'Przed partią'  || xPrzed == 'Invulnerable') {
	    pointsWIP += 300
	  } else {
	    pointsWIP += 500
	  }
	}
	console.log("pointsWIP (x/xx wip2) = " + pointsWIP)
	if ( contractValue == 6) {
		if (xPrzed == 'Przed partią'  || xPrzed == 'p (Przed)') {
		  pointsWIP += 500
		} else {
		  pointsWIP += 750
		}	  
	}
	if ( contractValue == 7) {
		if (xPrzed == 'Przed partią'  || xPrzed == 'Invulnerable') {
		  pointsWIP += 1000
		} else {
		  pointsWIP += 1500
		}	  	  
	}
	pointsWIP += pointsFromOvertricks
	console.log("pointsWIP (x/xx wip3) = " + pointsWIP)
	// czas na premie za nieudana kontre/rekontre:
	if (xKontra == "x" || xKontra == "Z kontrą") {
	    pointsWIP += 50
	} else if (xKontra == "xx" || xKontra == "Z rekontrą") {
	    pointsWIP += 100
	}	
	
  }
  console.log("final pointsWIP = " + pointsWIP)

}

function calculate_PointsWIP_nieugrane(contractValue,contractColor,xPrzed,tricksForCalc,xKontra) {
  console.log("----in: nieugrane")
  pointsWIP = 0
  var ileWpadek = contractValue - tricksForCalc
  console.log("contractValue = " + contractValue + " \\ contractColor = " + contractColor + " \\ xPrzed = " + xPrzed + " \\ ileWpadek = " + ileWpadek +  " \\ xKontra = " + xKontra)
  if (xKontra == "" || xKontra == "Bez kontry" ) {
    if (xPrzed == "Przed partią"  || xPrzed == 'Invulnerable') {
      pointsWIP -= 50 * ileWpadek
	} else {
	  pointsWIP -= 100 * ileWpadek
	}
	console.log("pointsWIP za wpadki (when no kontra) = " + pointsWIP)
  } else if (xKontra == "x" || xKontra == "Z kontrą") {
	  if (xPrzed == "Przed partią"  || xPrzed == 'Invulnerable') {
	    pointsWIP -= 100 + 200 * Math.min((ileWpadek-1),2) + 300*(Math.max(ileWpadek-3,0))
	  } else {
	    pointsWIP -= (200 + 300 * (ileWpadek-1))
	  }	
	  console.log("pointsWIP za wpadki (when Kontra) = " + pointsWIP)
  } else { // z rekontra
	  if (xPrzed == "Przed partią"  || xPrzed == 'Invulnerable') {
	    pointsWIP -= 200 + 400 * Math.min((ileWpadek-1),2) + 600*(Math.max(ileWpadek-3,0))
	  } else {
	    pointsWIP -= (400 + 600 * (ileWpadek-1))	
	  }
	  console.log("pointsWIP za wpadki (when ReKontra) = " + pointsWIP)
  }
}
  
function calculateIMP(contractValue,contractColor,handsPoints,tricksTaken,xKontra,xPrzed) {
  console.log("A");
  b_Opponents_Should_Play = false 
  b_IMP_For_Opponents = false
  tricksForCalc = tricksTaken - 6
  const TABLE2 =  [10, 40, 80, 120, 160, 210, 260, 310, 360, 420, 490, 590, 740, 890, 1090, 1290, 1490, 1740, 1990, 2240, 2490, 2990, 3490, 3990, 100000];

  
  console.log( " Calculation started: contractValue = " + contractValue + " \\ contractColor = " + contractColor  + 
    " \\ handsPoints = " + handsPoints  + " \\ tricksTaken = " + tricksTaken + " \\ xPrzed = " + xPrzed + " \\ xKontra = " + xKontra) ;

  console.log( " tricksForCalc = " + tricksForCalc ) ;
  
  calculate_HowManyPointsRequired(handsPoints)
  
  czyUgrano = (tricksForCalc - contractValue >= 0);
  console.log( " czyUgrano = " + czyUgrano );

  
  if (czyUgrano) {
    calculate_PointsWIP_ugrane(contractValue,contractColor,xPrzed,tricksForCalc,xKontra)
  } else {
    calculate_PointsWIP_nieugrane(contractValue,contractColor,xPrzed,tricksForCalc,xKontra)
  }
  
  console.log("----po: ugrane/nieugrane");
  
  if (b_Opponents_Should_Play) {
    resultPoints = pointsWIP + pointsRequired
  } else {
	resultPoints = pointsWIP - pointsRequired
  }
  console.log("---- resultPoints = " + resultPoints);
  
  if  (resultPoints < 0) {
    resultPoints = - resultPoints
	b_IMP_For_Opponents = true
  }
  
  // teraz petelka po tabeli2
  i = 0
  while (resultPoints > TABLE2[i]) {	  
	  console.log("koncowa tabela, i przed update = ", i);
	  i += 1
  }
  xIMP = i
  console.log("xIMP tuz po tabeli = ", xIMP);
  if (b_IMP_For_Opponents) {
    xIMP = - xIMP
  }

  xEnd = document.getElementById("calculatedResult")
  xEnd.innerHTML = xEnd.innerHTML + "=> " + xIMP + " IMP"
  
  

  
  /*
  */
  
}
/*
*/


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myDropdownFunction(obj) {
  obj.nextElementSibling.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function toggleDouble() {
  var x = document.getElementById("s_Kontra");
  if (x.innerHTML == "Bez kontry") {
    x.innerHTML = "Z kontrą";
	xKontra = "x";
	document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + "p, (" + xPrzed + ") "
  } else if (x.innerHTML == "Z kontrą") {
    x.innerHTML = "Z rekontrą";
	xKontra = "xx";
	document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + "p, (" + xPrzed + ") "
  } else {
    x.innerHTML = "Bez kontry";
	xKontra = "";
	document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + "p, (" + xPrzed + ") "
  }
}

function toggleVulnerable() {
  var x = document.getElementById("s_Partia");
  if (x.innerHTML == "Przed partią") {
    x.innerHTML = "Po partii";
	xPrzed = "Po partii";
	document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + "p, (" + xPrzed + ") "
  } else {
    x.innerHTML = "Przed partią";
	xPrzed = "Przed partią";
	document.getElementById("calculatedResult").innerHTML = contractValue + contractColor + xKontra + ", t = " + tricksTaken + ", " + handsPoints + "p, (" + xPrzed + ") "
  }
}