// Sur chacun d’entre eux

const argTester = () => {

    const data = {
        intList: [],
        intForCalc: null
    }

    const intPattern = /^(\+?|-?)[0-9]+$/;

    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.log("Veuillez passer une série de nombre entier en arguments");
        console.log("Veuillez passer en dernier, le nombre à utiliser pour tous les calculs");
        console.log("Exemple: node air05.js 10 11 12 20 '-5'");
        return false;
    }

    for (let i = 0; i < args.length; i++) {

        if (intPattern.test(args[i])) {

            const intVal = parseInt(args[i]);

            if (i < args.length -1) {

                data.intList.push(intVal);

            } else {

                data.intForCalc = intVal;

            }


        } else {
            console.log("Veuillez passer une série de nombre entier en arguments");
            console.log("Veuillez passer en dernier, le nombre à utiliser pour tous les calculs");
            console.log("Exemple: node air05.js 10 11 12 20 '-5'");
            return false;
        }

    }

    return data;

}

const updateArr = (intArr, intToAdd) => {

    const finalArr = [];

    for (let i = 0; i < intArr.length; i++) {

        const result = intArr[i] + intToAdd;
        finalArr.push(result);

    }

    return finalArr;

}

const main = () => {

    const args = argTester();

    if (args) {
        const result = updateArr(args.intList, args.intForCalc);
        console.log(result.join(' '));
    }

}

// Test air05
const testArgArr = [
    {
        test:updateArr([1, 2, 3, 4, 5], 2),
        result:[ 3, 4, 5, 6, 7 ]
    },
    {
        test:updateArr([10, 11, 12, 20], -5),
        result:[ 5, 6, 7, 15 ]
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