// Split en fonction

const argTester = () => {

    const args = process.argv.slice(2);

    const strObj = {};

    if (args.length !== 2) {

        console.log("Veuillez passer deux chaînes de caractère en argument (la chaîne a découper puis le séparateur)");
        console.log("Exemple : node air01.js 'The Ace Of Spades' 'Of'");

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
const findSepIndexes = (obj) => {

    const fullStrArr = obj.mainStrValue.split('');
    const sepStrArr = obj.separator.split('');

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

const mySplit = (str) => {

    const sepInd = findSepIndexes(str);
    console.log(sepInd);

}

const main = () => {

    const str = argTester();

    if (str) {
        mySplit(str);
    }

}

main();
