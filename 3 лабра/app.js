"use strict"
function arr(){
    let arr = [];
    arr[0] = 6 * Math.pow(Math.PI, 2) + 3 * Math.pow(Math.E, 8);
    arr[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.pow(Math.E, 3);
    arr[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
    arr[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    for(let i = 0; i < 4; i++){
        if(arr[i] === max){
            alert("максимальное число: " + max + "его номер в массиве: " + i);
        }
    }
    for(let i = 0; i < 4; i++){
        if(arr[i] === min){
            alert("минимальное число: " + min + "его номер в массиве: " + i);
        }
    }
}
function task2() {
    let all = ["pow", "pop", "push", "shift", "round", "floor", "sline", "sort", "concat", "рор", "push", "shift", "sort"];
    let all_arr = new arr(Object.getOwnPropertyNames(Array.prototype));
    let all_math = new arr(Object.getOwnPropertyNames(Math));

    let ans1 = all.filter(ans => all_arr.has(ans));
    let ans2 = all.filter(ans => all_math.has(ans));

    ans1.unshift("replace");
    ans2.push("exp");

    document.write("<div style='font-family: Agency FB, serif; color: #29627e; font-size: 20px'>")
    document.write("исходный массив: " + all + "<br/>");
    document.write("первый массив array : " + ans1 + "<br/>");
    document.write("второй массив math : " + ans2 + "<br/>" + "<br/>");
    document.write("размер исходного массива : " + all.length + "<br/>");
    document.write("размер массива array : " + ans1.length + "<br/>");
    document.write("размер второго массива math : " + ans2.length + "<br/>");
    document.write("</div>")
}
function task3(){
    let myName = String("Другаков Денис Дмитриевич");
    document.write("<div style='font-family: Agency FB, serif; color: #29627e; font-size: 20px'>")
    document.write("длинна строки с Фамилия Имя Отчество: " + myName.length + "<br/>");
    document.write(myName.toUpperCase() , "<br/>");
    document.write(myName.toLowerCase() , "<br/>");
    document.write(myName.concat(myName.toUpperCase(), myName.toLowerCase(), "<br/>"));
    document.write(myName.replace( myName  , "ДДД <br/>" ));
    document.write("</div>");
}
function task4(){
    let x = new Date();
    document.write("<table border = 3px>");
    document.write("<tr>");
    document.write("<td>" + "Год" + "</td>");
    document.write("<td>" + x.getFullYear() + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Месяц" + "</td>");
    document.write("<td>" + x.getMonth() + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "День" + "</td>");
    document.write("<td>" + x.getDay() + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Час" + "</td>");
    document.write("<td>" + x.getHours() + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Минуты" + "</td>");
    document.write("<td>" + x.getMinutes() + "</td>");
    document.write("</tr>");

    document.write("<tr>");
    document.write("<td>" + "Секунды" + "</td>");
    document.write("<td>" + x.getSeconds() + "</td>");
    document.write("</tr>");
}