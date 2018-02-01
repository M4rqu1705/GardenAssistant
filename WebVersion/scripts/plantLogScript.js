var userDataObject;

$(document).ready(function(){
	userDataObject = retrieveData("buttonsObject") || {'plantLog':[{'name':'Sample', 'description':'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'}], 'journal':[]};
	displayButtons();
	stylePage(1);
});


function displayButtons(){
	if(userDataObject != undefined || userDataObject != null){
		for(var C = 0; C<userDataObject.plantLog.length; C++){
			addOneButton(userDataObject.plantLog[C].name, false);
		}
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
		sessionStorage.genericLayoutTitleName = $(this).children(":first").children(":first").text();
		for (var C=0 ; C < userDataObject.plantLog.length ; C++){
		    if (userDataObject.plantLog[C].name == sessionStorage.genericLayoutTitleName) {
		        sessionStorage.genericLayoutContent = userDataObject.plantLog[C]['description'];
		    }
		}
		sessionStorage.backTo = "./plantLog.html";
	}).insertBefore($("#addButton"));

	if(newButton){
		userDataObject.plantLog.push({name:textInput, description:""});
	}

	stylePage(1);	
}

window.onbeforeunload = function(){
	setData("buttonsObject", userDataObject);
}