// Concat

const argTester = () => {

    const args = process.argv.slice(2);

    const argObj = {
        strArr: [],
        separator: ""
    }

    if (args.length < 3) {
        console.log("Veuillez passer au moins 3 chaînes de caractère en argument (les deux premières chaînes à joindre, puis en dernier le séparateur à utiliser pour la concaténation.)")
        console.log("Exemple: node air03.js 'system of a down' 'korn' 'slipknot' ', '");
        return false;
    }

    argObj.separator = args[args.length - 1];

    console.log(argObj);

}

argTester();