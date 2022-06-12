// Afficher un pyramide

const argTester = () => {

    const arguments = process.argv.slice(2);
    const intPattern = /^[0-9]+$/;
    const data = {};
    const errorMsg = "Veuillez passer en argument un caractère et un nombre entier positif.\nExemple: node air11.js o 5";

    if (arguments.length !== 2 || arguments[0].length !== 1 || !intPattern.test(arguments[1])) {
        console.log(errorMsg);
        return false;
    }

}

const buildPyramid = (char, int) => {
    console.log(char);
    console.log(int);
}

const main = () => {
    
}

argTester();