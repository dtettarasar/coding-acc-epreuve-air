// Afficher le contenu

const argTester = () => {

    const errorMsg = "Veuillez passer le nom d'un fichier en argument (format lisible : txt).\nExemple : node air10.js test.txt";
    
    const argument = process.argv.slice(2);

    if (argument.length !== 1) {
        console.log(errorMsg);
        return false;
    }

    console.log(argument);

}

argTester();