"use strict"
var wb, denis;
function task1() {
    wb = window.open("../5 лабра/index.html");
}

function task2() {
    wb.window.close()
}

function task3() {
    denis = window.open("about:blank");
}

function task4() {
    denis.document.write("Привет &#129322; &#128541; &#129297; ");
}

function task5() {
    document.getElementById("task55").innerHTML = ("<table border=1><th>свойство</th><th>значение</th><tr><td>1. всю информацию о браузере пользователя</td><td>"+navigator.userAgent+"</td></tr><tr><td>2. версию браузера</td><td>"+navigator.appVersion+"</td></tr><tr><td>3. назване браузера</td><td>"+navigator.appName+"</td></tr><tr><td>4. кодовое название браузера</td><td>"+navigator.appCodeName+"</td></tr><tr><td>5. ОС, которую использует пользователь</td><td>"+navigator.platform+"</td></tr><tr><td>6. включена ли поддержка Java в браузере</td><td>"+navigator.javaEnabled()+"</td></tr><tr><td>7. ширину и высоту экрана</td><td>ширина экрана: "+screen.width+", высота экрана: "+screen.height+"</td></tr><tr><td>8. глубину цвета</td><td>"+screen.colorDepth+"</td></tr><tr><td>9. URL, которые были посещены в данном окне браузера</td><td>"+history+"</td></tr><tr><td>10. URL текущего документа</td><td>"+location.href+"</td></tr><tr><td>11. путь к загруженному документу</td><td>"+location.pathname+"</td></tr><tr><td>12. имя домена загруженного документа</td><td>"+location.host+"</td></tr>");
    document.getElementById("task55").innerHTML += ("</table>");
}