// 26. Создать переменную “age_1” и присвоить ей значение 10
// 27. Создать переменную “age_2” и присвоить ей значение 18
// 28. Создать переменную “age_3” и присвоить ей значение 60
// 29. Создать if в котором будите проверять значение переменной age_1
// 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// 33. Иначе выводите “Technical work”.
// HW_JS_1*
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

function checkAge(age_1, age_2, age_3){
    if (age_1 < age_2) { 
        console.log('You don’t have access cause your age is ' + age_1 + ' It’s less then ' + age_2) 
    } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome  !')
    }else if (age_1 > age_3) {
        console.log('Keep calm and look Culture channel')
    }else {
        console.log('Technical work')
    }
};
checkAge(61, 18, 60)

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

let age_1 = 10
let age_2 = 18
let age_3 = 60

const checkAge = function(age){
    if (typeof age == 'number'){
    if (age < age_2) { 
        console.log('You don’t have access cause your age is ' + age + ' It’s less then ' + age_2) 
    } else if (age >= age_2 && age < age_3) {
        console.log('Welcome  !')
    }else if (age > age_3) {
        console.log('Keep calm and look Culture channel')
    }else {
        console.log('Technical work')
    }
    }else {
        console.log('Error! It is not a number!')
         }
    };
checkAge(59)
checkAge('twenty')

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age){
   if (+age) {
    if (age < age_2) { 
        console.log('You don’t have access cause your age is ' + age + ' It’s less then ' + age_2) 
    } else if (age >= age_2 && age < age_3) {
        console.log('Welcome  !')
    }else if (age > age_3) {
        console.log('Keep calm and look Culture channel')
    }else {
        console.log('Technical work')
    }
    }else {
        console.log('Error! It is not a number!')
         }
    };
checkAge(10)
checkAge('23+')

// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

let agePrompt = prompt('Enter your age')
checkAge(agePrompt)