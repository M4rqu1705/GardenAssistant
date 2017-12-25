var bodyElement = document.getElementsByTagName("body")[0];
var plantLogHeaderElement = document.getElementById("plantLogHeader");
var plantLogBackButtonElement = document.getElementById("plantLogBackButton");
var plantLogSettingsButtonElement = document.getElementById("plantLogSettingsButton");
var plantLogButtonsContainerElement = document.getElementById("plantLogButtonsContainer");
var plantLogAddButtonElement = document.getElementById("plantLogAddButton");
var userDataObject = {"plantLog":{"buttons":[{"name":"Sample", "description":"This is a sample text"}]}};

var appHeight = window.innerHeight;
var appWidth = appHeight*(9/16);

//Header
setDimensions(bodyElement, appHeight, appWidth);
setDimensions(plantLogHeaderElement, (appHeight*.08), appWidth);
setDimensions(plantLogButtonsContainerElement, (appHeight * 0.92), appWidth);
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
plantLogAddButtonElement.style.textAlign = "center";
plantLogAddButtonElement.style.paddingTop = (appWidth*.85)*(38/132)*.15 + "px";

retrieveButtonsAndDisplay();
refreshButtonStyles();

function setDimensions(element, _height, _width){
	element.style.height = _height + "px";
	element.style.width = _width + "px";
}

function refreshButtonStyles(){
	$(".plantLogButton").css({"height":(appWidth*.85)*(38/132), "width":(appWidth*.85), "font-size":appHeight*.06, "margin":"auto", "padding":"0", "padding-top":(appWidth*.85)*(38/132)*.15, "margin-bottom":appHeight*.01,
		"background": '#000 url("./images/journal/plantLogEntryLayout.png") no-repeat center top',
		"background-size":"100% 100%", "text-decoration":"none", "text-align":"center"
	});

	$(".plantLogButton").addClass("plantLogButton");
	$(".plantLogButton a").attr({"href":"./plantLogGenericLayout.html", "style":"padding:0; margin:auto; text-decoration:none; text-align:center;"});
	$(".plantLogButton a span").css({"padding":"0", "margin":"auto"});
}

function retrieveButtonsAndDisplay(){
	if (typeof(Storage) != undefined) {
		//localStorage.removeItem("buttonsObject");
		if(localStorage.getItem("buttonsObject") != null || localStorage.getItem("buttonsObject") != undefined){
	    	userDataObject = JSON.parse(localStorage.getItem("buttonsObject"));
	    	console.log("buttonsObject does not equal null");
		}
		else{
			userDataObject = {"plantLog":{"buttons":[{"name":"Sample", "description":"This is a sample text"}]}};
			console.log('buttonsObject equals null');
		}

	} else {
		alert("Your browser does not support local storage");
	}

	if(window.AppInventor !== undefined){
    	userDataObject = JSON.parse(urldecode(window.AppInventor.getWebViewString()));
    	for(x in userDataObject.plantLog.buttons){
			addButton(userDataObject.plantLog.buttons[x].name, false);
		}
	}
}

function addButton(textInput, newButton){
	textInput = (textInput.length < 11) ? (textInput.length == 0) ? "Unnamed" : textInput : textInput.toString().slice(0,11)

	$('<div>',{
  		'class' : 'plantLogButton',
  		'html': $('<a>',{
   			"href":"./plantLogGenericLayout.html",
    		'html' : $('<span>').text(textInput)
  		})
	}).insertBefore(document.getElementById("plantLogAddButton"));

	if(newButton && userDataObject.plantLog.buttons!=undefined){
		userDataObject.plantLog.buttons.push({"name":textInput, "description":""});
		//console.log("buttonsObject.buttons = '"+JSON.stringify(userDataObject.buttons));
	}

	refreshButtonStyles();	
}

window.onbeforeunload = function(){
	localStorage.setItem("buttonsObject", JSON.stringify(userDataObject));
	if(window.AppInventor !== undefined) window.AppInventor.setWebViewString(JSON.stringify(userDataObject));
	alert(userDataObject);	
}

window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
}