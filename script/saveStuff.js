var questions = "";
var worksheet = [];
var qPad = "&#160;&#160;&#160;&#160;&#160;";
var coefPad = "&#160;&#160;"; // negative sign and decimal
var conPad = "&#160;&#160;"; // negative sign and decimal
var d = 1;
var dv = d;

function pad(padd, str, padLeft) {
  if (typeof str === 'undefined') {
    return padd;
  }
  if (padLeft) {
    return (padd + str).slice(0-padd.length);
  } else {
    return (str + padd).substring(0, padd.length);
  }
}


function saveTextAsFile() {
	d = document.getElementById("setN").value;
	dv = d;
	answers = "Answers for Classtris System of Linear Equations Set " + d + "\n\n";
	nQ = document.getElementById("nQuest").value;
	maxCoeff = document.getElementById("coeff").value;
	maxAns = document.getElementById("cons").value;
	sigDigs = document.getElementById("sigDig").value;

	for (i = 1; i<(maxCoeff*11); i*10) { // digits before decimal
		coefPad += "&#160;";
	}
	for (i = 1; i<(maxCoeff*maxAns*10); i*10) { // digits before decimal
		conPad += "&#160;";
	}
	for (i = 1; i<sigDigs; i++) { // digits after decimal
		coefPad += "&#160;";
		conPad += "&#160;&#160;";
	}
 	for (var i = 0; i < nQ; i++) {
		a1 =  Math.round(Math.random()*maxCoeff* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);
		b1 =  Math.round(Math.random()*maxCoeff* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);
		a2 =  Math.round(Math.random()*maxCoeff* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);
		b2 =  Math.round(Math.random()*maxCoeff* Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);	
		x =   Math.round(Math.random()*maxAns  * Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);
		y =   Math.round(Math.random()*maxAns  * Math.pow(10,sigDigs))/ Math.pow(10,sigDigs);

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
		qn = (i+1).toString() + ") ";
		Qn = pad(qPad, qn, true);
		a1s = pad(coefPad, a1.toString(), true);
		a2s = pad(coefPad, a2.toString(), true);
		b1s = pad(coefPad, b1.toString(), true);
		b2s = pad(coefPad, b2.toString(), true);
		c1s = pad(conPad, c1.toString(), true);
		c2s = pad(conPad, c2.toString(), true);
		questions += Qn + a1s + "x " + sign1 + " " + b1s + "y = " + c1s;
		questions += "<br>" + qPad + a2s + "x" + " " + sign2 + " " + b2s + "y = " + c2s + '\n';
		//answers += a1.toString() + "x " + sign1 + " " + b1.toString() + "y = " + c1.toString();
		//answers += "\n" + a2.toString() + "x " + sign2 + " " + b2.toString() + "y = " + c2.toString() + '\n';
		answers += (i+1) + ". (" + x.toString() + ", " + y.toString() + ")\n\n";
		wsi = [a1s,b1s,c1s,sign1,a2s,b2s,c2s,sign2];
		worksheet.push(wsi);
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
	var textToSave = "System of Linear Equations Worksheet " + d + " \n\n";
	for (i = 0; i < worksheet.length; i += 2) {
		var Qn1 = pad(qPad, (i+1) + ") ", true);
		var Qn2 = pad(qPad, (i+2) + ") ", true);
		textToSave += Qn1 + worksheet[i][0] + "x " + worksheet[i][3] + " " + worksheet[i][1] + "y = " + worksheet[i][2];
		textToSave += "         " + Qn2 + worksheet[i+1][0] + "x " + worksheet[i+1][3] + " " + worksheet[i+1][1] + "y = " + worksheet[i+1][2];
		textToSave += "\n" + qPad + worksheet[i][4] + "x " + worksheet[i][7] + " " + worksheet[i][5] + "y = " + worksheet[i][6];
		textToSave += "         " + qPad + worksheet[i+1][4] + "x " + worksheet[i+1][7] + " " + worksheet[i+1][5] + "y = " + worksheet[i+1][6] + "\n\n";		
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
