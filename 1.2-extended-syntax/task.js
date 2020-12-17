'use strict'

function getResult(a, b, c) {
    let x = [];
    let D = b**2 - 4 * a * c;

    if (D > 0) {
        x.push((-b + Math.sqrt(D)) / 2 * a);
        x.push((-b - Math.sqrt(D)) / 2 * a);
    } else if (D === 0) {
        x.push(-b / (2 * a));
    } else {
        x.push('Корней нет');
    }

    return x;
}

function getAverageMark(marks) {
    let sum = 0;
    
    if (marks.length == '') {
        return 0;
    } else if (marks.length > 5) {
        console.log('Больше допустимого');
        marks.splice(5);
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    return sum / marks.length;
}

function askDrink(name,dateOfBirthday) {

    let result = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if (result > 18) {
        return `Не желаете ли олд-фэшн ${name}?`;
    } else {
        return `“Сожалею, ${name}, но я не могу вам продать алкоголь.`;
    }
}