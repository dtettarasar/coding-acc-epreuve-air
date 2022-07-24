// Afficher le contenu

const argTester = () => {

    const errorMsg = "Veuillez passer le nom d'un fichier en argument (le fichier doit être dans le même répertoire que le script. Formats lisibles : .txt, .md).\nExemple : node air10.js test.txt";
    const fileFormat = [".txt", ".md"];  
    const argument = process.argv.slice(2);
    let filePath = process.argv[1];

    if (argument.length !== 1) {
        console.log(errorMsg);
        return false;
    } else {
        filePath = "./" + argument[0];
    }

    for (let i = 0; i < fileFormat.length; i++) {

        if (filePath.endsWith(fileFormat[i])) {
            return filePath;
        }

    }

    console.log(errorMsg);
    return false;

}

const getTxtArr = (file) => {

    try {

        const fs = require('fs');
        const readline = require('readline');
        const txtArr = fs.readFileSync(file, 'utf8').split('\n');
        return txtArr;

    } catch (error) {
        console.log("Erreur : ce fichier n'existe pas (le fichier doit être dans le même répertoire que le script. Formats lisibles : .txt, .md).");
        return false;
    }

}

const main = () => {

    const argument = argTester();

    if (argument) {

        const txtArr = getTxtArr(argument);

        if (txtArr) {

            for (let i = 0; i < txtArr.length; i++) {
                console.log(txtArr[i]);
            }

        }
    }

}

// Test air10
const testArgArr = [
    {
        test:getTxtArr("test-air10-1.txt"),
        result:['this is coding accelerator', 'Harry is ze best']
    },
    {
        test:getTxtArr("test-air10-2.txt"),
        result:[
            'Born For One Thing',
            'Amazonia',
            'Another World',
            'Hold On',
            'New Found',
            'Fortitude',
            'The Chant',
            'Sphinx',
            'Into The Storm',
            'The Trails',
            'Grind'
        ]
          
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