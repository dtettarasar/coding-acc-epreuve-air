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

const mySplit = (str) => {

    const pattern = /\S/m;

    const mainArr = [];

    for (let i = 0; i < str.length; i++) {

        if (pattern.test(str[i])) {
            console.log(str[i]);
        }
    }

}

const main = () => {

    const str = argTester();

    if (str) {
        mySplit(str);
    }

}

main();