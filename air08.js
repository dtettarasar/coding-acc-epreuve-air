// Mélange deux tableaux triés 

const argTester = () => {

    const argument = process.argv.slice(2);
    const intPattern = /^-?[0-9]+$/;
    const errorMsg = "Veuillez passer en argument deux séries de nombres entiers, séparées par 'fusion'.\nExemple: node air07.js 10 20 30 fusion 15 25 35";

    let switchToSndArr = false;
    const data = {
        arrOne: [],
        arrTwo: []
    }

    if (argument.length < 3 || getQuantity("fusion", argument) !== 1) {
        console.log(errorMsg);
        return false;
    }

    for (let i = 0; i < argument.length; i++) {

        if (intPattern.test(argument[i]) || argument[i] === "fusion") {

            if (argument[i] === "fusion") {
                switchToSndArr = true;
            } else if (!switchToSndArr) {
                data.arrOne.push(parseInt(argument[i]));
            } else {
                data.arrTwo.push(parseInt(argument[i]));
            }

        } else {
            console.log(errorMsg);
            return false;
        }

    }

    return data;

}

// Identifier le nombre de fois où une string est présente dans un array
const getQuantity = (str, array) => {

    let quantity = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === str) {
            quantity++;
        }

    }

    return quantity;

}

const sortedFusion = (array1, array2) => {

    const fullArr = [];
    const length = array1.length < array2.length ? array2.length : array1.length;
    console.log("highest length: " + length);

    console.log(array1);
    console.log(array2);
}



const main = () => {

    const argument = argTester();

    if (argument) {
        sortedFusion(argument.arrOne, argument.arrTwo);
    }

}

main();