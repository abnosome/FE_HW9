//Калькулятор стоимости товаров
// Создайте функцию, которая принимает цену товара и количество единиц, а затем возвращает общую стоимость.
function totalPrice(count, price){
    const totalCost = count * price;
    return totalCost;
}

console.log(totalPrice(12, 2));

//Проверка на четность: 
//Создайте функцию, которая определяет, является ли число четным и возвращает булевое значение.

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(67)); 
console.log(isEven(32));

//Реверс строки: 
//Напишите функцию, которая принимает строку и возвращает ее в обратном порядке (reverse использовать нельзя).

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }

const string = "Добрый вечер, господа";
const rvrsString = reverseString(string);
console.log(rvrsString);

//Конвертер температуры: 
//Создайте функцию для конвертации температуры из градусов Цельсия в градусы Фаренгейта.

function CelsiusToFahrenheit(celsius){
    const convector = (celsius*9/5)+32;
    return convector;
}

console.log(CelsiusToFahrenheit(12));
