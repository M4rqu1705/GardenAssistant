var userDataObject = {"plantLog":[{name:"Sample",description:"Lorem ipsum"}],
"journal":[]};

retrieveButtonsAndDisplay();
stylePage(1);

function retrieveButtonsAndDisplay(){
	if (typeof(Storage) != undefined) {
		//localStorage.removeItem("buttonsObject");
		if(localStorage.getItem("buttonsObject") != null || localStorage.getItem("buttonsObject") != undefined){
	    	userDataObject = JSON.parse(localStorage.getItem("buttonsObject"));
		}
		else{
			userDataObject = {"plantLog":[{name:"Sample",description:"Lorem ipsum"}],"journal":[]};
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

	for(var C = 0; C<userDataObject.plantLog.length; C++){
		addOneButton(userDataObject.plantLog[C]['name'], false);
	}
}

function addOneButton(textInput, newButton){
	textInput = (textInput.length < 11) ? (textInput.length == 0 || textInput == null || textInput == undefined) ? "Unnamed" : textInput : textInput.toString().slice(0,11)

	$('<div>',{
  		'class' : 'plantLogButton',
  		'html': $('<a>',{
   			"href":"./plantLogGenericLayout.html",
    		'html' : $('<span>').text(textInput)
  		})
	}).on("click",function(){
		genericLayoutTitleName = $(this).children(":first").children(":first").text();
		alert(userDataObject.plantLog[0]['name']);
		for (var C=0 ; C < userDataObject.plantLog.length ; C++){
		    if (userDataObject.plantLog[C]['name'] == genericLayoutTitleName) {
		        genericLayoutContent = userDataObject.plantLog[C]['description'] || "";
		    }
		}
	}).insertBefore($("#addButton"));

	if(newButton){
		userDataObject.plantLog.push({name:textInput, description:""});
		localStorage.setItem("buttonsObject", JSON.stringify(userDataObject));
	}

	stylePage(1);	
}

window.onbeforeunload = function(){
	localStorage.setItem("buttonsObject", JSON.stringify(userDataObject));
	if(window.AppInventor !== undefined) window.AppInventor.setWebViewString(JSON.stringify(userDataObject));
}