// Insertion dans un tableau trié

// Récuperer argument
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

        } else if (i < argument.length - 1) {

            data.initialArr.push(parseInt(argument[i]));

        } else {

            data.elemToAdd = parseInt(argument[i]);

        }

    }

    return data;

}

console.log(argTester());