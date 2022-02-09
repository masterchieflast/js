"use strict"

function logMouseOverColor(ontext) {
    ontext.style.color = "white";
}

function logMouseOutColor(offtext) {
    offtext.style.color = "black";
}

var FlagColor = true;

function logMouseClickSize(colortext) {
    if (FlagColor) {
        colortext.style.fontSize = "20px";
        FlagColor = false;
    } else {
        colortext.style.fontSize = "16px";
        FlagColor = true;
    }
}

var FlagImg = true;

function MouseClickImg() {
    let img = document.getElementById("Img");
    if (FlagImg) {
        img.src = "img1.jpg";
        FlagImg = false;
    } else {
        img.src = "img2.jpg";
        FlagImg = true;
    }
}

var FlagText = true;

function MouseClickText() {
    let text_img = document.getElementById("Text");
    if (FlagText) {
        text_img.innerHTML = "<img src='img3.jpg' height='135px' width='333px' alt=''>"
        FlagText = false;
    } else {
        text_img.innerHTML = "Outer space is not completely empty—it is a hard vacuum containing a low density of particles, predominantly a plasma of hydrogen and helium";
        FlagText = true;
    }
}

function logMouseOverImg(OverImg) {
    OverImg.style.width = "450px";
}

function logMouseOutImg(OutImg) {
    OutImg.style.width = "333px";
}

function DbClickBorder(DBBorder) {
    DBBorder.style.border = "5px solid white";
}

function ClickBorder(border) {
    border.style.border = "1px solid black";
}
