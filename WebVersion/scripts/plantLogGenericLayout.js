var appHeight = window.innerHeight;
var appWidth = appHeight*(9/16);

//Styling
$("*").css({
	"height":window.innerHeight,
	"width":window.innerWidth,
	"margin":0,
	"padding":0,
	"overflow":"hidden"
});

$("a").css({
	"width":"100%",
	"height":"100%",
	"display":"block"
});

$("body").css({
	"height":appHeight,
	"width":appWidth,
	"margin":"auto",
	"padding":0,
	"overflow":"hidden",
	"background":"url('./images/journal/journalBackground.png') center top / auto 100% no-repeat #f6f1b4"
});

$("#header").css({
	"width":appWidth,
	"height":(appHeight*0.073)
});

$("#backButton").css({
	"height":(appHeight*0.05),
	"width":(appHeight*0.05),
	"background":"url('./images/journal/journalBackButton.png') center top / 100% 100% no-repeat #0000",
	"margin-top":(appHeight*.014),
	"margin-left":(appHeight*.014)
});

$("#nameLabel").text(($("#nameLabel").text().length < 16) ? ($("#nameLabel").text().length == 0) ? "Unnamed" : $("#nameLabel").text().length : ($("#nameLabel").text().slice(0,13) + "..."));

$("#nameLabel").css({
	"height":(appHeight*0.05),
	"width":(appWidth*0.725),
	"position":"absolute", "top":0,
	"margin-top":(appHeight*0.014),
	"margin-left":(appWidth*0.14),

	"font-family":"Silkscreen",
	"font-size":appWidth*0.075,
	"text-align":"center",
	"line-height":1.25,

	"background-color":"#FFF",
	"border-radius":appWidth*0.0075,
	"box-shadow":"inset 0px 0px 10px #875D27"
});

$("#brownCover").css({
	"height":(appHeight*0.05),
	"width":(appHeight*0.05),

	"position":"absolute",
	"top":0,
	"right":((window.innerWidth - appWidth)/2),
	"margin-top":(appHeight*0.014),
	"margin-right":(appHeight*0.014),

	"background-color":"#875D27"
});

$("body > textarea").css({
	"width":appWidth*0.95,
	"height":appHeight*0.895,

	"position":"relative",
	"top":appHeight*0.02,
	"left":appWidth*0.025,
	"margin":"auto",
	"padding":appWidth*0.025,
	"boder":"none",
	"box-shadow":"inset 0px 0px 25px #f6f1b4",


	"line-height":1.15,
	"font-family":"Silkscreen",
	"font-size":appWidth*0.055,

	"resize":"none",
	"overflow":"hidden",
	"outline":"none" 
});