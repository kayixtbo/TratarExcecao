const readline = require("readline-sync")

var number1,number2,average,test

do {
    test = false
    try {
        number1 = readline.questionInt("\ninforme a primeira nota: ")
        if (number1<0||number1>10) {
            throw new Error ("\nnúmero inválido. Informe um valor entre 0 e 10")
        }
    } catch (error) {
        console.error(error.message);
        test = true
    } finally {
        console.log("\nAtualizando informações...");
    }

} while (test);

do {
    test = false
    try {
        number2 = readline.questionInt("\ninforme a segunda nota: ")
        if (number2<0||number2>10) {
            throw new Error ("\nnúmero inválido.")
        }
    } catch (error) {
        console.error(error.message);
        test = true
    } finally {
        console.log("\nAtualizando informações...");
    }

} while (test);
average = (number1+number2)/2
console.log(`\nA média entre ${number1} e ${number2}é igual a ${average.toFixed(2)}`);