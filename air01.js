// Split en fonction

const argTester = () => {

    const args = process.argv.slice(2);

    const strObj = {};

    if (args.length !== 2) {

        console.log("Veuillez passer deux chaînes de caractère en argument (la chaîne a découper puis le séparateur)");
        console.log("Exemple : node air01.js 'The Ace Of Spades' 'Of'");

        return false;

    }

    strObj.strValue = args[0];
    strObj.separator = args[1];

    return strObj;
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
