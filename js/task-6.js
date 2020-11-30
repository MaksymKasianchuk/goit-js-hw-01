"use strict";

let input;
let total = 0;
 
while (input !== null) {
    input = prompt('Введите число');
    if (input !== null) {
        let number = (Number(input));
         if (Number.isNaN(number)) {
            alert('Было введено не число, попробуйте еще раз');
        }
        else {
            total += number;
        }
    }
}
alert(`Общая сумма чисел равна ${total}`);