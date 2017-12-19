var bodyElement = document.getElementsByTagName("body")[0];
var plantLogHeaderElement = document.getElementById("plantLogHeader");
var plantLogBackButtonElement = document.getElementById("plantLogBackButton");
var plantLogSettingsButtonElement = document.getElementById("plantLogSettingsButton");
var plantLogButtonsContainerElement = document.getElementById("plantLogButtonsContainer");
var plantLogAddButtonElement = document.getElementById("plantLogAddButton");

var appHeight = window.innerHeight;
var appWidth = appHeight*(9/16);

//Header
setDimensions(bodyElement, appHeight, appWidth);
setDimensions(plantLogHeaderElement, (appHeight*.08), appWidth);
setDimensions(plantLogBackButtonElement, (appHeight*.05), (appHeight*.05));
setDimensions(plantLogSettingsButtonElement, (appHeight*.05), (appHeight*.05));
setDimensions(plantLogAddButtonElement, (appWidth*.85)*(38/132), (appWidth*.85));

plantLogBackButtonElement.style.marginTop = (appHeight*.015)+"px";
plantLogBackButtonElement.style.marginLeft = plantLogBackButtonElement.style.marginTop;

plantLogSettingsButtonElement.style.right = (window.innerWidth- appWidth)/2+"px";
plantLogSettingsButtonElement.style.marginTop = (appHeight*.015)+"px";
plantLogSettingsButtonElement.style.marginRight = plantLogBackButtonElement.style.marginTop;

//Buttons
plantLogAddButtonElement.parentNode.style.marginTop = appHeight*.01+"px";
plantLogAddButtonElement.style.fontSize = appHeight*.06 + "px";
centralizeButtonTextMidde(plantLogAddButtonElement);

refreshButtonStyles();

function setDimensions(element, _height, _width){
	element.style.height = _height + "px";
	element.style.width = _width + "px";
}

function centralizeButtonTextMidde(element){
	element.style.textAlign = "center";
	element.style.paddingTop = (appWidth*.85)*(38/132)*.15 + "px";
}

function refreshButtonStyles(){
	var plantLogButtonsElements = document.getElementsByClassName("plantLogButton");
	
	for(C = 0; C<plantLogButtonsElements.length-1; C++){
		setDimensions(plantLogButtonsElements[C], (appWidth*.85)*(38/132), (appWidth*.85));
		centralizeButtonTextMidde(plantLogButtonsElements[C]);
		
		plantLogButtonsElements[C].style.fontSize = appHeight*.06 + "px";
		
		plantLogButtonsElements[C].style.marginBottom = appHeight*.01+"px";
		plantLogButtonsElements[C].style.margin= "auto";
		plantLogButtonsElements[C].style.marginBottom= appHeight*.01+"px";
		plantLogButtonsElements[C].style.padding = "0";
		
		plantLogButtonsElements[C].style.background = '#000 url("./images/journal/plantLogEntryLayout.png") no-repeat center top';
		plantLogButtonsElements[C].style.backgroundSize = "100% 100%"
		
		plantLogButtonsElements[C].style.textDecoration = "none";
		
		plantLogButtonsElements[C].className = "plantLogButton";
		plantLogButtonsElements[C].firstChild.href = "./plantLogGenericLayout.html";
		plantLogButtonsElements[C].firstChild.style = "padding:0; margin:auto; text-decoration:none; text-align:center;";
		plantLogButtonsElements[C].firstChild.firstChild.style += "padding:0; margin:auto;";	
		
	}
}

function addButton(textInput){

	nodeToAdd2 = document.createElement("span");	nodeToAdd2.innerHTML = (textInput.length < 11) ? (textInput == 0) ? "Unnamed" : textInput : textInput.slice(0,11);
	nodeToAdd1 = document.createElement("a");	nodeToAdd1.innerHTML = nodeToAdd2.outerHTML;
	nodesToAdd = document.createElement("div");	nodesToAdd.innerHTML = nodeToAdd1.outerHTML;	
	
	nodesToAdd.className = "plantLogButton";

	plantLogButtonsContainerElement.insertBefore(nodesToAdd, plantLogAddButtonElement);	
	refreshButtonStyles();	
}