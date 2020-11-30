"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let quantityOfDroids = prompt('Введите количество дроидов для покупки:');
if (quantityOfDroids === null) {
    console.log('Отменено пользователем!');
}
else {
    let totalPrice = quantityOfDroids * pricePerDroid;
    if(totalPrice > credits){
        console.log('Недостаточно средств на счету!');
    }
    else if (totalPrice <= credits) {
        credits -= totalPrice;
        console.log(`Вы купили ${quantityOfDroids} дроидов, на счету осталось ${credits} кредитов.`);
    }
    
}