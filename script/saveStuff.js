var questions = "";
var worksheets = [];
var qPad = "     ";
var coefPad = "  "; // negative sign and decimal
var conPad = "  "; // negative sign and decimal
var d = 1;
var dv = d;

function padL(padd, stri) {
    return (padd + stri).slice(0-padd.length);
  }

function saveTextAsFile() {
	sets = document.getElementById("Nsets").value;
	d = document.getElementById("setN").value;
	worksheets = [];
	answers = [];
	dv = d;
	nQ = document.getElementById("nQuest").value;
	maxCoeff = document.getElementById("coeff").value;
	maxAns = document.getElementById("cons").value;
	sigDigs = document.getElementById("sigDig").value;
	coefPad = "  "; // negative sign and decimal
	conPad = "  "; // negative sign and decimal
	for (i = 1; i<(maxCoeff*11); i*=10) { 
		coefPad += " "; // digits before decimal
	}
	for (i = 1; i<(maxCoeff*maxAns*101); i*=10) {
		conPad += " "; // digits before decimal
	}
	// digits after decimal
	for (i = 1; i<sigDigs; i++) { 
		coefPad += " ";
		conPad += "  ";
	}
	for (var seti = d; i < sets + 1; seti++) {
		worksheet = [];
		answers += "Answers for Classtris System of Linear Equations Set " + seti + "\n\n";
		
		for (var i = 0; i < nQ; i++) {
			a1 = Math.round(Math.random()*maxCoeff* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);
			b1 =  Math.round(Math.random()*maxCoeff* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);
			a2 =  Math.round(Math.random()*maxCoeff* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);
			b2 =  Math.round(Math.random()*maxCoeff* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);	
			x =   Math.round(Math.random()*maxAns* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);
			y =   Math.round(Math.random()*maxAns* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);
			if (Math.random() > .5) {
				a1 = 0-a1;
			}
			if (Math.random() > .5) {
				a2 = 0-a2;
			}
			if (Math.random() > .5) {
				x = 0-x;
			}
			if (Math.random() > .5) {
				y = 0-y;
			}
			if (Math.random() > .5) {
				sign1 = '+';
				c1 = Math.round((a1*x + b1*y)*Math.pow(10,sigDigs))/ Math.pow(10,sigDigs*2);
			} else {
				sign1 = '-';
				c1 = Math.round((a1*x + b1*y)*Math.pow(10,sigDigs))/ Math.pow(10,sigDigs*2);
			}
			if (Math.random() > .5) {
				sign2 = '+';
				c2 = Math.round((a2*x + b2*y)*Math.pow(10,sigDigs))/ Math.pow(10,sigDigs*2);
			} else {
				sign2 = '-';
				c2 = Math.round((a2*x - b2*y)*Math.pow(10,sigDigs*2))/ Math.pow(10,sigDigs*2);
			}
			questions += (i+1) + ") " + a1.toString() + "x " + sign1 + " " + b1.toString() + "y = " + c1.toString();
			questions += "<br>&#160;&#160;&#160;&#160;" + a2.toString() + "x" + " " + sign2 + " " + b2.toString() + "y = " + c2.toString()+ '\n';
			//answers += a1.toString() + "x " + sign1 + " " + b1.toString() + "y = " + c1.toString();
			//answers += "\n" + a2.toString() + "x " + sign2 + " " + b2.toString() + "y = " + c2.toString() + '\n';
			answers += (i+1) + ". (" + x.toString() + ", " + y.toString() + ")\n\n";

			a1s = padL(coefPad, a1.toString());
			a2s = padL(coefPad, a2.toString());
			b1s = padL(coefPad, b1.toString());
			b2s = padL(coefPad, b2.toString());
			c1s = padL(conPad, c1.toString());
			c2s = padL(conPad, c2.toString());

			wsi = [a1s,b1s,c1s,sign1,a2s,b2s,c2s,sign2];
			worksheet.push(wsi);
			d = d + 1;
			document.getElementById("setN").value = parseInt(d);
			worsheets.push(worksheet);
	    }
		  
     }

    var textToSave = questions;
    var fileNameToSaveAs = "classtrisSysLinEq" + dv + ".txt";    
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}

function saveAnswersAsFile() {	
	var textToSave = answers;
	var fileNameToSaveAs = "SysLinEqAns" + dv + ".txt";
	var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}

function saveWorksheetAsFile() {
	var textToSave = ""'
	for (ws = 0; ws < worksheets.length; ws++) {
	
		textToSave += "Name:_________________________________________. Period ______ \n\n";
		textToSave += "System of Linear Equations Worksheet " + ws + " \n\n";
		textToSave += "Show work and answers on a separate  sheet of paper.\n";
		if (sigDigs == 0) {
			textToSave += "Round answers to whole number values.\n\n";
		}else if (sigDigs == 1) {
			textToSave += "Round answers to 1 decimal place.\n\n";
		} else if (sigDigs > 1) {
			textToSave += "Round answers to " + sigDigs + " decimal places.\n\n";
		}
		if (sigDigs < 3) {
			for (i = 0; i < worksheets[ws].length; i += 2) {
				var qu1 = i+1
				var qu2 = i+2
				var qn1 = qu1.toString() + ") ";
				var qn2 = qu2.toString() + ") ";
				var Qn1 = padL(qPad, qn1);
				var Qn2 = padL(qPad, qn2);
				textToSave += Qn1 + worksheets[ws][i][0] + "x " + worksheets[ws][i][3] + " " + worksheets[ws][i][1] + "y = " + worksheets[ws][i][2];
				textToSave += "         " + Qn2 + worksheets[ws][i+1][0] + "x " + worksheets[ws][i+1][3] + " " + worksheets[ws][i+1][1] + "y = " + worksheets[ws][i+1][2];
				textToSave += "\n" + qPad + worksheets[ws][i][4] + "x " + worksheets[ws][i][7] + " " + worksheets[ws][i][5] + "y = " + worksheets[ws][i][6];
				textToSave += "         " + qPad + worksheets[ws][i+1][4] + "x " + worksheets[ws][i+1][7] + " " + worksheets[ws][i+1][5] + "y = " + worksheets[ws][i+1][6] + "\n\n";		
							if (worksheets[ws].length <= 10) {
					textToSave += "\n\n\n\n\n\n";
				}
			}
		} else {
			for (i = 0; i < worksheets[ws].length; i += 1) {
				var qu1 = i+1
				var qn1 = qu1.toString() + ") ";
				var Qn1 = padL(qPad, qn1);
				textToSave += Qn1 + worksheets[ws][i][0] + "x " + worksheets[ws][i][3] + " " + worksheets[ws][i][1] + "y = " + worksheets[ws][i][2];
				textToSave += "\n" + qPad + worksheets[ws][i][4] + "x " + worksheets[ws][i][7] + " " + worksheets[ws][i][5] + "y = " + worksheets[ws][i][6] + "\n\n";
				if (worksheets[ws].length <= 10) {
					textToSave += "\n\n\n\n\n\n";
				}
			}

		}
	}
	var fileNameToSaveAs = "SysLinEqWS" + dv + ".txt";
	var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}


function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}
