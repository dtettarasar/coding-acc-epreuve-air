// Contrôle de pass sanitaire

// Récupérer les arguments
const argTester = () => {

    const arguments = process.argv.slice(2);

    const data = {
        strArr: [],
        strSample: ""
    }

    if (arguments.length < 2) {
        console.log("Veuillez passer au moins deux chaînes de caractère en argument.");
        console.log("Exemple: node air06.js Metallica Megadeth Slayer Anthrax Testament me");
        return false;
    }

    for (let i = 0; i < arguments.length - 1; i++) {

        data.strArr.push(arguments[i]);

    }

    data.strSample = arguments[arguments.length - 1];

    console.log(data);

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


argTester();
