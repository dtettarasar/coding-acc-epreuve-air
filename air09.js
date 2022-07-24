// Rotation vers la gauche

const argTester = () => {

    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.log("Veuillez passer au moins deux arguments.");
        console.log("Exemple : node air09.js Rust in Peace");
        return false;
    }

    return args

}

const rotateArr = (array) => {

    const finalArr = [];
    const lastElem = array[0];

    for (let i = 1; i < array.length;i++) {
        finalArr.push(array[i]);
    }

    finalArr.push(lastElem);

    return finalArr;

}

const main = () => {

    const args = argTester();

    if (args) {
        const result = rotateArr(args);
        console.log(result.join(', '));
    }

}

// Test air09
const testArgArr = [
    {
        test:rotateArr(['Michel', 'Albert', 'Thérèse', 'Benoit']),
        result:['Albert', 'Thérèse', 'Benoit', 'Michel']
    },
    {
        test:rotateArr(['Rust', 'in', 'Peace']),
        result:['in', 'Peace', 'Rust']
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