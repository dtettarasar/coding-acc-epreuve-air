// Contrôle de pass sanitaire

// Récupérer les args
const argTester = () => {

    const args = process.argv.slice(2);

    const data = {
        strArr: [],
        strSample: ""
    }

    if (args.length < 2) {
        console.log("Veuillez passer au moins deux chaînes de caractère en argument.");
        console.log("Exemple: node air06.mjs Metallica Megadeth Slayer Anthrax Testament me");
        return false;
    }

    for (let i = 0; i < args.length - 1; i++) {

        data.strArr.push(args[i]);

    }

    data.strSample = args[args.length - 1];

    return data;

}

// Comparer deux arrays
const arrComparison = (arrOne, arrTwo) => {

    if (arrOne.length === arrTwo.length) {

        for (let i = 0; i < arrOne.length; i++) {

            if (arrOne[i] !== arrTwo[i]) {
                return false;
            }

        }

        return true;
    }

}

// Vérifie si la deuxième string est bien présente dans la première
const strInStr = (fullStr, sampleStr) => {

    const fullStrArr = fullStr.split('');
    const sampleStrArr = sampleStr.split('');

    for (let i = 0; i < fullStrArr.length;i++) {

        if (fullStrArr[i] === sampleStrArr[0]) {

            const fullStrExtract = [];

            for (let j = 0; j < sampleStrArr.length; j++) {

                fullStrExtract.push(fullStrArr[i + j]);

            }

            return arrComparison(fullStrExtract, sampleStrArr);

        }

    }

    return false;

}

// Utiliser strInStr() sur tout un array de string
const strCtrl = (strArr, sampleStr) => {

    const finalArr = [];

    for (let i = 0; i < strArr.length; i++) {

        const testStr = strInStr(strArr[i].toLowerCase(), sampleStr.toLowerCase());

        if (!testStr) {
            finalArr.push(strArr[i]);
        }

    }

    return finalArr;

}

// Afficher résultat
const main = () => {

    const args = argTester();

    if (args) {

       const result = strCtrl(args.strArr, args.strSample);

       console.log(result.join(', '))

    }

}

//Get file name
const args = process.argv;
const arr = args[1].split('/');

// Execute main if we launch the script directly in terminal
if (arr[arr.length - 1] === "air06.mjs") {
    main();
}

export {strCtrl};
