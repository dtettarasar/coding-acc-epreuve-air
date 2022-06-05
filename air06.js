// Contrôle de pass sanitaire

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

    console.log(arguments);

}

argTester();