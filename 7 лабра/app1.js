"use strict"

function task1() {
    let name = document.forms[0].elements[1].value;
    let number = document.forms[0].elements[3].value;
    let addres = document.forms[0].elements[5].value;
    let country = document.forms[0].elements[7].value;
    let card;

    let card1 = document.getElementsByClassName("card");
    for (let i = 0; i < card1.length; i++) {
        if (card1[i].checked) {
            card = (card1[i].value);
        }
    }
    let number_card = document.forms[0].elements[13].value;

    document.getElementById("task11").innerHTML = ("<center><h1>" + "Dear " + name + "</h1></center>" + "your contact information");
    document.getElementById("task11").innerHTML += ("<br\>");
    document.getElementById("task11").innerHTML += ("<ul>");
    document.getElementById("task11").innerHTML += ("<li>" + "phone number: " + number + "</li>");
    document.getElementById("task11").innerHTML += ("<li>" + "country: " + country + "</li>");
    document.getElementById("task11").innerHTML += ("<li>" + "addres: " + addres + "</li>");
    document.getElementById("task11").innerHTML += ("<li>" + "tupe credit card: " + card + "</li>");
    document.getElementById("task11").innerHTML += ("<li>" + "credit card: " + number_card + "</li>");
    document.getElementById("task11").innerHTML += ("</ul>");
}