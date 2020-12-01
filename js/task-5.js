"use strict";

let userCountry = prompt('Введите страну доставки:');
let price;
let correctCountry = '';

correctCountry = userCountry[0].toUpperCase() + userCountry.slice(1).toLowerCase();

const countryFirst = 'Китай';
const countrySecond = 'Чили';
const countryThird = 'Австралия';
const countryFour = 'Индия';
const countryFive = 'Ямайка';


switch (correctCountry) {
    case countryFirst:
        price = 100;
        break;

    case countrySecond:
        price = 250;
        break;

    case countryThird:
        price = 170;
        break;

    case countryFour:
        price = 80;
        break;

    case countryFive:
        price = 120;
        break;

    default:
        alert('В вашей стране доставка не доступна');
}

alert(`Доставка в ${correctCountry} будет стоить ${price} кредитов`);