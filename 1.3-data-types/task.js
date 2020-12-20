'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let bodyCredit = amount - contribution;

    if (isNaN(percent)) {
        return `Параметр <Процентная ставка> содержит неправильное значение ${percent}`;
    } 

    if (isNaN(contribution)) {
        return `Параметр <Начальный взнос> содержит неправильное значение ${contribution}`;
    }

    if (isNaN(amount)) {
        return `Параметр <Общая стоимость> содержит неправильное значение ${amount}`;
    }

    let month = (date.getFullYear() - new Date().getFullYear()) * 12 + date.getMonth() - new Date().getMonth();
    let percentMonth = percent / 100 / 12;
    let payment = bodyCredit * (percentMonth + percentMonth / (Math.pow(1 + percentMonth, month) - 1));
    let totalAmount = (payment * month).toFixed(2);

    return totalAmount;
}

function getGreeting(name) {
    return `Привет, мир! Меня зовут ${name ? name : 'Аноним'}`;
}вв