// Chercher l'intrus

const argTester = () => {

    const arguments = process.argv.slice(2);

    const data = [];

    if (arguments.length < 3) {
        console.log("Veuillez passer au moins 3 chaînes de caractère en argument");
        console.log("node air03.js 'Muse' 'Queens' 'Artic Monkeys' 'Queens' 'Muse' 'Motörhead'");
        return false;
    }

    return arguments;

}

const getQuantity = (str, array) => {

    let quantity = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === str) {
            quantity++;
        }

    }

    return quantity;

}

const getIntruders = (array) => {

    const intruders = [];

    for (let i = 0; i < array.length; i++) {
        strQty = getQuantity(array[i], array);

        if (strQty === 1) {
            intruders.push(array[i]);
        }
    }

    console.log(intruders);

}

const main = () => {

    const arguments = argTester();

    if (arguments) {

        getIntruders(arguments);

    }

}

main();

