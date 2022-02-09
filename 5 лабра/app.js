"use strict"
function task1() {
    let all = "количество тегов: " + document.all.length + "\n";
    for (let i = 0; i < document.all.length; i++) {
        all += "id, tag = " + i + " " + document.all[i].tagName + "\n";
    }
    console.log(all);
}

function task2() {
    let all_child = "количество дочерних тегов: " + document.childNodes.length + "\n";
    for (let i = 0; i < document.body.childNodes.length; i++) {
        all_child += "id, tag = " + i + " " + document.body.childNodes[i].tagName + "\n";
    }
    console.log(all_child);
}

function task3() {
    let first = document.querySelectorAll("span");
    console.log(typeof(first));
    alert("Первый элемент span " + first[0].innerHTML + "\n");
    let second = document.getElementsByTagName("span");
    alert("Первый элемент span " + second[0].innerHTML + "\n");
    let third = document.getElementById("id");
    alert("Первый элемент span " + third.innerHTML + "\n");
}

function task4() {
    let average_marks = 0;
    let all_mark = document.getElementsByClassName('mark');
    for (let i = 0; i < all_mark.length; i++) {
        average_marks += parseInt( all_mark[i].innerHTML);
    }
    average_marks = average_marks/5;
    alert(average_marks);

    let all_2 = document.getElementsByTagName('span');
    all_2[1].innerHTML = "<p style='color: white'>" + all_2[1].innerHTML + " средний балл  = " + average_marks + "</p>";
}

//document.getElementById("task11").innerHTML =();
