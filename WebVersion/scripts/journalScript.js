var userDataObject = {"plantLog":{"buttons":[{"name":"Sample", "description":"This is a sample text"}]}};

retrieveButtonsAndDisplay();
stylePage(1);

function retrieveButtonsAndDisplay(){
	if (typeof(Storage) != undefined) {
		//	localStorage.removeItem("buttonsObject");
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
			addOneButton(userDataObject.plantLog.buttons[x].name, false);
		}
	}
}

function addOneButton(textInput, newButton){
	textInput = (textInput.length < 11) ? (textInput.length == 0) ? "Unnamed" : textInput : textInput.toString().slice(0,11)

	$('<div>',{
  		'class' : 'plantLogButton',
  		'html': $('<a>',{
   			"href":"./plantLogGenericLayout.html",
    		'html' : $('<span>').text(textInput)
  		})
	}).insertBefore(document.getElementById("addButton"));

	if(newButton && userDataObject.plantLog.buttons!=undefined){
		userDataObject.plantLog.buttons.push({"name":textInput, "description":""});
		//console.log("buttonsObject.buttons = '"+JSON.stringify(userDataObject.buttons));
	}

	stylePage(1);	
}

window.onbeforeunload = function(){
	localStorage.setItem("buttonsObject", JSON.stringify(userDataObject));
	if(window.AppInventor !== undefined) window.AppInventor.setWebViewString(JSON.stringify(userDataObject));
	alert(userDataObject);	
}