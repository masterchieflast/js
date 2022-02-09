"use strict"

function task1() {
    let faculty = document.forms[0].elements[0].value;
    let lastname = document.forms[0].elements[1].value;
    let spec = (document.forms[0].elements[3].value);

    let course;
    let course1 = document.getElementsByClassName("course");
    for (let i = 0; i < course1.length; i++) {
        if (course1[i].checked) {
            course = (course1[i].value);
        }
    }
    document.getElementById("task11").innerHTML = ("<center><h1>" + faculty + "</h1></center>");
    document.getElementById("task11").innerHTML += ("Студент " + lastname + " специальность " + spec + " курс " + course + " должен сдавать следующие предметы:");
    document.getElementById("task11").innerHTML += ("<br\>");
    document.getElementById("task11").innerHTML += ("<ul>");
    let subject1 = document.getElementsByClassName("subject");
    for (let i = 0; i < subject1.length; i++) {
        if (subject1[i].checked) {
            document.getElementById("task11").innerHTML += ("<li>" + subject1[i].value + "</li>");
        }
    }
    document.getElementById("task11").innerHTML += ("</ul>");
}