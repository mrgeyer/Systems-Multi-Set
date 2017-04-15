var questions = "";
var answers = "Answers for Classtris System of Linear Equations\n" + d + "\n\n";
var worksheet = [];

function saveTextAsFile() {
	d = document.getElementById("setN").value;
	dv = d;
	var nQ = document.getElementById("nQuest").value;
	var maxCoeff = document.getElementById("coeff").value;
	var maxAns = document.getElementById("cons").value;
	var sigDigs = document.getElementById("sigDig").value;
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
		questions += (i+1) + ". " + a1.toString() + "x " + sign1 + " " + b1.toString() + "y = " + c1.toString();
		questions += "<br>&#160;&#160;&#160;&#160;" + a2.toString() + "x" + " " + sign2 + " " + b2.toString() + "y = " + c2.toString()+ '\n';
		//answers += a1.toString() + "x " + sign1 + " " + b1.toString() + "y = " + c1.toString();
		//answers += "\n" + a2.toString() + "x " + sign2 + " " + b2.toString() + "y = " + c2.toString() + '\n';
		answers += (i+1) + ". (" + x.toString() + ", " + y.toString() + ")\n\n";
		wsi = [a1,b1,c1,sign1,a2,b2,c2,sign2];
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
		textToSave += (i+1) + ". " + worksheet[i][0] + "x " + worksheet[i][3] + " " + worksheet[i][1] + "y = " + worksheet[i][2];
		textToSave += "         " + (i+2) + ". " + worksheet[i+1][0] + "x " + worksheet[i+1][3] + " " + worksheet[i+1][1] + "y = " + worksheet[i+1][2];
		textToSave += "\n    " + worksheet[i][4] + "x " + worksheet[i][7] + " " + worksheet[i][5] + "y = " + worksheet[i][6];
		textToSave += "             " + worksheet[i+1][4] + "x " + worksheet[i+1][7] + " " + worksheet[i+1][5] + "y = " + worksheet[i+1][6] + "\n\n";		
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
