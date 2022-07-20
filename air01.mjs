// Split en fonction

//TO DO : gérer l'erreur si le separateur spécifié en argument n'est pas présent dans la str
// Utiliser try catch pour gérer cette erreur

const argTester = () => {

    const args = process.argv.slice(2);

    const strObj = {};

    if (args.length !== 2) {

        console.log("Veuillez passer deux chaînes de caractère en argument (la chaîne a découper puis le séparateur)");
        console.log("Exemple : node air01.mjs 'The Ace Of Spades' 'Of'");

        return false;

    }

    strObj.mainStrValue = args[0];
    strObj.separator = args[1];

    return strObj;
}

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

// rechercher chaque endroit dans la str où l'on retrouve le séparateur
const findSepIndexes = (fullStr, sepStr) => {

    //const fullStrArr = fullStr.split('');
    const sepStrArr = sepStr.split('');
    const fullStrArr = fullStr.split('');

    const indArr = [];

    for (let i = 0; i < fullStrArr.length;i++) {

        if (fullStrArr[i] === sepStrArr[0]) {

            const fullStrExtract = [];

            for (let j = 0; j < sepStrArr.length; j++) {

                fullStrExtract.push(fullStrArr[i + j]);

            }

            if (arrComparison(fullStrExtract, sepStrArr)) {

              //objet qui va stocker les index où le séparateur a été identifié dans la str
              const sepInd = {};

              sepInd.indStart = i;
              sepInd.indEnd = i + sepStrArr.length - 1;

              indArr.push(sepInd);

            }

        }

    }

    if (indArr.length !== 0) {
        return indArr;
    }

    return false;

}

// récupérer un extract d'une string en fonction d'un indice de début et un indice de départ
const getStrExtract = (str, indStart, indEnd) => {

    const extractArr = [];

    for (let i = indStart; i < indEnd; i++) {
        extractArr.push(str[i]);
    }

    return extractArr;

}

// fonction qui va diviser une string en fonction d'un séparateur
const mySplit = (fullStr, separator) => {

  
    const strVal = fullStr;
    const sepVal = separator;
    
    const sepInd = findSepIndexes(strVal, sepVal);
    let indexStr = 0;
    const mainArr = [];

    for (let i = 0; i < sepInd.length; i++) {

        const strExtract = getStrExtract(strVal, indexStr, sepInd[i].indStart);
        indexStr = sepInd[i].indEnd + 1;
        mainArr.push(strExtract.join(''));

    }

    // check s'il reste des char à récupérer après le dernier séparateur
    if (sepInd[sepInd.length - 1].indEnd < strVal.length -1) {
        const strExtract = getStrExtract(strVal, sepInd[sepInd.length - 1].indEnd + 1, strVal.length);
        mainArr.push(strExtract.join(''));
    }

    return mainArr;

}

const main = () => {

    const strObj = argTester();

    if (strObj) {

        const fullStr = strObj.mainStrValue;
        const sepVal = strObj.separator;

        const strSplit = mySplit(fullStr, sepVal);

        for (let i = 0; i < strSplit.length; i++) {
            console.log(strSplit[i]);
        }

    }

}

//Get file name
const args = process.argv;
const arr = args[1].split('/');

// Execute main if we launch the script directly in terminal
if (arr[arr.length - 1] === "air01.mjs") {
    main();
}

export {mySplit};