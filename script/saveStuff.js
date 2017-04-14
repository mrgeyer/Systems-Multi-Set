d = Date();
dv = d.valueOf();

function saveTextAsFile() {
	var nQ = document.getElementById("nQuest").value;
	var maxCoeff = document.getElementById("coeff").value;
	var maxAns = document.getElementById("cons").value;
	var sigDigs = document.getElementById("sigDig").value;
 	questions = [];
 	answers = [];
 	for (var i = 0; i < nQ; i++) {
		a1 = round(Math.random()*maxCoeff*pow(10,sigDigs))/pow(10,sigDigs);
		b1 = round(Math.random()*maxCoeff*pow(10,sigDigs))/pow(10,sigDigs);
		a2 = round(Math.random()*maxCoeff*pow(10,sigDigs))/pow(10,sigDigs);
		b2 = round(Math.random()*maxCoeff*pow(10,sigDigs))/pow(10,sigDigs);	
		x =  round(Math.random()*maxAns*pow(10,sigDigs))/pow(10,sigDigs);
		y =  round(Math.random()*maxAns*pow(10,sigDigs))/pow(10,sigDigs);
		if (Math.random() > .5) {
			a1 = 0-a1;
		}
		if (Math.random() > .5) {
			b1 = 0-b1;
		}
		if (Math.random() > .5) {
			x = 0-x;
		}
		if (Math.random() > .5) {
			y = 0-y;
		}
		if (Math.random() > .5) {
			sign1 = '+';
			c1 = a1*x + b1*y;
		} else {
			sign1 = '-';
			c1 = a1*x + b1*y;
		}
		if (Math.random() > .5) {
			sign2 = '+';
			c2 = a2*x + b2*y;
		} else {
			sign2 = '-';
			c2 = a2*x - b2*y;
		}
		questions[i] = a1 + "x " + sign1 + " " + b1 + "y = " + c1 + "<br>" + a2 + "x + " " + sign2 + " " + b2 + "y = " + c1;
		answers[i] = a1 + "x " + sign1 + " " + b1 + "y = " + c1 + "\n" + a2 + "x " + sign2 + " " + b2 + "y = " + c1 + "\n(" + x + ", " + y + ")\n\n";
	}

    var textToSave = questions.join("\n");
    var fileNameToSaveAs = "classtrisSystemLinearEquations" + dv + ".txt";    
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
	var textToSave = answers.join("\n");
	var fileNameToSaveAs = "classtrisSystemLinearEquationsAnswers" + dv + ".txt";
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
