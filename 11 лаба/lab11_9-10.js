// 1 Задание - Перетаскивание мышию
var a=document.getElementById('myimg');

$("#myimg").mousedown(function(e) {
    $(document).mousemove(function(e){
            $("#myimg").css('left', e.pageX - a.offsetWidth / 2 + 'px' );
            $("#myimg").css('top', e.pageY - a.offsetHeight / 2 + 'px');
        }
    )
    $("#myimg").on("mouseup", function() {
            document.onmousemove = null;
        }
    )
    $("#myimg").on('dragstart',function() {
        return false;
    })
})

var text=document.getElementById('txt');

$("#txt").mousedown(function(e) {
    $(document).mousemove(function(e){
            $("#txt").css('left', e.pageX - text.offsetWidth / 2 + 'px' );
            $("#txt").css('top', e.pageY - text.offsetHeight / 2 + 'px');
        }
    )
    $("#txt").on("mouseup", function() {
            document.onmousemove = null;
        }
    )
    $("#txt").on('dragstart',function() {
        return false;
    })
})
//2 Задание - Движение по прямой

$( "#microsoft" ).click(function() {
    $( "#microsoft" ).first().animate({left: 500},1000);
});


// 3 Задание - Движение по кривой
$("#ill").click (function() {
    $("#ill").animate ({marginLeft : 100, marginTop : 160}, 700);
    $("#ill").animate ({marginLeft : 150,marginTop : -5}, 700);
    $("#ill").animate ({marginLeft : 200, marginTop:160}, 700);
    $("#ill").animate ({marginLeft : 250, marginTop:-5}, 700);
    $("#ill").animate ({marginLeft : 300, marginTop:160}, 700);
    $("#ill").animate ({marginLeft : 350, marginTop : -5}, 700);
    $("#ill").animate ({marginLeft : 400, marginTop : 160}, 700);

})



// 4-5 Задание -Графики
$(document).ready(function() {
    $('#graph').click(function() {
        let fnum = document.getElementsByClassName('func');
        console.log(fnum);
        var canvas=document.getElementById('c1');
        let ctx = canvas.getContext('2d'); /* двумерное построение ctx - context*/
        var timer;
        var color = document.forms[0].color.value;
        console.log(color);

        for (var i = 0; i < fnum.length; i++) {
            if (fnum[i].checked) {

                //x^2
                if (fnum[i].value == 'f1')
                {
                    var x=0;
                    var move=setInterval(
                        function draw2()
                        {
                            y=200-0.08*Math.pow(x-200, 2);
                            x=x+0.3;
                            ctx.fillStyle=color;
                            ctx.fillRect(x,y,2,2);
                        }, 5);
                }

                //x^3
                if (fnum[i].value == 'f2')
                {
                    var x=0;
                    var move=setInterval(
                        function draw3()
                        {
                            y=200-0.002*Math.pow(x-200, 3);
                            x=x+0.3;
                            ctx.fillStyle=color;
                            ctx.fillRect(x,y,2,2);
                        }, 1);
                }

                //sin(x)
                if (fnum[i].value == 'f3') {
                    var x=0;
                    var move=setInterval(
                        function drawSin()
                        {
                            y=200+10*Math.sin(0.1*(x-200));
                            x=x+0.3;
                            ctx.fillStyle=color;
                            ctx.fillRect(x,y,2,2);
                        }, 5);
                }

                //cos(x)
                if (fnum[i].value == 'f4') {
                    var x=0;
                    var move=setInterval(
                        function drawCos()
                        {
                            y=200+10*Math.cos(0.1*(x-200));
                            x=x+0.3;
                            ctx.fillStyle=color;
                            ctx.fillRect(x,y,2,2);
                        }, 5);
                }
            }
        }
    })
})
