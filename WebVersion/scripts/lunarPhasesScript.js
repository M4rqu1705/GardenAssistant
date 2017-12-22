var lunarPhasesDateObject = new Date();
var currentLunarPhase = getMoonPhase(lunarPhasesDateObject.getFullYear(), (lunarPhasesDateObject.getMonth()+1), lunarPhasesDateObject.getDate());

var appHeight = window.innerHeight;
var appWidth = appHeight*(9/16);

$("body").children().css({"margin":"0", "padding":"0", "overflow":"hidden", "font-family":"Silkscreen"});
$("a").css({"display": "block", "width":"100%", "height":"100%"});
$("#lunarPhasesBody").css({"height":appHeight, "width":appWidth, "margin":"auto", "padding":"0", "overflow":"hidden", "background":"#200646 url('./images/lunarPhases/lunarPhasesBackground.png') no-repeat center top", "background-size": "auto 100%"});
$("#lunarPhasesHeader").css({"height":(appHeight*0.08), "width":appWidth});
$("#lunarPhasesBackButton").css({"height":(appHeight*0.05), "width":(appHeight*0.05), "margin-top":(appHeight*0.015), "margin-left":(appHeight*.015), "background":"#0000 url('./images/lunarPhases/lunarPhasesBackButton.png') no-repeat center top", "background-size": "100% 100%"});
$("#lunarPhasesCurrentDate").css({"height":(appHeight*0.05), "width":(appWidth	*0.5),  "margin-top":(appHeight*0.015), "margin-right":(appHeight*.015), "color":"#ffffff", "font-size":(appHeight*.04), "position":"absolute", "top":"0", "right":((window.innerWidth - appWidth)/2), "text-align":"right"});
$("#lunarPhasesImage").css({"height":(appHeight*0.92), "width":(appWidth),"position": "absolute", "top":(appHeight*0.08), "z-index":"1"});	

$("#lunarPhasesBackButton").hover(function(){$(this).css({"opacity":"0.5"});}, function(){$(this).css({"opacity":"1"});});
$("#lunarPhasesCurrentDate").text(lunarPhasesDateObject.getDate() + "/" + (lunarPhasesDateObject.getMonth()+1) + "/" + lunarPhasesDateObject.getFullYear());

switch(currentLunarPhase){
	case 0:    //New moon
		$("#lunarPhasesImage").attr("src", "./images/lunarPhases/moonNew.png");
		break;
	case 1:    //Waxing Crescent Moon
		$("#lunarPhasesImage").attr("src", "./images/lunarPhases/moonWaxingCrescent.png");
		break;
	case 2:    //First Quarter Moon
		$("#lunarPhasesImage").attr("src", "./images/lunarPhases/moonFirstQuarter.png");
		break;
	case 3:    //Waxing Gibbous Moon
		$("#lunarPhasesImage").attr("src", "./images/lunarPhases/moonWaxingGibbous.png");
		break;
	case 4:    //Full Moon
		$("#lunarPhasesImage").attr("src", "./images/lunarPhases/moonFull.png");
		break;
	case 5:    //Waning Gibbous Moon
		$("#lunarPhasesImage").attr("src", "./images/lunarPhases/moonWaningGibbous.png");
		break;
	case 6:    //Last Quarter Moon
		$("#lunarPhasesImage").attr("src", "./images/lunarPhases/moonLastQuarter.png");
		break;
	case 7:    //Waning Crescent Moon
		$("#lunarPhasesImage").attr("src", "./images/lunarPhases/moonWaningCrescent.png");
		break;
}

/* 
 * modified from http://www.voidware.com/moon_phase.htm 
 * retrieved from https://gist.github.com/endel/dfe6bb2fbe679781948c
 */

function getMoonPhase(year, month, day){
    var c = e = jd = b = 0;	//Initialize every variable to use to 0

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; //jd is total days elapsed
    jd /= 29.5305882; //divide by the moon cycle
    b = parseInt(jd); //int(jd) -> b, take integer part of jd
    jd -= b; //subtract integer part to leave fractional part of original jd
    b = Math.round(jd * 8); //scale fraction from 0-8 and round
    if (b >= 8 ) b = 0; //0 and 8 are the same so turn 8 into 0

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon
    return b;
}