var bodyElement = document.getElementsByTagName("body")[0];
bodyElement.style.height = window.innerHeight+"px";
bodyElement.style.width = window.innerHeight*(9/16)+"px";

var lunarPhasesHeaderElement = document.getElementById("lunarPhasesHeader");
lunarPhasesHeaderElement.style.width = bodyElement.style.width+"px";
lunarPhasesHeaderElement.style.height = (window.innerHeight*.08)+"px";

var lunarPhasesBackButtonElement = document.getElementById("lunarPhasesBackButton");
lunarPhasesBackButtonElement.style.height = (window.innerHeight*.05)+"px";
lunarPhasesBackButtonElement.style.width = (window.innerHeight*.05)+"px";
lunarPhasesBackButtonElement.style.marginTop = (window.innerHeight*.015)+"px";
lunarPhasesBackButtonElement.style.marginLeft = lunarPhasesBackButtonElement.style.marginTop;

var lunarPhasesImageElement = document.getElementById("lunarPhasesImage");
lunarPhasesImageElement.style.height = (window.innerHeight*.92)+"px";
lunarPhasesImageElement.style.width = bodyElement.style.width+"px";
lunarPhasesImageElement.src = "./images/lunarPhases/moonFirstQuarter.png";
