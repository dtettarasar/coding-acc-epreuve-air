// Meta exercice

const test00 = require('./air00.js')();
//console.log(test00);

const test01 = require('./air01.js')();
//console.log(test01);

const test02 = require('./air02.js')();
//console.log(test01);

let totalTest = 0;
let totalSuccesses = 0;

const testStarter = (scriptNum, argArr) => {

    for (let i = 0; i < argArr.length; i++) {

        const testResult = getTestResult(argArr[i]);
        const testNum = i + 1;

        const redFont = "\x1b[31m";
        const greenFont = "\x1b[32m";

        const colorFont = testResult === "success" ? greenFont : redFont;

        console.log(colorFont, scriptNum + " ("+ testNum +"/" + argArr.length + ") : " + testResult);

    }

}

// test functions to use when result value is an array
const getTestResult = (argObj) => {

    totalTest++;

    // If the result to test is an array, check all value in array to validate test
    if (Array.isArray(argObj.result)) {
        if (argObj.test.length === argObj.result.length) {

            for (let i = 0; i < argObj.test.length; i++) {

                if (argObj.test[i] !== argObj.result[i]) {

                    return "failure";
                    
                }

            }
    
            totalSuccesses++;
            return "success";
    
        } else {
    
            return "failure";
    
        }

    }  else if (typeof argObj.result === "string") {

        if (argObj.test === argObj.result) {

            totalSuccesses++;
            return "success";
    
        } else {
    
            return "failure";
    
        }

    }

}

/*

// Test air02
const testAir02argArr = [
    {
        test: concatenation(["je", "teste", "des", "trucs"], " "),
        result: "je teste des trucs"
    },
    {
        test: concatenation(["megadeth", "metallica", "anthrax", "exodus", "testament"], ", "),
        result: "megadeth, metallica, anthrax, exodus, testament"
    }
];

// Test air03
const testAir03argArr = [
    {
        test: getIntruders(["1", "2", "3", "4", "5", "4", "3", "2", "1"]),
        result: [ '5' ]
    },
    {
        test: getIntruders(['Muse', 'Queens', 'Arctic Monkeys', 'Queens', 'Muse', 'Motörhead']),
        result: [ 'Arctic Monkeys', 'Motörhead' ]
    },
    {
        test: getIntruders(['Bonjour', 'Monsieur', 'Bonjour']),
        result: ['Monsieur']
    }
];

// Test air04
const testAir04argArr = [
    {
        test: removeDuplicateChar('Hello milady,   bien ou quoi ??'),
        result:'Helo milady, bien ou quoi ?'
    },
    {
        test: removeDuplicateChar('All Out Life !!'),
        result:'Al Out Life !'
    }
];

// Test air05
const testAir05argArr = [
    {
        test:updateArr([1, 2, 3, 4, 5], 2),
        result:[ 3, 4, 5, 6, 7 ]
    },
    {
        test:updateArr([10, 11, 12, 20], -5),
        result:[ 5, 6, 7, 15 ]
    }
];

// Test air06
const testAir06argArr = [
    {
        test:strCtrl(['Michel', 'Albert', 'Thérèse', 'Benoit'], "t"),
        result:[ 'Michel' ]
    },
    {
        test:strCtrl(['Metallica', 'Megadeth', 'Slayer', 'Anthrax', 'Testament'], "me"),
        result:[ 'Slayer', 'Anthrax' ]
    }
];

// Test air07
const testAir07argArr = [
    {
        test:sortedInsert([1, 3, 4], 2),
        result:[1, 2, 3, 4]
    },
    {
        test:sortedInsert([10, 20, 30, 40, 50, 60, 70, 90],33),
        result:[
            10, 20, 30, 33, 40,
            50, 60, 70, 90
        ]          
    },
    {
        test:sortedInsert([7, 12, 21], 16),
        result:[7, 12, 16, 21]
    }
];

// Test air08
const testAir08argArr = [
    {
        test:sortedFusion([10, 20, 30],[15, 25, 35]),
        result:[10, 15, 20, 25, 30, 35]
    },
    {
        test:sortedFusion([4, 6, 8],[5, 7, 9]),
        result:[4, 5, 6, 7, 8, 9]
    }
];

// Test air09
const testAir09argArr = [
    {
        test:rotateArr(['Michel', 'Albert', 'Thérèse', 'Benoit']),
        result:['Albert', 'Thérèse', 'Benoit', 'Michel']
    },
    {
        test:rotateArr(['Rust', 'in', 'Peace']),
        result:['in', 'Peace', 'Rust']
    }
];

// Test air10
const testAir10argArr = [
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

// Test air11
const testAir11argArr = [
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
            '    !!!!!!!',testStarter("air00", testAir00argArr);
            '  !!!!!!!!!!!',
            ' !!!!!!!!!!!!!',
            '!!!!!!!!!!!!!!!'
        ]
    }
];

// Test air12
const testAir12argArr = [
    {
        test:quickSortProcess([11,9,39,2,8,87,92,63,74,6,5,69,63,33,30]),
        result:[
            2,  5,  6,  8,  9, 11,
           30, 33, 39, 63, 63, 69,
           74, 87, 92
        ]
    },
    {
        test:quickSortProcess([4,1,8,6,2,9,5,3,0,7]),
        result:[
            0, 1, 2, 3, 4,
            5, 6, 7, 8, 9
        ]  
    }
];
*/

testStarter("air00", test00);
testStarter("air01", test01);
testStarter("air02", test02);
console.log( "\x1b[37m", "Total success: ("+ totalSuccesses +"/"+ totalTest +")");

/*
testStarter("air00", testAir00argArr);
testStarter("air01", testAir01argArr);
testStarter("air02", testAir02argArr);
testStarter("air03", testAir03argArr);
testStarter("air04", testAir04argArr);
testStarter("air05", testAir05argArr);
testStarter("air06", testAir06argArr);
testStarter("air07", testAir07argArr);
testStarter("air08", testAir08argArr);
testStarter("air09", testAir09argArr);
testStarter("air10", testAir10argArr);
testStarter("air11", testAir11argArr);
testStarter("air12", testAir12argArr);

*/