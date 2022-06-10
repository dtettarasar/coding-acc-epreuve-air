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
                data.arrOne.push(argument[i]);
            } else {
                data.arrTwo.push(argument[i]);
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



const main = () => {

    console.log(argTester());

}

main();