// Mélange deux tableaux triés 

const argTester = () => {

    const argument = process.argv.slice(2);
    const intPattern = /^-?[0-9]+$/;
    const argArr = [];
    const errorMsg = "Veuillez passer en argument deux séries de nombres entiers, séparées par 'fusion'\nExemple: node air07.js 10 20 30 fusion 15 25 35";

    if (argument.length < 3) {
        console.log(errorMsg);
        return false;
    }

    for (let i = 0; i < argument.length; i++) {

        if (intPattern.test(argument[i]) || argument[i] === "fusion") {
            argArr.push(argument[i]);
        } else {
            console.log(errorMsg);
            return false;
        }

    }

    console.log(argArr);

}

argTester();