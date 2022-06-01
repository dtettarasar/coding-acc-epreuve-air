// Chercher l'intrus

const argTester = () => {

    const arguments = process.argv.slice(2);

    if (arguments.length < 3) {
        console.log("Veuillez passer au moins 3 chaînes de caractère en argument");
        console.log("node air03.js 'Muse' 'Queens' 'Artic Monkeys' 'Queens' 'Muse' 'Motörhead'");
        return false;
    }

    console.log(arguments);

}

argTester();

