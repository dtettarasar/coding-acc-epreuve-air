// Split en fonction

const argTester = () => {
    const args = process.argv.slice(2);

    if (args.length !== 2) {

        console.log("Veuillez passer une seule chaîne de caractère en argument");
        console.log("Exemple : node air01.js 'The Ace Of Spades' 'Of'");

        return false;

    }

    return args;
}

const mySplit = (str, separator) => {

}

const main = () => {

    const str = argTester();

    if (str) {
        console.log(str);
    }

}

main();