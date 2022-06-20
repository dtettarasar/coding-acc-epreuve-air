// Split

const argTester = () => {
    const args = process.argv.slice(2);

    if (args.length !== 1) {

        console.log("Veuillez passer une seule chaîne de caractère en argument");
        console.log("Exemple : node air00.js 'Fear Of The Dark'");

        return false;

    }

    return args[0];
}

const mySplit = (str) => {

    // Matcher les chars qui ne correspondent pas à des séparateurs
    const pattern = /\S/m;

    const mainArr = [];
    let subArr = [];

    // Boucle pour isoler les chars de chaque éléments de la string à découper
    for (let i = 0; i < str.length; i++) {

        if (pattern.test(str[i])) {
            subArr.push(str[i]);
        } else if (!pattern.test(str[i]) && subArr.length !== 0){
            mainArr.push(subArr.join(""));
            subArr = [];
        }
        
        
    }

    // Push le dernier élément généré par la boucle
    mainArr.push(subArr.join(""));

    return mainArr;

}

const main = () => {

    const str = argTester();

    if (str) {
        const strArr = mySplit(str);

        for (let i = 0; i < strArr.length; i++ ) {
            console.log(strArr[i]);
        }

    }

}

//main();


export {mySplit};