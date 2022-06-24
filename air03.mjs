// Chercher l'intrus

// Récupérer les arguments passés à l'execution de la fonction
const argTester = () => {

    const args = process.argv.slice(2);

    const data = [];

    if (args.length < 3) {
        console.log("Veuillez passer au moins 3 chaînes de caractère en argument");
        console.log("node air03.mjs 'Muse' 'Queens' 'Arctic Monkeys' 'Queens' 'Muse' 'Motörhead'");
        return false;
    }

    return args;

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

// Identifier les strings qui ne sont pas présentes au moins 2 fois dans un array
const getIntruders = (array) => {

    const intruders = [];

    for (let i = 0; i < array.length; i++) {
        const strQty = getQuantity(array[i], array);

        if (strQty === 1) {
            intruders.push(array[i]);
        }
    }

    return intruders;

}

// Afficher résultat
const main = () => {

    const args = argTester();

    if (args) {

        const intruders = getIntruders(args);

        for (let i = 0; i < intruders.length; i++) {
            console.log(intruders[i]);
        }

    }

}

//Get file name
const args = process.argv;
const arr = args[1].split('/');

// Execute main if we launch the script directly in terminal
if (arr[arr.length - 1] === "air03.mjs") {
    main();
}

