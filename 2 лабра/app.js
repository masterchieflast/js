"use strict"
/*01*/
function Hello() {
    alert("Вас приветствует учебный центр");
}
function Name() {
    let name = prompt("Введите имя");
    alert("Добро пожаловать на наши курсы, " + name);
}
function Course() {
    if(confirm("Хотите стать Web-дизайнером?")){
        alert("Учите стили CSS и JavaScript!");
    }else{
        alert("Упускаете время!");
    }
}
/*02*/
function PlusN() {
    let a = +prompt("первое число");//+ преобразует в числовой формат
    let b = +prompt("второе число");
    let ans = a + b;
    ans = String(ans);
    document.getElementById("task2-1").innerHTML =": " + ans;
    //document.write(ans);
}
function PlusS() {
    let a = prompt("первая строка");
    let b = prompt("вторая строка");
    document.getElementById("task2-2").innerHTML =": " + a + b;
    //document.write(a + b);
}
function PlusNS() {
    let a = +prompt("число");
    let b = prompt("строка");
    document.getElementById("task2-3").innerHTML =": " + a + b;
    //document.write(a + b);
}
function PlusSN() {
    let a = prompt("строка");
    let b = +prompt("число");
    document.getElementById("task2-4").innerHTML =": " + a + b;
    //document.write(a + b);
}
function Out() {
    alert("Результатом сложения строки и числа всегда будет строка");
    document.getElementById("task2-5").innerHTML = ": Результатом сложения строки и числа всегда будет строка";
}
/*03*/
function Brain() {
    let a = 6;
    let b = 4;
    let ans1 = (a*8 + b/2)*7 - 1;
    alert("первое число: " + ans1);
    let c = 11;
    let d = 3;
    let ans2 =(c * 6 + d*40)/2 +1;
    alert("второе число: " + ans2);
    let ans = ans1 % ans2;
    ans = String(ans);

    document.getElementById("task3").innerHTML = ": остаток от деления: " + ans;
    //document.write("остаток от деления: " + ans);
}
/*04*/
function Operator() {
    let a = +prompt("число для операций");
    if((a < 20 || a > 40) && +a !== 15  && a % 5 === 0){
        alert("Правильное значение");
    }else{
        alert("Не правильное значение");
    }
}
/*05*/
function condition() {
    let a = +prompt("первое число");
    let b = +prompt("второе число");
    if (a > b){
        alert("первое число больше")
    }else if (a < b){
        alert("первое число меньше")
    }else{
        alert("числа равны")
    }

    //(a < b) ? alert("первое число меньше"):alert("первое число больше");
}
/*06*/
function Week() {
    //let day = prompt("сколько дней прошло с понедельника");
    let day = new Date();
    day = day.getDay();
    switch (day) {
        case 1:
            alert("Понедельник");
            break;
        case 2:
            alert("Вторник");
            break;
        case 3:
            alert("Среда");
            break;
        case 4:
            alert("Четверг");
            break;
        case 5:
            alert("Пятница");
            break;
        case 6:
            alert("Суббота");
            break;
        case 7:
            alert("Воскресенье");
            break;
    }
}
/*07*/
function DiV(x, y){
    if (y === 0){
        throw new You_Cannot_Divide_By_Zero();
    }
    return Number(x / y);
}
function error(){
    try
    {
        let a = +prompt("делимое");
        let b = +prompt("делитель");
        let c = DiV(a,b);
        alert("частное: " + c);
    }
    catch (e)
    {
        alert("Ошибка :" + e.message);
    }
}

/*!2!*/

/*02*/

function multi(){
    let a = +prompt("введите первое число");
    let b = +prompt("введите первое число");
    document.write("<table border = 3px>");
    for (let i = 1; i <= a; i++){
        document.write("<tr>");
        for (let j = 1; j <= b; j++){
            document.write("<td>" + i * j + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function multi2(){

    let a = +prompt("введите первое число");
    let b = +prompt("введите первое число");
    document.write("<table border = 3px>");
    document.write("<tr>");
    document.write("<td>" + "Радиус" + "</td>");
    document.write("<td>" + "Площадь круга" + "</td>");
    document.write("<td>" + "Длина окружности" + "</td>");
    document.write("</tr>");

    do{
        document.write("<tr>");
        document.write("<td>" + a + "</td>");
        document.write("<td>" + Math.round(a * a * Math.PI) + "</td>");
        document.write("<td>" + Math.round(2 * a * Math.PI) + "</td>");
        a = a * 10 + 3;
        a /= 10;
        document.write("</tr>");
    }while (a < b);

    document.write("<tr>");
    document.write("<td>" + b + "</td>");
    document.write("<td>" + Math.round(b * b * Math.PI) + "</td>");
    document.write("<td>" + Math.round(2 * b * Math.PI) + "</td>");
    document.write("</tr>");

    document.write("</table>");
}

function multi3(){
    let a = prompt("введите дробное число")
    let b = +prompt("введите целое число")
    a = parseFloat(a);
    document.write("<table border = 3px>");
    document.write("<tr>");
    document.write("<td>" + "Число" + "</td>");
    document.write("<td>" + "Метод" + "</td>");
    document.write("<td>" + "Результат" + "</td>");
    document.write("<td>" + "Описание метода" + "</td>");
    document.write("</tr>");
    //1
    document.write("<tr>");
    document.write("<td>" + a + "</td>");
    document.write("<td>" + "toString(16)" + "</td>");
    document.write("<td>" + a.toString(16)  + "</td>");
    document.write("<td>" + "Строковое представление числа в 16-ричной системе счисления" + "</td>");
    document.write("</tr>");
    //
    document.write("<tr>");
    document.write("<td>" + b + "</td>");
    document.write("<td>" + "toString(16)" + "</td>");
    document.write("<td>" + b.toString(16)  + "</td>");
    document.write("<td>" + "Строковое представление числа в 16-ричной системе счисления" + "</td>");
    document.write("</tr>");
    //2
    document.write("<tr>");
    document.write("<td>" + a + "</td>");
    document.write("<td>" + "toExponential(5)" + "</td>");
    document.write("<td>" + a.toExponential(5) + "</td>");
    document.write("<td>" + "представляет число в экспоненциальной форме с 5-тью знаками после точки" + "</td>");
    document.write("</tr>");
    //
    document.write("<tr>");
    document.write("<td>" + b + "</td>");
    document.write("<td>" + "toExponential(5)" + "</td>");
    document.write("<td>" + b.toExponential(5) + "</td>");
    document.write("<td>" + "представляет число в экспоненциальной форме с 5-тью знаками после точки" + "</td>");
    document.write("</tr>");
    //3
    document.write("<tr>");
    document.write("<td>" + a + "</td>");
    document.write("<td>" + "toFixed(7)" + "</td>");
    document.write("<td>" + a.toFixed(7) + "</td>");
    document.write("<td>" + "представляет чсило в форме с 7-ю цифрами после точки" + "</td>");
    document.write("</tr>");
    //
    document.write("<tr>");
    document.write("<td>" + b + "</td>");
    document.write("<td>" + "toFixed(7)" + "</td>");
    document.write("<td>" + b.toFixed(7) + "</td>");
    document.write("<td>" + "представляет чсило в форме с 7-ю цифрами после точки" + "</td>");
    document.write("</tr>");
    //4
    document.write("<tr>");
    document.write("<td>" + a + "</td>");
    document.write("<td>" + "toPrecision(4)" + "</td>");
    document.write("<td>" + a.toPrecision(4) + "</td>");
    document.write("<td>" + "представляет число с 4-мя значищими цифрами" + "</td>");
    document.write("</tr>");
    //
    document.write("<tr>");
    document.write("<td>" + b + "</td>");
    document.write("<td>" + "toPrecision(4)" + "</td>");
    document.write("<td>" + b.toPrecision(4) + "</td>");
    document.write("<td>" + "представляет число с 4-мя значищими цифрами" + "</td>");
    document.write("</tr>");

    document.write("</table>");
}
