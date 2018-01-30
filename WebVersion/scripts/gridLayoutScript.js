var gridLayoutSelectedGridSquare;
var gridLayoutDuplicatedIconsCounter = 0;

var appHeight = window.innerHeight;
var appWidth = appHeight*(9/16);

$("body").css({height:appHeight, width:appWidth});
$("#gridLayoutHeader").css({height:(appHeight*0.08), width:appWidth});
$("#gridLayoutBackButton").css({height:(appHeight*0.05), width:(appHeight*0.05), "margin-top":(appHeight*.015), "margin-left":(appHeight*.015)});
$("#gridLayoutSaveButton").css({height:(appHeight*0.05), width:(appHeight*0.05), right:( ((window.innerWidth-appWidth)/2)+(appWidth*.11)), "margin-top":(appHeight*.015), "margin-right":(appHeight*.015)});
$("#gridLayoutSettingsButton").css({height:(appHeight*0.05), width:(appHeight*0.05) ,right:((window.innerWidth- appWidth)/2 + appWidth*0.025), "margin-top":(appHeight*.015), "margin-left":(appHeight*.015)}).on("click", function(){
		$("#gridLayoutSettings").dialog("open");
});
$("#gridLayoutTextInput").css({height:(appHeight*0.08), width:(appWidth*0.65), "margin-left":(appWidth*0.14)});
$("#gridLayoutTextInput > input[type='text']").css({height:(appHeight*0.047), width:(appWidth*0.45), "margin-top":(appHeight*0.015), padding:0});
$("#gridLayoutTextInput > input[type='submit']").css({height:(appHeight*0.047), width:(appWidth*0.15), "margin-top":(appHeight*0.015), padding:0});

$("#gridLayoutIconContainer").css({"width":appWidth, "height":(appHeight*0.9), padding:0, "margin-top":(appHeight*0.8), "padding-left":(appWidth*0.05), "position":"absolute", top:(appHeight*0.08), "z-index":1}).droppable({
				drop: function (e, ui) {
					if(!((/original/).test($(ui.draggable).attr("class")))){
						$(ui.draggable).remove();
					}
				}
			});;

$(".gridLayoutIcon").css({"width":appWidth*0.09, "z-index":"5"}).draggable({
	helper:'clone',
	//stack:"#gridLayoutIconContainer",
	drag:function(e, ui){
		$(ui.draggable).appendTo($("#gridLayoutBody")).css({"z-index":"5"});
	}
});

//Dialogs
 $("#imageSelectionAlert").dialog({
    autoOpen: false,
    height: (appWidth*0.4),
    width: (appWidth*0.9),
	modal: true,
	draggable:false,
	closeOnEscape: false,
	position:{ my: "top", at: "top+25%", of: "#gridLayoutBody" },
	resizable:true
}).css({height:(appWidth*0.25), "max-width":(appWidth*0.765), "margin":((appHeight*0.025) + "px auto 0px auto"), padding:0});

$("#gridLayoutSettings").dialog({
    autoOpen: false,
    height: (appWidth*0.9),
    width: (appWidth*0.9),
	modal: true,
	draggable:false,
	closeOnEscape: false,
	position:{ my: "top", at: "top-25%", of: "#gridLayoutBody" }
}).css({height:(appWidth*0.25), width:(appWidth*0.875), padding: ((appHeight*0.025) + "px 0px 0px " + (appWidth*0.06) + "px	"), margin:"auto"});



$(".imageSelectionAlertImage").css({height:(appWidth*0.175), width:(appWidth*0.175), padding:0, margin:0});



$("img[src='./images/gridLayout/appleIcon.png']").css({width:(appWidth*0.095), padding:(appWidth*0.0125)});
$("img[src='./images/gridLayout/flowerIcon.png']").css({width:(appWidth*0.095), padding:(appWidth*0.0125)});
$("img[src='./images/gridLayout/pottedFlowerIcon.png']").css({width:(appWidth*0.095), padding:(appWidth*0.025)});
$("img[src='./images/gridLayout/plantIcon.png']").css({width:(appWidth*0.095), padding:(appWidth*0.0125)});
$("img[src='./images/gridLayout/pottedPlantIcon.png']").css({width:(appWidth*0.095), padding:(appWidth*0.025)});
$("img[src='./images/gridLayout/pinwheelIcon.png']").css({width:(appWidth*0.095), padding:(appWidth*0.025)});
$("img[src='./images/gridLayout/gnomeIcon.png']").css({width:(appWidth*0.095), padding:(appWidth*0.025)});
$("img[src='./images/gridLayout/treeIcon.png']").css({width:(appWidth*0.095), padding:(0)});

createGrid();

function createGrid(){
	var gridToAdd = document.createElement("div");

	for(var C = 0; C<14; C++){
		var firstDiv = document.createElement("div");
		$(firstDiv).css({width:appWidth, height:(appWidth*0.1), padding:0, margin:0});

		for(var D = 0; D<10; D++){
			var secondDiv = document.createElement("div");

			$(secondDiv).attr({ "id":String("box"+"_"+C+"_"+D), "class":"box"}).css({
				width:appWidth*0.1,
				height:appWidth*0.1,
				position:"absolute",
				left:((Math.floor(window.innerWidth-appWidth)/2)+(appWidth*.1*D)), 
				top:((appHeight*0.08)+(appWidth*.1*C)),
				"z-index":2,
				border:"1px solid black"
			}).droppable({
				drop: function (e, ui) {
					if((/original/).test($(ui.draggable).attr("class"))){
						$(ui.draggable).clone().attr({
							id:"clonedElement"+ ++gridLayoutDuplicatedIconsCounter
						}).appendTo($(this)).draggable({
							helper:"original",
							//grid: [appWidth*0.1, appWidth*0.1],
							stack:"true",
						}).css({
							margin:"auto", top:0, right:0, left:0, bottom:0
						}).removeClass("original");
					}
					else{
						$(ui.draggable).appendTo($(this)).draggable({
							helper:"original",
							//grid: [appWidth*0.1, appWidth*0.1],
							stack:true
						}).css({
							margin:"auto", top:0, right:0, left:0, bottom:0
						});
					}
				}
			}).on("click", function(){
					$("#imageSelectionAlert").dialog("open");
			});

			secondDiv.addEventListener("click", function(){
				backgroundImageAlert();
				gridLayoutSelectedGridSquare = this;
			});
			
			firstDiv.appendChild(secondDiv);
		}
		gridToAdd.appendChild(firstDiv);
	}

	$(gridToAdd).css({
		width:appWidth,
		height:appWidth*.1*14,
		margin:0, 
		top:(appHeight*0.08),
		"z-index":1});

	$("#grid").append(gridToAdd);
}

function backgroundImageAlert(){
}

function changeSquareBackground(image){
	$(gridLayoutSelectedGridSquare).css({background:("#0000 url('" + image + "') no-repeat center top"), "background-size":(appWidth*0.1 + "px " + appWidth*0.1 + "px")});	
}
