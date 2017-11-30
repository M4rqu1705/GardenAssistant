var bodyElement = document.getElementsByTagName("body")[0];
bodyElement.style.height = window.innerHeight+"px";
bodyElement.style.width = window.innerHeight*(9/16)+"px";

var gridLayoutHeaderElement = document.getElementById("gridLayoutHeader");
gridLayoutHeaderElement.style.width = bodyElement.style.width+"px";
gridLayoutHeaderElement.style.height = (window.innerHeight*.08)+"px";

var gridLayoutBackButtonElement = document.getElementById("gridLayoutBackButton");
gridLayoutBackButtonElement.style.height = (window.innerHeight*.05)+"px";
gridLayoutBackButtonElement.style.width = (window.innerHeight*.05)+"px";
gridLayoutBackButtonElement.style.marginTop = (window.innerHeight*.015)+"px";
gridLayoutBackButtonElement.style.marginLeft = gridLayoutBackButtonElement.style.marginTop;

var gridLayoutSettingsButtonElement = document.getElementById("gridLayoutSettingsButton");
gridLayoutSettingsButtonElement.style.height = (window.innerHeight*.05)+"px";
gridLayoutSettingsButtonElement.style.width = (window.innerHeight*.05)+"px";
gridLayoutSettingsButtonElement.style.right = (window.innerWidth- window.innerHeight*(9/16))/2+"px";
gridLayoutSettingsButtonElement.style.marginTop = (window.innerHeight*.015)+"px";
gridLayoutSettingsButtonElement.style.marginRight = gridLayoutBackButtonElement.style.marginTop;

var gridLayoutSaveButtonElement = document.getElementById("gridLayoutSaveButton");
gridLayoutSaveButtonElement.style.height = (window.innerHeight*.05)+"px";
gridLayoutSaveButtonElement.style.width = (window.innerHeight*.05)+"px";
gridLayoutSaveButtonElement.style.right = ((window.innerWidth-window.innerHeight*(9/16))/2)+(window.innerHeight*(9/16)*.11)+"px";
gridLayoutSaveButtonElement.style.marginTop = (window.innerHeight*.015)+"px";
gridLayoutSaveButtonElement.style.marginRight = gridLayoutBackButtonElement.style.marginTop;

var gridLayoutTextInputElement = document.getElementById("gridLayoutTextInput");
gridLayoutTextInputElement.style.width = window.innerHeight*(9/16)*.6+"px";
gridLayoutTextInputElement.style.height = (window.innerHeight*.1)+"px";
gridLayoutTextInputElement.style.marginLeft = window.innerHeight*(9/16)*.14+"px";
gridLayoutTextInputElement.children[0].style.width = window.innerHeight*(9/16)*.45+"px";
gridLayoutTextInputElement.children[0].style.height = (window.innerHeight*.047)+"px";
gridLayoutTextInputElement.children[0].style.marginTop = (window.innerHeight*.015)+"px";
gridLayoutTextInputElement.children[1].style.width = window.innerHeight*(9/16)*.15+"px";;
gridLayoutTextInputElement.children[1].style.height = (window.innerHeight*.047)+"px";
gridLayoutTextInputElement.children[1].style.marginTop = (window.innerHeight*.015)+"px";