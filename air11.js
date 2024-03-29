// Afficher une pyramide

const argTester = () => {

    const args = process.argv.slice(2);
    const intPattern = /^[0-9]+$/;
    const data = {};
    const errorMsg = "Veuillez passer en argument un caractère et un nombre entier positif.\nExemple: node air11.js o 5";

    if (args.length !== 2 || args[0].length !== 1 || !intPattern.test(args[1])) {
        console.log(errorMsg);
        return false;
    }

    data.charVal = args[0];
    data.intVal = parseInt(args[1]);

    return data;

}

const buildPyramid = (char, int) => {

    const pyramidArr = [];

    let charAmount = 1;
    let spaceAmount = int - 1;

    for (let i = 0; i < int; i++) {

        const line = [];
        const spaceArr = [];

        for (let a = 0; a < spaceAmount; a++) {
            spaceArr.push(" ");
        }
        
        line.push(spaceArr.join(''));

        for (let j = 0; j < charAmount; j++) {

            line.push(char);

        }

        const lineStr = line.join('');

        pyramidArr.push(lineStr);

        charAmount += 2;
        spaceAmount -= 1;

    }

    return pyramidArr;
}

const main = () => {
    
    const argument = argTester();

    if (argument) {
        const pyramid = buildPyramid(argument.charVal, argument.intVal);

        for (let i = 0; i < pyramid.length; i++) {
            console.log(pyramid[i]);
        }
    }

}

// Test air11
const testArgArr = [
    {
        test:buildPyramid("o",7),
        result: [
            '      o',
            '     ooo',
            '    ooooo',
            '   ooooooo',
            '  ooooooooo',
            ' ooooooooooo',
            'ooooooooooooo'
        ]
          
    },
    {
        test:buildPyramid("!",8),
        result: [
            '       !',
            '      !!!',
            '     !!!!!',
            '    !!!!!!!',
            '   !!!!!!!!!',
            '  !!!!!!!!!!!',
            ' !!!!!!!!!!!!!',
            '!!!!!!!!!!!!!!!'      
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