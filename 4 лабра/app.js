"use strict"
function Gruppa(n, spec, kolich) {
//Свойства(номер, специальность, количество)
    this.n = n;
    this.spec = spec;
    this.kolich = kolich;
//Метод (добавить в группу k студентов)
    this.add_stud = function add_stud(k) {
        this.kolich += k;
        document.getElementById("task11").innerHTML = ("Вгруппу " + this.n + " добавили: " + k + " студентов.<br\>");
    }
    this.sub_stud = function sub_stud(j) {
        this.kolich -= j;
        document.getElementById("task11").innerHTML += ("из группы " + this.n + " украли: " + j + " студентов.<br\>");
    }
}

function Student(name, surname, physics, math, IT) {
    this.name = name;
    this.surname = surname;
    this.physics = physics;
    this.math = math;
    this.IT = IT;

    this.show_fio = function show_fio() {
        alert(this.name + " " + this.surname);
    }
    this.sr_bal = function sr_bal() {
        let scribal = (this.IT + this.physics + this.math) / 3;
        document.getElementById("task22").innerHTML += ("средний балл: " + this.name + " " + scribal + "<br\>");
    }
}

function znach() {
    return 5;
}

function task1() {
//Теперь можно создавать экземпляры объекта
    let gr1 = new Gruppa(1, "ИСиТ", 31);
    let gr2 = new Gruppa(2, "ПОИТ", 31);
    let gr3 = new Gruppa(3, "разукрашка", 31);
    let gr4 = new Gruppa(4, "мобилки", 31);
//Вызов метода созданного объекта (добавить 2 студента)
    gr1.add_stud(4);
    gr2.add_stud(7);
    gr3.add_stud(23);
    gr4.add_stud(11);
//C помощью prototype добавим объекту свойство kurs,
//экземпляры объекта будут иметь это свойство
    Gruppa.prototype.kurs = this.kurs;
    gr1.kurs = 1;
    gr2.kurs = 2;
    gr3.kurs = 1;
    gr4.kurs = 2;
    document.getElementById("task11").innerHTML += ("номер группы: " + gr1.n + " специальность: " + gr1.spec + " в группе обучается на данный момент: " + gr1.kolich + " курс " + gr1.kurs + ".<br\>");
    gr1.sub_stud(20);
    document.getElementById("task11").innerHTML += ("номер группы: " + gr1.n + " специальность: " + gr1.spec + " в группе обучается на данный момент: " + gr1.kolich + " курс " + gr1.kurs + ".<br\><br\>");
    document.getElementById("task11").innerHTML += ("номер группы: " + gr2.n + " специальность: " + gr2.spec + " в группе обучается на данный момент: " + gr2.kolich + " курс " + gr2.kurs + ".<br\>");
    gr2.sub_stud(13);
    document.getElementById("task11").innerHTML += ("номер группы: " + gr2.n + " специальность: " + gr2.spec + " в группе обучается на данный момент: " + gr2.kolich + " курс " + gr2.kurs + ".<br\><br\>");
    document.getElementById("task11").innerHTML += ("номер группы: " + gr3.n + " специальность: " + gr3.spec + " в группе обучается на данный момент: " + gr3.kolich + " курс " + gr3.kurs + ".<br\>");
    document.getElementById("task11").innerHTML += ("номер группы: " + gr4.n + " специальность: " + gr4.spec + " в группе обучается на данный момент: " + gr4.kolich + " курс " + gr4.kurs + ".<br\><br\>");
}

function task2() {
    let sd1 = new Student("Крош", "Моркорович", 4, 6, 3);
    let sd2 = new Student("Лосяш", "Зубрилович", 9, 10, 10);
    let sd3 = new Student("Кар", "Карыч", 8, 9, 4);
    sd1.show_fio();
    sd2.show_fio();
    sd3.show_fio();
    Student.prototype.lab_js = this.lab_js;
    sd1.lab_js = 3;
    sd2.lab_js = 11;
    sd3.lab_js = 1;

    document.getElementById("task22").innerHTML = ("имя: " + sd1.name + " фамилия: " + sd1.surname + " оценнка по физике: " + sd1.physics + " оценка по матиматике: " + sd1.math + " оценка по информатике: " + sd1.IT + " сдано лаб по js: " + sd1.lab_js + "<br\>");
    document.getElementById("task22").innerHTML += ("имя: " + sd2.name + " фамилия: " + sd2.surname + " оценнка по физике: " + sd2.physics + " оценка по матиматике: " + sd2.math + " оценка по информатике: " + sd2.IT + " сдано лаб по js:" + sd2.lab_js + "<br\>");
    document.getElementById("task22").innerHTML += ("имя: " + sd3.name + " фамилия: " + sd3.surname + " оценнка по физике: " + sd3.physics + " оценка по матиматике: " + sd3.math + " оценка по информатике: " + sd3.IT + " сдано лаб по js:" + sd3.lab_js + "<br\>");

    sd1.sr_bal();
    sd2.sr_bal();
    sd3.sr_bal();
}

function task3() {
    //let all_arr = new arr(Object.getOwnPropertyNames(Array.prototype));
    //let all_math = new arr(Object.getOwnPropertyNames(Math));

    let massiv = [458, 54984, 54654, 46, 234, 6876, 646];
    let gr1 = new Gruppa(1, "ИСиТ", 31);
    let sd1 = new Student("Крош", "Моркорович", 4, 6, 3);
	let as = document.getElementById("task33");
    as.innerHTML = ("Исходный массив: " + massiv + "<br\>");
    delete massiv[3];
    as.innerHTML += ("Полученный массив: " + massiv + "<br\>");

    as.innerHTML += ("2 в массиве: " + (2 in massiv) + "<br\>");
    as.innerHTML += ("surname в Student: " + ("surname" in sd1) + "<br\>");
    as.innerHTML += ("number в Gruppa: " + ("number" in gr1) + "<br\>");

    as.innerHTML += ("Является ли massiv массивом: " + (massiv instanceof Array) + "<br\>");
    as.innerHTML += ("Является ли Gruppa объектом: " + (Gruppa instanceof Object) + "<br\>");
    as.innerHTML += ("Является ли Student строкой: " + (Student instanceof String) + "<br\>");
    let mystring = new String;
    as.innerHTML += ("Является ли mystring строкой: " + (mystring instanceof String) + "<br\>");

    as.innerHTML += ("<br/>znach: " + typeof znach + "<br\>");
    as.innerHTML += ("Gruppa: " + typeof Gruppa + "<br\>");
    as.innerHTML += ("add_stud: " + typeof gr1.add_stud + "<br\>");
    as.innerHTML += ("sub_stud: " + typeof gr1.sub_stud + "<br\>");
    as.innerHTML += ("Student: " + typeof Student + "<br\>");
    as.innerHTML += ("output: " + typeof +"<br\>");
    as.innerHTML += ("score: " + typeof sd1.sr_bal + "<br\>");
    as.innerHTML += ("s1.name: " + typeof sd1.name + "<br\>");
    as.innerHTML += ("gr2.n: " + typeof gr1.n + "<br\>");
    as.innerHTML += ("gr3.spec: " + typeof gr1.spec + "<br\>");
    as.innerHTML += ("s1.lab_js: " + typeof sd1.lab_js + "<br\>");
    as.innerHTML += ("s3.physics: " + typeof sd1.physics + "<br\>");

}