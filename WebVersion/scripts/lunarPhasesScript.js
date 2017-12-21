var lunarPhasesBodyElement = document.getElementsByTagName("body")[0];
var lunarPhasesHeaderElement = document.getElementById("lunarPhasesHeader");
var lunarPhasesBackButtonElement = document.getElementById("lunarPhasesBackButton");
var lunarPhasesImageElement = document.getElementById("lunarPhasesImage");
var lunarPhasesDateObject = new Date();
var currentLunarPhase = getMoonPhase(lunarPhasesDateObject.getFullYear(), (lunarPhasesDateObject.getMonth()+1), lunarPhasesDateObject.getDate());

setDimensions(lunarPhasesBodyElement, window.innerHeight, window.innerHeight*(9/16));
setDimensions(lunarPhasesHeaderElement, (window.innerHeight*.08), lunarPhasesBodyElement.style.width);
setDimensions(lunarPhasesBackButtonElement, (window.innerHeight*.05), (window.innerHeight*.05));
setDimensions(lunarPhasesImageElement, (window.innerHeight*.92), lunarPhasesBodyElement.style.width);

lunarPhasesBackButtonElement.style.marginTop = (window.innerHeight*.015)+"px";
lunarPhasesBackButtonElement.style.marginLeft = lunarPhasesBackButtonElement.style.marginTop;

switch(currentLunarPhase){
	case 0:    //New moon
		lunarPhasesImageElement.src = "./images/lunarPhases/moonNew.png";
		break;
	case 1:    //Waxing Crescent Moon
		lunarPhasesImageElement.src = "./images/lunarPhases/moonWaxingCrescent.png";
		break;
	case 2:    //First Quarter Moon
		lunarPhasesImageElement.src = "./images/lunarPhases/moonFirstQuarter.png";
		break;
	case 3:    //Waxing Gibbous Moon
		lunarPhasesImageElement.src = "./images/lunarPhases/moonWaxingGibbous.png";
		break;
	case 4:    //Full Moon
		lunarPhasesImageElement.src = "./images/lunarPhases/moonFull.png";
		break;
	case 5:    //Waning Gibbous Moon
		lunarPhasesImageElement.src = "./images/lunarPhases/moonWaningGibbous.png";
		break;
	case 6:    //Last Quarter Moon
		lunarPhasesImageElement.src = "./images/lunarPhases/moonLastQuarter.png";
		break;
	case 7:    //Waning Crescent Moon
		lunarPhasesImageElement.src = "./images/lunarPhases/moonWaningCrescent.png";
		break;
}


function setDimensions(element, _height, _width){
	element.style.height = _height + "px";
	element.style.width = _width + "px";
}