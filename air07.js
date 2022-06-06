// Insertion dans un tableau trié

const argTester = () => {

    const errorMsg = "Veuillez passer une série de nombres entiers en argument (minimum 2 nombres)\nExemple: node air07.js 1 3 4 2";

    const argument = process.argv.slice(2);

    const intPattern = /^-?[0-9]+$/;

    const data = {
        initialArr: [],
        elemToAdd: null
    }

    if (argument.length < 2) {
        console.log(errorMsg);
        return false;
    }

    for (let i = 0; i < argument.length; i++) {
        
        if (!intPattern.test(argument[i])) {
            console.log(errorMsg);
            return false;
        }

    }

}

argTester();