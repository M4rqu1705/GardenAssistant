function retrieveData(key) {
	if (typeof(Storage) != undefined) {
		//localStorage.removeItem("buttonsObject");
		if (typeof(localStorage.getItem(key)) == "string" && localStorage.getItem(key) != undefined) {
			return (JSON.parse(localStorage.getItem(key)));
		} else {
			alert(key.toString() + "not found");
		}

	} else if (window.AppInventor !== undefined) {
		return JSON.parse(urldecode(window.AppInventor.getWebViewString()));
	} else {
		alert("Your browser does not support local storage");
	}
}

function setData(key, data) {
	if (typeof(Storage) != undefined) {
		localStorage.setItem(key, JSON.stringify(data));
	} else if (window.AppInventor !== undefined) {
		window.AppInventor.setWebViewString(JSON.stringify(data));
	} else {
		alert("Your browser does not support local storage");
	}
}

function stylePage(pageToDisplay) {
	var appHeight = window.innerHeight;
	var appWidth = (appHeight * (9 / 16));

	var standardBorderRadius = (appWidth * 0.0075);
	var headerButtonDimensions = [(appHeight * 0.05), (appHeight * 0.05)];
	var headerButtonMargins = [(appHeight * 0.014), (appHeight * 0.014)];

	//Styling
	$("*").css({
		"height": window.innerHeight,
		"width": window.innerWidth,
		"margin": 0,
		"padding": 0,
		"overflow": "hidden",
		"image-rendering": "pixelated"
	});

	$("a").css({
		"width": "100%",
		"height": "100%",
		"display": "block"
	});

	$("body").css({
		"height": appHeight,
		"width": appWidth,
		"margin": "auto",
		"padding": "0px",
		"overflow": "hidden",
		"box-shadow": "0 0 25px #000000"

	});

	$("#header").css({
		"width": appWidth,
		"height": (appHeight * 0.076),
		"overflow": "hidden"
	});

	$("#backButton").css({
		"position": "absolute",
		"height": headerButtonDimensions[0],
		"width": headerButtonDimensions[1],
		"margin-top": headerButtonMargins[0],
		"margin-left": headerButtonMargins[1]
	}).on({
		mouseenter: function() {
			$(this).css({
				"opacity": 0.5
			});
		},
		mouseleave: function() {
			$(this).css({
				"opacity": 1
			});
		}
	});

	$("#settingsButton").css({
		"position": "absolute",
		"height": headerButtonDimensions[0],
		"width": headerButtonDimensions[1],

		"top": 0,
		"right": ((window.innerWidth - appWidth) / 2),
		"margin-top": headerButtonMargins[0],
		"margin-right": headerButtonMargins[1],
	}).on({
		mouseenter: function() {
			$(this).css({
				"opacity": 0.5
			});
		},
		mouseleave: function() {
			$(this).css({
				"opacity": 1
			});
		}
	});

	//0 => index.html (main page)
	//1 => plantLog, journal, and plantLogGenericLayout
	//2 => gridLayout
	//3 => lunarPhases
	switch (pageToDisplay) {
		case 0:
			$("body").css({
				"background": "url('./images/mainMenu/mainMenuBackground.png') center top / auto 100% no-repeat #9fffad"
			});

			$(".menuButton").css({
				"position": "absolute",
				"top": appHeight * 0.4625,
				"left": ((window.innerWidth - appWidth) / 2),
				"width": appWidth * 0.8,
				"height": appHeight * 0.0775,
				"margin": "auto",
				"margin-left": appWidth * 0.1,
				"padding": "0",
			}).on({
				mouseenter: function() {
					$(this).css({
						"opacity": 0.5
					});
				},
				mouseleave: function() {
					$(this).css({
						"opacity": 1
					});
				}
			});

			$("#gridLayoutButton").css({
				"background": "url('./images/mainMenu/gardenPlansMainMenuButton.png') center top / 100% 100% no-repeat #0000",
				"margin-top": 0
			});

			$("#journalButton").css({
				"background": "url('./images/mainMenu/journalMainMenuButton.png') center top / 100% no-repeat #0000",
				"margin-top": appHeight * 0.101
			});

			$("#plantLogButton").css({
				"background": "url('./images/mainMenu/plantLogMainMenuButton.png') center top / 100% no-repeat #0000",
				"margin-top": appHeight * 0.202
			});

			$("#lunarPhaseButton").css({
				"background": "url('./images/mainMenu/lunarPhaseMainMenuButton.png') center top / 100% no-repeat #0000",
				"margin-top": appHeight * 0.303
			});

			$("#settingsButton").css({
				"background": "url('./images/mainMenu/settingsMainMenuButton.png') center top / 100% no-repeat #0000",
				"margin-top": appHeight * 0.404
			});

			break;
		case 1:
			$("#nameLabel").text(sessionStorage.genericLayoutTitleName);
			$("textarea").text(sessionStorage.genericLayoutContent);

			$("body").css({
				"background": "url('./images/journal/journalBackground.png') center top / auto 100% no-repeat #f6f1b4"
			});
			$("#backButton").css({
				"background": "url('./images/journal/journalBackButton.png') center top / 100% 100% no-repeat #0000"
			});
			$("#settingsButton").css({
				"background": "url('./images/journal/journalSettingsButton.png') center top / 100% 100% no-repeat #0000"
			});

			$("#nameLabel").css({
				"height": (appHeight * 0.05),
				"width": (appWidth * 0.725),
				"position": "absolute",
				"top": 0,
				"margin-top": headerButtonMargins[0],
				"margin-left": (appWidth * 0.14),

				"font-family": "Silkscreen",
				"font-size": appWidth * 0.075,
				"text-align": "center",
				"line-height": 1.25,

				"background-color": "#FFF",
				"border-radius": standardBorderRadius,
				"box-shadow": "inset 0px 0px 10px #875D27"
			}).text(($("#nameLabel").text().length < 16) ? ($("#nameLabel").text().length == 0) ? "Unnamed" : $("#nameLabel").text() : ($("#nameLabel").text().slice(0, 13) + "..."));

			$("#brownCover").css({
				"height": headerButtonDimensions[0] * 1.1,
				"width": headerButtonDimensions[1] * 1.1,

				"position": "absolute",
				"top": 0,
				"right": ((window.innerWidth - appWidth) / 2),
				"margin-top": headerButtonMargins[0],
				"margin-right": headerButtonMargins[1],

				"background-color": "#875D27"
			});

			$("body > textarea").css({
				"width": appWidth * 0.95,
				"height": appHeight * 0.895,

				"position": "relative",
				"top": appHeight * 0.015,
				"left": appWidth * 0.025,
				"margin": "auto",
				"padding": appWidth * 0.025,
				"boder": "none",
				"border-radius": standardBorderRadius * 1.25,
				"box-shadow": "0px 0px inset 25px #f6f1b4",

				"line-height": 1.15,
				"font-family": "Silkscreen",
				"font-size": appWidth * 0.055,

				"resize": "none",
				"overflow-x": "hidden",
				"overflow-y": "auto",
				"outline": "none"
			});

			$("#buttonsContainer").css({
				"height": (appHeight * 0.92),
				"width": appWidth,

				"padding": "0",
				"margin": "auto",
				"margin-top": (appHeight * 0.01),
				"overflow-x": "hidden",
				"overflow-y": "auto",

				"font-family": "Silkscreen",
			});

			$(".plantLogButton").css({
				"height": ((appWidth * 0.9) * (38 / 132)),
				"width": (appWidth * 0.9),

				"padding-top": (appWidth * 0.85) * (38 / 132) * 0.15,
				"margin": "auto",
				"margin-top": (appHeight * 0.015),
				"boder": "none",
				"border-radius": standardBorderRadius * 1.25,
				"box-shadow": "0px 0px inset 100px black",

				"font-size": (appHeight * 0.06),
				"text-align": "center",

				"background": "url('./images/journal/plantLogEntryLayout.png') center top / 100% 100% no-repeat #0000"

			}).on({
				mouseenter: function() {
					$(this).css({
						"opacity": 0.5
					});
				},
				mouseleave: function() {
					$(this).css({
						"opacity": 1
					});
				}
			});

			$(".plantLogButton > a").css({
				"text-decoration": "none"
			});
			break;
		case 2:
			break;
		case 3:
			var lunarPhasesDateObject = new Date();
			var currentLunarPhase = getMoonPhase(lunarPhasesDateObject.getFullYear(), (lunarPhasesDateObject.getMonth() + 1), lunarPhasesDateObject.getDate());

			$("body").css({
				"background": "url('./images/lunarPhases/lunarPhasesBackground.png') center top / auto 100% no-repeat #200646"
			});
			$("#backButton").css({
				"background": "url('./images/lunarPhases/lunarPhasesBackButton.png') center top / 100% 100% no-repeat #0000"
			});

			$("#currentDate").css({
				"position": "absolute",
				"top": 0,
				"right": (window.innerWidth - appWidth) / 2,
				"height": headerButtonDimensions[0],
				"width": (appWidth * 0.4),
				"margin-top": headerButtonMargins[0],
				"margin-right": (appHeight * .015),

				"font-size": (appHeight * .035),
				"border-radius": standardBorderRadius,
				"background-color": "#7a4eba",
				"color": "#000",
				"font-family": "Silkscreen",
				"text-align": "center",
				"box-shadow": "inset 0px 0px 15px #200646"
			}).text(lunarPhasesDateObject.getDate() + "/" + (lunarPhasesDateObject.getMonth() + 1) + "/" + lunarPhasesDateObject.getFullYear());

			$("img").css({
				"position": "absolute",
				"height": (appHeight * 0.92),
				"width": (appWidth),
				"top": (appHeight * 0.08)
			});

			switch (currentLunarPhase) {
				case 0: //New moon
					$("img").attr("src", "./images/lunarPhases/moonNew.png");
					break;
				case 1: //Waxing Crescent Moon
					$("img").attr("src", "./images/lunarPhases/moonWaxingCrescent.png");
					break;
				case 2: //First Quarter Moon
					$("img").attr("src", "./images/lunarPhases/moonFirstQuarter.png");
					break;
				case 3: //Waxing Gibbous Moon
					$("img").attr("src", "./images/lunarPhases/moonWaxingGibbous.png");
					break;
				case 4: //Full Moon
					$("img").attr("src", "./images/lunarPhases/moonFull.png");
					break;
				case 5: //Waning Gibbous Moon
					$("img").attr("src", "./images/lunarPhases/moonWaningGibbous.png");
					break;
				case 6: //Last Quarter Moon
					$("img").attr("src", "./images/lunarPhases/moonLastQuarter.png");
					break;
				case 7: //Waning Crescent Moon
					$("img").attr("src", "./images/lunarPhases/moonWaningCrescent.png");
					break;
			}

			break;
	}
}