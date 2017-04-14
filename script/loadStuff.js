d = Date();
dv = d.valueOf();
var log = d;
function saveTextAsFile()
{	var nQ = document.getElementById("nQuest").value;
	var maxCoeff = document.getElementById("coeff").value;
	var maxAns = document.getElementById("cons").value;
	var sigDigs = 	var maxCoeff = document.getElementById("sigDig").value;
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
			a1 = a1*-1;
		}
		if (Math.random() > .5) {
			b1 = b1*-1;
		}
		if (Math.random() > .5) {
			x = x*-1;
		}
		if (Math.random() > .5) {
			y = y*-1;
		}
		if (Math.random() > .5) {
			sign1 = '+';
			c1 = a1*x + b1*y
		} else {
			sign1 = '-';
			c1 = a1*x + b1*y
		}
		if (Math.random() > .5) {
			sign2 = '+';
			c2 = a2*x + b2*y
		} else {
			sign2 = '-';
			c2 = a2*x - b2*y
		}
		questions[i] = a1 + "x + " + b1 + "y = " + c1 + "<br>" + a2 + "x + " + b2 + "y = " + c1;
		answers[i] = a1 + "x + " + b1 + "y = " + c1 + "\n" + a2 + "x + " + b2 + "y = " + c1 + "\n(" + x + ", " + y + ")\n\n";
	}
	var textToSave = questions.join("\n");
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = "classtrisSystemLinearEquations" + dv + ".txt";
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function saveAnswersAsFile() {	
	var textToSave = answers.join("\n");
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = "classtrisSystemLinearEquationsAnswers" + dv + ".txt";
	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}
