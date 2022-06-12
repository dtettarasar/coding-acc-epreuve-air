// Afficher le contenu

const argTester = () => {

    const errorMsg = "Veuillez passer le nom d'un fichier en argument (formats lisibles : .txt, .md).\nExemple : node air10.js test.txt";
    const fileFormat = [".txt", ".md"];  
    const argument = process.argv.slice(2);
    let fileName = "";

    if (argument.length !== 1) {
        console.log(errorMsg);
        return false;
    } else {
        fileName = argument[0];
    }

    for (let i = 0; i < fileFormat.length; i++) {

        if (fileName.endsWith(fileFormat[i])) {
            console.log(argument);
            return true;
        }

    }

    console.log(errorMsg);
    return false;

}

argTester();