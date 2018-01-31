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
        "overflow": "hidden"
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
        "padding": 0,
        "overflow": "hidden",
    });

    $("#header").css({
        "width": appWidth,
        "height": (appHeight * 0.073)
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
            break;
        case 1:

        	$("#nameLabel").text(genericLayoutTitleName);
        	$("textarea").text(genericLayoutContent);

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
            }).text(($("#nameLabel").text().length < 16) ? ($("#nameLabel").text().length == 0) ? "Unnamed" : $("#nameLabel").text().length : ($("#nameLabel").text().slice(0, 13) + "..."));

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
                "overflow": "hidden",
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

                "font-family": "Silkscreen"
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
            break;
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
        "overflow": "hidden"
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
        "padding": 0,
        "overflow": "hidden",
    });

    $("#header").css({
        "width": appWidth,
        "height": (appHeight * 0.073)
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
            break;
        case 1:
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
            }).text(($("#nameLabel").text().length < 16) ? ($("#nameLabel").text().length == 0) ? "Unnamed" : $("#nameLabel").text().length : ($("#nameLabel").text().slice(0, 13) + "..."));

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
                "box-shadow": "inset 0px 0px 25px #f6f1b4",


                "line-height": 1.15,
                "font-family": "Silkscreen",
                "font-size": appWidth * 0.055,

                "resize": "none",
                "overflow": "hidden",
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

                "font-family": "Silkscreen"
            });


            $(".plantLogButton").css({
                "height": ((appWidth * .9) * (38 / 132)),
                "width": (appWidth * .9),

                "padding-top": (appWidth * 0.85) * (38 / 132) * 0.15,
                "margin": "auto",
                "margin-top": (appHeight * 0.015),
                "boder": "none",
                "border-radius": standardBorderRadius * 1.25,

                "font-size": (appHeight * 0.06),
                "text-align": "center",

                "background": "url('./images/journal/plantLogEntryLayout.png') center top / 100% 100% no-repeat #0000",
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
            break;
    }
}