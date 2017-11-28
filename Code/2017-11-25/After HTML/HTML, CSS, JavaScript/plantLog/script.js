adjustButtonProperties();

var buttonsArray = [["+", "addButton();"], ["Example1", "alert('DisplayScreen');"]];

alert("Finished loading");

function addButton(){
	buttonsArray.push([prompt("What is the plant's name?", "Planty"), "alert('DisplayScreen');"]);
	
	var counter = buttonsArray.length - 1;
	
	newButton = document.getElementsByTagName("script");
	
	$('<div class="w3-container w3-display-topmiddle buttonContainer" onclick="' + buttonsArray[counter][1] + '><div class="w3-display-middle buttonText">' + buttonsArray[counter][0] + '</div> </div>').insertBefore(newButton[newButton.length-1]);
		
	adjustButtonProperties();
}

function adjustButtonProperties(){
	
	var buttonContainers = document.getElementsByClassName("buttonText");	
	
	for(C = 0; C<buttonContainers.length; C++){
		alert(buttonContainers[C]);
		buttonContainers[C].parentNode.class = "w3-container w3-display-topmiddle buttonContainer";
		buttonContainers[C]	.class = "w3-display-middle buttonText";
		buttonContainers[C].parentNode.style.width = window.innerWidth+"px";
		buttonContainers[C].parentNode.style.height = window.innerWidth*(34/132) + "px";
		buttonContainers[C].parentNode.style.fontSize = window.innerWidth / 10	 + "px";
		buttonContainers[C].parentNode.style.background = "background:#f6f1b4 url('plantLogEntryLayout.png') no-repeat center top";
		
		if(buttonContainers[C].innerHTML.length > 11){
			var str = buttonContainers[C].innerHTML;
			str = str.slice(0, 11);
			str = str + "...";
			buttonContainers[C].innerHTML = str;		
		}
	}
}