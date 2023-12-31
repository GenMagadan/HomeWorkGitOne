
/*
1. Написать функцию, которая принимает строку и выводит статистику о ней: количество букв,
   количество цифр и количество других знаков.
*/
function statisticsString(str) {
   let newString = "";
   for (let a = 0; a < str.length; a++) {
      if (str[a] != ' ') {
         newString += str[a];
      }
   }
   let letters = 0;
   let numbers = 0;
   let symbols = 0;
   let arrSymb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~', ',', '.'];
   let arrNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
   for (let i = 0; i < newString.length; i++) {
      if (arrSymb.includes(newString[i].toLowerCase())) {
         symbols++;
      }
      if (arrNum.includes(newString[i].toLowerCase())) {
         numbers++;
      }
      letters = newString.length - symbols - numbers;
   }
   process.stdout.write(`Букв в строке - ${letters}\n`);
   process.stdout.write(`Цифр в строке - ${numbers}\n`);
   process.stdout.write(`Символов в строке - ${symbols}\n`);
   process.stdout.write(`Пробелов в строке - ${str.length - newString.length}\n`);
}
statisticsString("Мир вам, братья и сёстры в 2023г.");
// Букв в строке - 21
// Цифр в строке - 4
// Символов в строке - 2
// Пробелов в строке - 6

/*
2. Написать функцию возведения числа в степень.
*/
function powerNumber(number, power) {
   if (power != 1) {
      return number * powerNumber(number, power - 1);
   } else {
      return number;
   }
}
// alert(powerNumber(3, 6)); /*729*/

/*
3. Написать функцию поиска наибольшего общего делителя.
*/
function commonDivisor(number1, number2) {
   if (number2 > number1) {
      return commonDivisor(number2, number1);
   }
   if (!number2) {
      return number1;
   }
   return commonDivisor(number2, number1 % number2);
}
// alert(commonDivisor(99, 44)); /*11*/
// alert(commonDivisor(18, 99)); /*9*/