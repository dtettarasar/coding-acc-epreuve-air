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
        filePath = argument[0];
    }

    for (let i = 0; i < fileFormat.length; i++) {

        if (filePath.endsWith(fileFormat[i])) {
            return filePath;
        }

    }

    console.log(errorMsg);
    return false;

}

const main = () => {

    const argument = argTester();

    if (argument) {
        console.log(argument);
    }

}

main();