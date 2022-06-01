// Chercher l'intrus

const argTester = () => {

    const arguments = process.argv.slice(2);

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

    console.log(quantity);

}

const main = () => {

    const arguments = argTester();

    if (arguments) {

        getQuantity(arguments[0], arguments);

    }

}

main();

