// Split

const argTester = () => {
    const args = process.argv.slice(2);

    if (args.length !== 1) {

        console.log("Veuillez passer une seule chaîne de caractère en argument");
        console.log("Exemple : node air00.js 'Fear Of The Dark'");

        return false;

    }

    return args[0];
}

const main = () => {

    const str = argTester();

    if (str) {
        console.log(str);
    }

}

main();