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

    let finalStr = "";

    for (let i = 0; i < stringsArr.length; i++) {
        finalStr += stringsArr[i];

        if (i !== stringsArr.length - 1) {
            finalStr += separator;
        }

    }

    return finalStr;
}

const main = () => {

    const argObj = argTester();

    if (argObj) {
        
        const result = concatenation(argObj.strArr, argObj.separator);
        console.log(result);

    }

}

// Test air02
const testArgArr = [
    {
        test: concatenation(["je", "teste", "des", "trucs"], " "),
        result: "je teste des trucs"
    },
    {
        test: concatenation(["megadeth", "metallica", "anthrax", "exodus", "testament"], ", "),
        result: "megadeth, metallica, anthrax, exodus, testament"
    }
];

module.exports = function () {
    return testArgArr;
}

if (require.main === module) {
    // console.log('called directly');
    main();
} else {
   // console.log('required as a module');
}