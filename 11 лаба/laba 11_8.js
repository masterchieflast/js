$(document).ready(function () {
    $('#task1').mouseover(function () {
        $(this).css('color', "white");
    })
    $("#task1").mouseout(function () {
        $(this).css('color', "black");
    })
    var ts2 = false;
    $("#task2").click(function () {
        if (ts2) {
            $(this).css('fontSize', "24px");
            ts2 = false;
        } else {
            $(this).css('fontSize', "16px");
            ts2 = true;
        }
    })

    var ts3 = false;
    $("#task3").click(function () {
        if (ts3) {
            $(this).attr('src', "img1.jpg");
            ts3 = false;
        } else {
            $(this).attr('src', "img2.jpg");
            ts3 = true;
        }
    })

    var ts4 = false;
    $("#task4").click(function () {
        if (ts4) {
            $(this).html("<img src='img3.jpg' height='135px' width='333px' alt=''>");
            ts4 = false;
        } else {
            $(this).html("Outer space is not completely empty—it is a hard vacuum containing a low density of particles, predominantly a plasma of hydrogen and helium");
            ts4 = true;
        }
    })
    $('#task5').mouseover(function () {
        $(this).css('width', "400px");
    })
    $("#task5").mouseout(function () {
        $(this).css('width', "333px");
    })

    var ts6 = false;
    $("#task6").dblclick(function () {
        if(ts6){
            $(this).css('border', "4px solid white")
            ts6 = false;
        }else{
            $(this).css('border', "1px solid black")
            ts6 = true;
        }
    })

})