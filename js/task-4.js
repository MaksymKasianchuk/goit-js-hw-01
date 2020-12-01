"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let quantityOfDroids = prompt('Введите количество дроидов для покупки:');
let message;
if (quantityOfDroids === null) {
    message = 'Отменено пользователем!'
}
else {
    let totalPrice = quantityOfDroids * pricePerDroid;
    if(totalPrice > credits){
        message = 'Недостаточно средств на счету!'
    }
    else if (totalPrice <= credits) {
        credits -= totalPrice;
        message = `Вы купили ${quantityOfDroids} дроидов, на счету осталось ${credits} кредитов.`;
    }
}
console.log(message);