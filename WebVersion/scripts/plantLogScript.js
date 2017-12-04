var bodyElement = document.getElementsByTagName("body")[0];
var plantLogHeaderElement = document.getElementById("plantLogHeader");
var plantLogBackButtonElement = document.getElementById("plantLogBackButton");
var plantLogSettingsButtonElement = document.getElementById("plantLogSettingsButton");
var plantLogButtonsContainerElement = document.getElementById("plantLogButtonsContainer");
var plantLogAddButtonElement = document.getElementById("plantLogAddButton");

var appHeight = window.innerHeight;
var appWidth = appHeight*(9/16);

//Header
bodyElement.style.height = appHeight+"px";
bodyElement.style.width = appWidth+"px";
plantLogHeaderElement.style.width = bodyElement.style.width+"px";
plantLogHeaderElement.style.height = (appHeight*.08)+"px";

plantLogBackButtonElement.style.height = (appHeight*.05)+"px";
plantLogBackButtonElement.style.width = (appHeight*.05)+"px";
plantLogBackButtonElement.style.marginTop = (appHeight*.015)+"px";
plantLogBackButtonElement.style.marginLeft = plantLogBackButtonElement.style.marginTop;

plantLogSettingsButtonElement.style.height = (appHeight*.05)+"px";
plantLogSettingsButtonElement.style.width = (appHeight*.05)+"px";
plantLogSettingsButtonElement.style.right = (window.innerWidth- appWidth)/2+"px";
plantLogSettingsButtonElement.style.marginTop = (appHeight*.015)+"px";
plantLogSettingsButtonElement.style.marginRight = plantLogBackButtonElement.style.marginTop;

//Buttons
plantLogButtonsContainerElement.style.height = appHeight*.92 + "px";

plantLogAddButtonElement.parentNode.style.marginTop = appHeight*.01+"px";
plantLogAddButtonElement.style.width = appWidth*.85 +"px";
plantLogAddButtonElement.style.height = plantLogAddButtonElement.style.width*(38/132) +"px";
plantLogAddButtonElement.style.fontSize = appHeight*.04 + "px";
plantLogAddButtonElement.style.textAlign = "center";


function refreshButtons(){
	var plantLogButtonsElements = document.getElementsByClassName("plantLogButton");
	
	for(C = 0; C<plantLogButtonsElements.length-1; C++){
		plantLogButtonsElements[C].style.width = appWidth*.85 +"px";
		plantLogButtonsElements[C].style.height = plantLogButtonsElements[C].style.width*(38/132) +"px";
		
		plantLogButtonsElements[C].style.fontSize = appHeight*.04 + "px";
		
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
	var plantLogButtonsContainer = document.getElementById("plantLogButtonsContainer");
	
	var nodeToAdd2 = document.createElement("span");	nodeToAdd2.innerHTML = textInput;
	if(nodeToAdd2.innerHTML.length>15)	nodeToAdd2.innerHTML = nodeToAdd2.innerHTML.slice(0,16);
	nodeToAdd1 = document.createElement("a");	nodeToAdd1.innerHTML = nodeToAdd2.outerHTML;
	var nodesToAdd = document.createElement("div");	nodesToAdd.innerHTML = nodeToAdd1.outerHTML;	
	
	nodesToAdd.className = "plantLogButton";

	plantLogButtonsContainer.insertBefore(nodesToAdd, document.getElementById("plantLogAddButton"));
		
	refreshButtons();	
}