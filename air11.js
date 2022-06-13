// Afficher une pyramide

const argTester = () => {

    const arguments = process.argv.slice(2);
    const intPattern = /^[0-9]+$/;
    const data = {};
    const errorMsg = "Veuillez passer en argument un caractère et un nombre entier positif.\nExemple: node air11.js o 5";

    if (arguments.length !== 2 || arguments[0].length !== 1 || !intPattern.test(arguments[1])) {
        console.log(errorMsg);
        return false;
    }

    data.charVal = arguments[0];
    data.intVal = parseInt(arguments[1]);

    return data;

}

const buildPyramid = (char, int) => {
    // console.log(char);
    // console.log(int);

    let charAmount = 1;
    let spaceAmount = int - 1;

    for (let i = 0; i < int; i++) {

        const line = [];
        const spaceArr = [];

        for (let a = 0; a < spaceAmount; a++) {
            spaceArr.push(" ");
        }
        
        // console.log("char: " + charAmount);
        // console.log("space: " + spaceAmount);

        line.push(spaceArr.join(''));

        for (let j = 0; j < charAmount; j++) {

            line.push(char);

        }

        console.log(line.join(''));

        charAmount += 2;
        spaceAmount -= 1;

    }
}

const main = () => {
    
    const argument = argTester();

    if (argument) {
        const pyramid = buildPyramid(argument.charVal, argument.intVal);
    }

}

main();