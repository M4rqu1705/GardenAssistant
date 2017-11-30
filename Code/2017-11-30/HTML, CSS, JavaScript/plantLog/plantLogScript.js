var bodyElement = document.getElementsByTagName("body")[0];
bodyElement.style.height = window.innerHeight+"px";
bodyElement.style.width = window.innerHeight*(9/16)+"px";

var plantLogHeaderElement = document.getElementById("plantLogHeader");
plantLogHeaderElement.style.width = bodyElement.style.width+"px";
plantLogHeaderElement.style.height = (window.innerHeight*.08)+"px";

var plantLogBackButtonElement = document.getElementById("plantLogBackButton");
plantLogBackButtonElement.style.height = (window.innerHeight*.05)+"px";
plantLogBackButtonElement.style.width = (window.innerHeight*.05)+"px";
plantLogBackButtonElement.style.marginTop = (window.innerHeight*.015)+"px";
plantLogBackButtonElement.style.marginLeft = plantLogBackButtonElement.style.marginTop;

var plantLogSettingsButtonElement = document.getElementById("plantLogSettingsButton");
plantLogSettingsButtonElement.style.height = (window.innerHeight*.05)+"px";
plantLogSettingsButtonElement.style.width = (window.innerHeight*.05)+"px";
plantLogSettingsButtonElement.style.right = (window.innerWidth- window.innerHeight*(9/16))/2+"px";
plantLogSettingsButtonElement.style.marginTop = (window.innerHeight*.015)+"px";
plantLogSettingsButtonElement.style.marginRight = plantLogBackButtonElement.style.marginTop;

var plantLogButtonsElements = document.getElementsByClassName("plantLogButton");
for(C = 0; C<plantLogButtonsElements.length; C++){
	plantLogButtonsElements[C].style.width = (window.innerHeight*(9/16))*.9+"px";
	plantLogButtonsElements[C].style.height = (((window.innerHeight*(9/16))*.9)*(38/132)) +"px";
	plantLogButtonsElements[C].style.backgroundSize = (plantLogButtonsElements[C].style.height*(38/132))+"px "+ (window.innerHeight*0.1)*.9 +"px";	
	plantLogButtonsElements[C].style.marginTop = window.innerHeight*.01+"px";
}


function addButton(){
	
	
	var plantLogButtonsContainer = plantLogButtonsElements[plantLogButtonsElements.length-1].parentElement;
	
	var nodeToAdd2 = document.createElement("span");
	nodeToAdd2.innerHTML = prompt("Name");
	
	var nodeToAdd1 = document.createElement("a");
	nodeToAdd1.innerHTML = nodeToAdd2.outerHTML;
	
	var nodesToAdd = document.createElement("div");
	nodesToAdd.innerHTML = nodeToAdd1.outerHTML;
	
	//var nodesToAdd = document.createTextNode('<div class="plantLogButton"><a href="./Code/2017-11-30/HTML, CSS, JavaScript/plantLog/plantLogGenericLayout.html"><span style="position:relative;	top:40%;	left:50%;">+</span></a></div>');
	
	
	plantLogButtonsContainer.appendChild(nodesToAdd, document.getElementsByTagName("script")[1]);
	
	plantLogButtonsContainer.child[0].className += " plantLogButton";
	plantLogButtonsElements[plantLogButtonsElements.length-1].child[0].href = "./Code/2017-11-30/HTML, CSS, JavaScript/plantLog/plantLogGenericLayout.html";
	plantLogButtonsElements[plantLogButtonsElements.length-1].child[0].child[0].style = "position:relative;	top:40%;	left:50%;";

	//<div class="plantLogButton"><a href="./Code/2017-11-30/HTML, CSS, JavaScript/plantLog/plantLogGenericLayout.html"><span style="position:relative;	top:40%;	left:50%;">+</span></a></div>
}