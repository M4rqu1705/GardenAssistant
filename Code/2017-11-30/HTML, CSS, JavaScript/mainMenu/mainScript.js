var bodyElement = document.getElementsByTagName("body")[0];
bodyElement.style.height = window.innerHeight+"px";
bodyElement.style.width = window.innerHeight*(9/16)+"px";


var mainMenuButtonElements = [document.getElementById("mainMenuGridLayoutButton"),
							document.getElementById("mainMenuJournalButton"),
							document.getElementById("mainMenuPlantLogButton"),
							document.getElementById("mainMenuLunarPhaseButton"),
							document.getElementById("mainMenuSettingsButton")];
							
for(C=0; C<mainMenuButtonElements.length; C++){
	
	mainMenuButtonElements[C].style.width = (window.innerHeight*(9/16))*0.80+"px";
	mainMenuButtonElements[C].style.height = (mainMenuButtonElements[C].style.width*(20/116))+"px";
	
	/*mainMenuButtonElements[C].onmousedown = function(){
		mainMenuButtonElements[C].style.opacity = "0.5";
	}
	mainMenuButtonElements[C].onmouseup = function(){
		mainMenuButtonElements[C].style.opacity = "1";
	}*/
}