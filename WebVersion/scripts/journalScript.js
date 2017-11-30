var bodyElement = document.getElementsByTagName("body")[0];
bodyElement.style.height = window.innerHeight+"px";
bodyElement.style.width = window.innerHeight*(9/16)+"px";

var journalHeaderElement = document.getElementById("journalHeader");
journalHeaderElement.style.width = bodyElement.style.width+"px";
journalHeaderElement.style.height = (window.innerHeight*.08)+"px";

var journalBackButtonElement = document.getElementById("journalBackButton");
journalBackButtonElement.style.height = (window.innerHeight*.05)+"px";
journalBackButtonElement.style.width = (window.innerHeight*.05)+"px";
journalBackButtonElement.style.marginTop = (window.innerHeight*.015)+"px";
journalBackButtonElement.style.marginLeft = journalBackButtonElement.style.marginTop;

var journalSettingsButtonElement = document.getElementById("journalSettingsButton");
journalSettingsButtonElement.style.height = (window.innerHeight*.05)+"px";
journalSettingsButtonElement.style.width = (window.innerHeight*.05)+"px";
journalSettingsButtonElement.style.right = (window.innerWidth- window.innerHeight*(9/16))/2+"px";
journalSettingsButtonElement.style.marginTop = (window.innerHeight*.015)+"px";
journalSettingsButtonElement.style.marginRight = journalBackButtonElement.style.marginTop;