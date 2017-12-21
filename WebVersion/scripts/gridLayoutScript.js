var bodyElement = document.getElementsByTagName("body")[0];
var gridLayoutHeaderElement = document.getElementById("gridLayoutHeader");
var gridLayoutBackButtonElement = document.getElementById("gridLayoutBackButton");
var gridLayoutSettingsButtonElement = document.getElementById("gridLayoutSettingsButton");
var gridLayoutSaveButtonElement = document.getElementById("gridLayoutSaveButton");
var gridLayoutTextInputElement = document.getElementById("gridLayoutTextInput");
var gridLayoutIconContainerElement = document.getElementById("gridLayoutIconContainer");
var gridLayoutIconElements = document.getElementsByClassName("gridLayoutIcon");
var gridLayoutImageSelectionAlertElement = document.getElementById("imageSelectionAlert");
var gridLayoutSelectedGridSquare;

var appHeight = window.innerHeight;
var appWidth = appHeight*(9/16);

var gridLayoutAppleIcon = document.getElementsByTagName("img")[0];


setDimensions(bodyElement, appHeight, appWidth);
setDimensions(gridLayoutHeaderElement, (appHeight*.08), bodyElement.style.width);
setDimensions(gridLayoutBackButtonElement, (appHeight*.05), (appHeight*.05));
setDimensions(gridLayoutSaveButtonElement, (appHeight*.05), (appHeight*.05));
setDimensions(gridLayoutTextInputElement, (appHeight*.1), appWidth*.6);
setDimensions(gridLayoutTextInputElement.children[0], (appHeight*.047), appWidth*.45);
setDimensions(gridLayoutTextInputElement.children[1], (appHeight*.047), (appWidth*.15));
setDimensions(gridLayoutImageSelectionAlertElement, (appWidth), appWidth);

gridLayoutBackButtonElement.style.marginTop = (appHeight*.015)+"px";
gridLayoutBackButtonElement.style.marginLeft = gridLayoutBackButtonElement.style.marginTop;
gridLayoutSettingsButtonElement.style.right = (window.innerWidth- appWidth)/2+"px";
gridLayoutSettingsButtonElement.style.marginTop = (appHeight*.015)+"px";
gridLayoutSettingsButtonElement.style.marginRight = gridLayoutBackButtonElement.style.marginTop;
gridLayoutSaveButtonElement.style.right = ((window.innerWidth-appWidth)/2)+(appWidth*.11)+"px";
gridLayoutSaveButtonElement.style.marginTop = (appHeight*.015)+"px";
gridLayoutSaveButtonElement.style.marginRight = gridLayoutBackButtonElement.style.marginTop;
gridLayoutTextInputElement.style.marginLeft = appWidth*.14+"px";
gridLayoutTextInputElement.children[0].style.marginTop = (appHeight*.015)+"px";
gridLayoutTextInputElement.children[1].style.marginTop = (appHeight*.015)+"px";
gridLayoutImageSelectionAlertElement.style.margin="auto";
gridLayoutImageSelectionAlertElement.style.top = gridLayoutHeaderElement.style.height + "px";

gridLayoutIconContainerElement.style.height = appHeight -(gridLayoutHeaderElement.style.height + (appWidth*.1*14)) + "px";

for(var C = 0; C<gridLayoutIconElements.length; C++){
	if(gridLayoutIconElements[C].src.substr("./images/gridLayout/appleIcon.png")){
		gridLayoutIconElements[C].style.width = appWidth*0.09+"px";
	}
}


createGrid();

function setDimensions(element, _height, _width){
	element.style.height = _height + "px";
	element.style.width = _width + "px";
}

function createGrid(){
	var gridToAdd = document.createElement("div");
	
	for(var C = 0; C<14; C++){
		var firstDiv = document.createElement("div");
		firstDiv.style = "width:" + appWidth + "px; " + 
			"height:" + appWidth*.1 + "px; " +
			"padding:0; " + 
			"margin:0; ";
		
		for(var D = 0; D<10; D++){
			var secondDiv = document.createElement("div");
			secondDiv.className = "box";
			secondDiv.addEventListener("dragover", allowDrop);
			secondDiv.addEventListener("drop", drop);
			secondDiv.addEventListener("click", backgroundImageAlertToggle(this));
			secondDiv.style = "border:1px solid black;" +
				"width:"+appWidth*.1+"px; " +
				"height:"+appWidth*.1+"px; " +
				"position:absolute; " +
				"left:"+((Math.floor(window.innerWidth-appWidth)/2)+(appWidth*.1*D))+"px; " +
				" top:"+((gridLayoutHeaderElement.style.height)+(appWidth*.1*C))+"px; ";
			firstDiv.appendChild(secondDiv);
			}
		gridToAdd.appendChild(firstDiv);
	}
	
	gridToAdd.style.height = appWidth*.1*14+"px";
	gridToAdd.style.width = appWidth+"px";
	gridToAdd.style.margin = "0";
	bodyElement.insertBefore(gridToAdd, gridLayoutIconContainerElement);
}

function backgroundImageAlertToggle(element){
	if(gridLayoutImageSelectionAlertElement.style.display == "inline"){
		gridLayoutImageSelectionAlertElement.style.display = "none";
	}
	else{
		gridLayoutImageSelectionAlertElement.style.display = "inline";
	}

	girdLayoutSelectedGridSquare = element;
}

function changeSquareBackground(image){
	girdLayoutSelectedGridSquare.background = "#0000 url('" + image + "') no-repeat center top;";	
}

function allowDrop(ev){
	if(this.innerHTML == "") ev.preventDefault();
}

function drag(ev){
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}