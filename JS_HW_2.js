// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой

function checkPassword(input_text){
    if (input_text === ''){
        console.log('Error! The input text is empty')
        } else if (typeof input_text != 'string'){
            console.log('Error! It is not a string!')
        } else if (input_text.length < 5){
            console.log('Error! The lenght of input text must be 5 or more symbols!')
        } else if (input_text.length > 64) {
            console.log('Error! The lenght of input text must be no more 64 symbols!')
        } else if (!/[a-z]/.test(input_text)){
            console.log('Error! The input text must include letters!')
        } else if (!/[A-Z]/.test(input_text)){
            console.log('Error! The input text must include at least one capital letter!')
        } else if (!/[0-9]/.test(input_text)){
            console.log('Error! The input text must include numbers!')
        } else if (!/@/.test(input_text)){
            console.log('Error! The input text must include @!')
        }
    else {
        console.log('Success registranion!!!')
    }
}
checkPassword('12345qW@')