"use strict"

////////////*/*/*/1 - task/*/*/*////////////
var ball = document.getElementById('ball');

ball.onmousedown = function (e) {

    moveAt(e);

    document.body.appendChild(ball);

    ball.style.zIndex = 1000; // показывать мяч над другими элементами

    function moveAt(e) {
        ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
    }

    document.onmousemove = function (e) {
        moveAt(e);
    }

    ball.onmouseup = function () {
        document.onmousemove = null;
        ball.onmouseup = null;
    }
}


ball.ondragstart = function () {
    return false;
}
////////////*/*/*/2 - task/*/*/*////////////
var img_line = document.getElementById('img');

function move_img() {
    let counter = 0;
    return function () {
        counter += 10;
        img_line.style.marginLeft = counter + "px";
        if (counter === 1200) clearInterval(time)
    }
}

let move = move_img();
let time = setInterval("move()", 50);
////////////*/*/*/3 - task/*/*/*////////////
let idImg = document.getElementById("myImg");
setInterval("moveR()", 40);

function moveR() {
    if (parseInt(idImg.style.left) < 900 && parseInt(idImg.style.left) < 600) {
        idImg.style.left = parseInt(idImg.style.left) + Math.floor(0.5 * 12) + "px";
        idImg.style.top = parseInt(idImg.style.top) + Math.floor(0.5 * 8) + "px";

    } else {
        idImg.style.left = 30 + "px";
        idImg.style.top = 250 + "px";
    }
}

////////////*/*/*/4 - task/*/*/*////////////
function save(){
    var canvas=document.getElementById('c1');
    var ctx = canvas.getContext('2d');
    var func=Number(document.forms.fenster.s.value);
    var col = document.forms.fenster.color.value;
    switch(func)
    {

        case 1:{
            var x=0;
            var move=setInterval(
                function draw2()
                {
                    let y_2=200-0.08*Math.pow(x-200, 2);
                    x=x+0.3;
                    ctx.fillStyle=col;
                    ctx.fillRect(x,y_2,2,2);
                }, 5);
            break;}

        case 2:{
            var x=0;
            var move=setInterval(
                function draw3()
                {
                    let y_3=200-0.002*Math.pow(x-200, 3);
                    x+=0.3;
                    ctx.fillStyle=col;
                    ctx.fillRect(x,y_3,2,2);
                }, 1);
            break;}

        case 3:{
            var x=0;
            var move=setInterval(
                function drawSin()
                {
                    let y_sin=200+10*Math.sin(0.1*(x-200));
                    x+=0.3;
                    ctx.fillStyle=col;
                    ctx.fillRect(x,y_sin,2,2);
                }, 5);
            break;}

        case 4:{
            var x=0;
            var move=setInterval(
                function drawCos()
                {
                    let y_cos=200+10*Math.cos(0.1*(x-200));
                    x+=0.3;
                    ctx.fillStyle=col;
                    ctx.fillRect(x,y_cos,2,2);
                }, 5);
            break;}
    }
}

////////////*/*/*/5 - task/*/*/*////////////
select.onclick = function () {
    let color = document.forms.fenster.color.value;
    if (color === 'blue') {
        document['select'].style.backgroundColor = 'rgb(30, 9, 98)'
        document['select'].style.borderColor = 'rgb(30, 9, 98)'
        document['select'].style.color = 'rgb(30, 9, 98)'
    }
    if (color === 'red') {
        document['select'].style.backgroundColor = 'rgb(255, 0, 0)'
        document['select'].style.borderColor = 'rgb(255, 0, 0)'
        document['select'].style.color = 'rgb(255, 0, 0)'
    }
    if (color === 'green') {
        document['select'].style.backgroundColor = 'rgb(0, 255, 64)'
        document['select'].style.borderColor = 'rgb(0, 255, 64)'
        document['select'].style.color = 'rgb(0, 255, 64)'
    }
    if (color === 'yellow') {
        document['select'].style.backgroundColor = 'rgb(238, 255, 0)'
        document['select'].style.borderColor = 'rgb(238, 255, 0)'
        document['select'].style.color = 'rgb(238, 255, 0)'
    }
}
////////////////////////////////////////////