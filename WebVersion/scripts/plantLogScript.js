$(document).ready(function() {
    userDataObject = getData("sessionStorage", "buttonsObject");
    displayButtons(userDataObject);
    stylePage(1);
});

function displayButtons(data) {
    if (data != "undefined" && !(/\[\]/.test(data.plantLog))) {
        for (var C = 0; C < data.plantLog.length; C++) {
            addOneButton(data.plantLog[C].name, false);
        }
    }
}

function addOneButton(textInput, newButton) {
    $('<div>', {
        'class': 'plantLogButton',
        'html': $('<a>', {
            "href": "./plantLogGenericLayout.html",
            'html': $('<span>').text(cutInputToLength(textInput, 14))
        })
    }).on("click", function() {
        setData("sessionStorage", "genericLayoutTitleName", $(this).children(":first").children(":first").text());
        for (var C = 0; C < userDataObject.plantLog.length; C++) {
            if (userDataObject.plantLog[C].name == getData("sessionStorage", "genericLayoutTitleName")) {
                setData("sessionStorage", "genericLayoutContent", userDataObject.plantLog[C]['description']);
            }
        }
        setData("sessionStorage", "redirectTowards", "./plantLog.html");
    }).insertBefore($("#addButton"));

    if (newButton) {
        userDataObject.plantLog.push({
            name: textInput,
            description: ""
        });
        setData("sessionStorage", "buttonsObject", userDataObject);
    }

    stylePage(1);
}

window.onbeforeunload = function() {
    setData("sessionStorage", "buttonsObject", userDataObject);
}