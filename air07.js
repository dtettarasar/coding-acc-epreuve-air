// Insertion dans un tableau trié

const argTester = () => {

    const errorMsg = "Veuillez passer une série de nombre entier en argument\nExemple: node air07.js 1 3 4 2";

    const argument = process.argv.slice(2);

    const data = {
        initialArr: [],
        elemToAdd: null
    }

    if (argument.length < 2) {
        console.log(errorMsg);
        return false;
    }

}

argTester();