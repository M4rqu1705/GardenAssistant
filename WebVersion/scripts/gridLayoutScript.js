var bodyElement = document.getElementsByTagName("body")[0];
var gridLayoutHeaderElement = document.getElementById("gridLayoutHeader");
var gridLayoutBackButtonElement = document.getElementById("gridLayoutBackButton");
var gridLayoutSettingsButtonElement = document.getElementById("gridLayoutSettingsButton");
var gridLayoutSaveButtonElement = document.getElementById("gridLayoutSaveButton");
var gridLayoutTextInputElement = document.getElementById("gridLayoutTextInput");
var gridLayoutIconContainerElement = document.getElementById("gridLayoutIconContainer");
var gridLayoutIconElements = document.getElementsByClassName("gridLayoutIcon");

var appHeight = window.innerHeight;
var appWidth = appHeight*(9/16);

var gridLayoutAppleIcon = document.getElementsByTagName("img")[0];


bodyElement.style.height = appHeight+"px";
bodyElement.style.width = appWidth+"px";
gridLayoutHeaderElement.style.width = bodyElement.style.width+"px";
gridLayoutHeaderElement.style.height = (appHeight*.08)+"px";
gridLayoutBackButtonElement.style.height = (appHeight*.05)+"px";
gridLayoutBackButtonElement.style.width = (appHeight*.05)+"px";
gridLayoutSaveButtonElement.style.height = (appHeight*.05)+"px";
gridLayoutSaveButtonElement.style.width = (appHeight*.05)+"px";
gridLayoutTextInputElement.style.width = appWidth*.6+"px";
gridLayoutTextInputElement.style.height = (appHeight*.1)+"px";
gridLayoutTextInputElement.children[0].style.width = appWidth*.45+"px";
gridLayoutTextInputElement.children[0].style.height = (appHeight*.047)+"px";
gridLayoutTextInputElement.children[1].style.width = appWidth*.15+"px";;
gridLayoutTextInputElement.children[1].style.height = (appHeight*.047)+"px";

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

gridLayoutIconContainerElement.style.height = appHeight -(gridLayoutHeaderElement.style.height + (appWidth*.1*14)) + "px";

createGrid();

function createGrid(){
	var gridToAdd = document.createElement("div");
	gridToAdd.style.height = appWidth*.1*14+"px";
	gridToAdd.style.width = appWidth+"px";
	gridToAdd.style.margin = "0";
	
	for(var C = 0; C<14; C++){
		var firstDiv = document.createElement("div");
		firstDiv.style = "width:" + appWidth + "px;" + 
			"height:" + appWidth*.1 + "px" +
			"padding:0" + 
			"margin:0";
		
		for(var D = 0; D<10; D++){
			var secondDiv = document.createElement("div");
			var boxSelector = document.createElement("div");
			secondDiv.className = "box";
			secondDiv.addEventListener("dragover", allowDrop);
			secondDiv.addEventListener("drop", drop);
			secondDiv.addEventListener("click", function(){
				if(boxSelector.style.display == true){
					boxSelector.style.display = false;
				}
				else{
					boxSelector.style.display = true;
				}
			});
			secondDiv.style = "border:1px solid black;" +
				"width:"+appWidth*.1+"px;" +
				"height:"+appWidth*.1+"px;" +
				"position:absolute;" +
				"left:"+(((window.innerWidth-appWidth)/2)+(appWidth*.1*D))+"px;" +
				" top:"+((gridLayoutHeaderElement.style.height)+(appWidth*.1*C))+"px;";
			firstDiv.appendChild(secondDiv);
			/*
			var backgroundBoxSelectorImages = [
				'',
				'./images/gridLayout/dirtSquare.png',
				'./images/gridLayout/grassSquare.png',
				'./images/gridLayout/cementSquare.png'
			];
			for(var C = 0; C<backgroundBoxSelectorImages.length; C++){
				var imageToAdd = document.createElement("img");
				imageToAdd.src = backgroundBoxSelectorImages[C];
				imageToAdd.style = "height:100px;"+
					"width:100px;" + 
					"position:relative;";
				imageToAdd.addEventListener("click", function(){
					alert("Hello");
				});
			}
			boxSelector.backgroundColor="#555";
			
			firstDiv.appendChild(boxSelector);
			}*/
		gridToAdd.appendChild(firstDiv);
	}
	
	bodyElement.insertBefore(gridToAdd, gridLayoutIconContainerElement);
}

function allowDrop(ev){
	ev.preventDefault();
}

function drag(ev){
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev){
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
}

function boxBackgroundMenu(){
	
}