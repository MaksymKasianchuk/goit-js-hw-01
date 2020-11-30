"use strict";

let userCountry = prompt('Введите страну доставки:');
let price;
let correctCountry = '';
for (let i = 0; i < userCountry.length; i++) {
    if (i === 0) {
        correctCountry += userCountry[i].toUpperCase();
    }
    else {
        correctCountry += userCountry[i].toLowerCase();
    }
}

switch (correctCountry) {
    case 'Китай':
        price = 100;
        break;

    case 'Чили':
        price = 250;
        break;

    case 'Австралия':
        price = 170;
        break;

    case 'Индия':
        price = 80;
        break;

    case 'Ямайка':
        price = 120;
        break;

    default:
        alert('В вашей стране доставка не доступна');
}

alert(`Доставка в ${correctCountry} будет стоить ${price} кредитов`);