// Un seul à la fois

const argTester = () => {

    const argument = process.argv.slice(2);

    if (argument.length !== 1) {
        console.log("Veuillez passer une chaîne de caractère en argument.");
        console.log("node air04.js 'All Out Life'");
        return false;
    }

    return argument[0];

}

const removeDuplicateChar = (str) => {

    const finalStrArr = [];
    const strArr = str.split('');

    for (let i = 0; i < strArr.length; i++) {

        if (strArr[i] !== strArr[i - 1]) {
            finalStrArr.push(strArr[i]);
        }

    }

    return finalStrArr.join('');

}

const main = () => {

    const argument = argTester();

    if (argument) {
        const result = removeDuplicateChar(argument);
        console.log(result);
    }

}

// Test air04
const testArgArr = [
    {
        test: removeDuplicateChar('Hello milady,   bien ou quoi ??'),
        result:'Helo milady, bien ou quoi ?'
    },
    {
        test: removeDuplicateChar('All Out Life !!'),
        result:'Al Out Life !'
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