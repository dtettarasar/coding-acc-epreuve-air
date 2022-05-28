// Concat

const argTester = () => {

    const args = process.argv.slice(2);

    const argObj = {
        strArr: [],
        separator: ""
    }

    if (args.length < 3) {
        console.log("Veuillez passer au moins 3 chaînes de caractère en argument (les deux premières chaînes à joindre, puis en dernier le séparateur à utiliser pour la concaténation.)")
        console.log("Exemple: node air02.js 'system of a down' 'korn' 'slipknot' ', '");
        return false;
    }

    argObj.separator = args[args.length - 1];

    for (let i = 0; i < args.length -1; i++) {
        argObj.strArr.push(args[i]);
    }

    return argObj;

}

const concatenation = (stringsArr, separator) => {
    console.log(stringsArr);
    console.log(separator);
}

const main = () => {

    const argObj = argTester();

    console.log(argObj);

}

main();