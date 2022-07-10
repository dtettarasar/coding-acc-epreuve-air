// Meta exercice

// Import des fonctions à tester

import {mySplit as air00Split} from "./air00.mjs";
import {mySplit as air01Split} from "./air01.mjs";
import {concatenation} from "./air02.mjs";
import {getIntruders} from "./air03.mjs";
import {removeDuplicateChar} from "./air04.mjs";
import {updateArr} from "./air05.mjs";
import {strCtrl} from "./air06.mjs";
import {sortedInsert} from "./air07.mjs";
import {sortedFusion} from "./air08.mjs";
import {rotateArr} from "./air09.mjs";
import {getTxtArr} from "./air10.mjs";
import {buildPyramid} from "./air11.mjs";
import {quickSortProcess} from "./air12.mjs";

let totalTest = 0;
let totalSuccesses = 0;

const testStarter = (scriptNum, testFunc, argArr) => {

    for (let i = 0; i < argArr.length; i++) {
        const testResult = testFunc(argArr[i]);
        const testNum = i + 1;
        console.log(scriptNum + " ("+ testNum +"/" + argArr.length + ") : " + testResult);
    }

}

// test functions to use when result value is an array
const testStarterArr = (scriptNum, argArr) => {

    for (let i = 0; i < argArr.length; i++) {
        const testResult = getTestResultArr(argArr[i]);
        const testNum = i + 1;
        console.log(scriptNum + " ("+ testNum +"/" + argArr.length + ") : " + testResult);
    }

}

const getTestResultArr = (argObj) => {

    totalTest++;

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

}


// Test air00
const testAir00 = (argObj) => {
    totalTest++;
    const arrGenerated = air00Split(argObj.str);
    if (arrGenerated.length === argObj.result.length) {

        for (let i = 0; i < arrGenerated.length; i++) {
            if (arrGenerated[i] !== argObj.result[i]) {
                return "failure";
            }
        }

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }
}

const testAir00argArr = [
    {
        str:"Fear Of The Dark",
        result:[ 'Fear', 'Of', 'The', 'Dark' ]
    },
    {
        str:"Bonjour les gars",
        result:[ 'Bonjour', 'les', 'gars' ]
    }
]

// Test air01
const testAir01argArr = [
    {
        strToCut: "Crevette magique dans la mer des étoiles",
        sep: "la",
        result: [
            [
              'C', 'r', 'e', 'v', 'e',
              't', 't', 'e', ' ', 'm',
              'a', 'g', 'i', 'q', 'u',
              'e', ' ', 'd', 'a', 'n',
              's', ' '
            ],
            [
              ' ', 'm', 'e', 'r',
              ' ', 'd', 'e', 's',
              ' ', 'é', 't', 'o',
              'i', 'l', 'e', 's'
            ]
        ]
    },
    {
        strToCut: "The Ace Of Spades",
        sep: "Of",
        result: [
            [
                'T', 'h', 'e',
                ' ', 'A', 'c',
                'e', ' '
            ],
            [
                ' ', 'S', 'p',
                'a', 'd', 'e',
                's'
            ]
        ]
    }
]

const testAir01 = (argObj) => {

    totalTest++;
    const test = air01Split(argObj.strToCut, argObj.sep);
    const testStr = test.join('');
    const resultStr = argObj.result.join('');

    if (testStr === resultStr) {
        totalSuccesses++;
        return "success";
    } else {
        return "failure";
    }

}

// Test air02
const testAir02argArr = [
    {
        array: ["je", "teste", "des", "trucs"],
        sep: " ",
        result: "je teste des trucs"
    },
    {
        array: ["megadeth", "metallica", "anthrax", "exodus", "testament"],
        sep: ", ",
        result: "megadeth, metallica, anthrax, exodus, testament"
    }
];

const testAir02 = (argObj) => {
    totalTest++;
    const test = concatenation(argObj.array, argObj.sep);

    if (test === argObj.result) {

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }

}

// Test air03
const testAir03argArr = [
    {
        array: ["1", "2", "3", "4", "5", "4", "3", "2", "1"],
        result: [ '5' ]
    },
    {
        array: ['Muse', 'Queens', 'Arctic Monkeys', 'Queens', 'Muse', 'Motörhead'],
        result: [ 'Arctic Monkeys', 'Motörhead' ]
    },
    {
        array: ['Bonjour', 'Monsieur', 'Bonjour'],
        result: ['Monsieur']
    }
];


const testAir03 = (argObj) => {

    totalTest++;
    const test = getIntruders(argObj.array);

    if (test.length === argObj.result.length) {

        for (let i = 0; i < test.length; i++) {
            if (test[i] !== argObj.result[i]) {
                return "failure";
            }
        }

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }

};

// Test air04
const testAir04argArr = [
    {
        str:'Hello milady,   bien ou quoi ??',
        result:'Helo milady, bien ou quoi ?'
    },
    {
        str:'All Out Life !!',
        result:'Al Out Life !'
    }
];

const testAir04 = (argObj) => {

    totalTest++;
    const test = removeDuplicateChar(argObj.str);
    
    if (test === argObj.result) {

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }

};

// Test air05
const testAir05argArr = [
    {
        array:[1, 2, 3, 4, 5],
        int: 2,
        result:[ 3, 4, 5, 6, 7 ]
    },
    {
        array:[10, 11, 12, 20],
        int:-5,
        result:[ 5, 6, 7, 15 ]
    }
];

const testAir05 = (argObj) => {

    totalTest++;
    const test = updateArr(argObj.array, argObj.int);

    if (test.length === argObj.result.length) {

        for (let i = 0; i < test.length; i++) {
            if (test[i] !== argObj.result[i]) {
                return "failure";
            }
        }

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }

};


// Test air06

const testAir06argArr = [
    {
        array:['Michel', 'Albert', 'Thérèse', 'Benoit'],
        ctrl:"t",
        result:[ 'Michel' ]
    },
    {
        array:['Metallica', 'Megadeth', 'Slayer', 'Anthrax', 'Testament'],
        ctrl:"me",
        result:[ 'Slayer', 'Anthrax' ]
    }
];

const testAir06 = (argObj) => {

    totalTest++;
    const test = strCtrl(argObj.array, argObj.ctrl);

    if (test.length === argObj.result.length) {

        for (let i = 0; i < test.length; i++) {
            if (test[i] !== argObj.result[i]) {
                return "failure";
            }
        }

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }

};

// Test air07

const testAir07argArr = [
    {
        array:[1, 3, 4],
        intToAdd : 2,
        result:[1, 2, 3, 4]
    },
    {
        array:[10, 20, 30, 40, 50, 60, 70, 90],
        intToAdd : 33,
        result:[
            10, 20, 30, 33, 40,
            50, 60, 70, 90
        ]          
    },
    {
        array:[7, 12, 21],
        intToAdd : 16,
        result:[7, 12, 16, 21]
    }
];

const testAir07 = (argObj) => {

    totalTest++;
    const test = sortedInsert(argObj.array, argObj.intToAdd);

    if (test.length === argObj.result.length) {

        for (let i = 0; i < test.length; i++) {
            if (test[i] !== argObj.result[i]) {
                return "failure";
            }
        }

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }

};

// Test air08

const testAir08argArr = [
    {
        arrayOne:[10, 20, 30],
        arrayTwo:[15, 25, 35],
        result:[10, 15, 20, 25, 30, 35]
    },
    {
        arrayOne:[4, 6, 8],
        arrayTwo:[5, 7, 9],
        result:[4, 5, 6, 7, 8, 9]
    }
];

const testAir08 = (argObj) => {

    totalTest++;
    const test = sortedFusion(argObj.arrayOne, argObj.arrayTwo);

    if (test.length === argObj.result.length) {

        for (let i = 0; i < test.length; i++) {
            if (test[i] !== argObj.result[i]) {
                return "failure";
            }
        }

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }

};

// Test air09

const testAir09argArr = [
    {
        array:['Michel', 'Albert', 'Thérèse', 'Benoit'],
        result:['Albert', 'Thérèse', 'Benoit', 'Michel']
    },
    {
        array:['Rust', 'in', 'Peace'],
        result:['in', 'Peace', 'Rust']
    }
];

const testAir09 = (argObj) => {

    totalTest++;
    const test = rotateArr(argObj.array);

    if (test.length === argObj.result.length) {

        for (let i = 0; i < test.length; i++) {
            if (test[i] !== argObj.result[i]) {
                return "failure";
            }
        }

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }

};

// Test air10
const testAir10argArr = [
    {
        fileName:"test-air10-1.txt",
        result:['this is coding accelerator', 'Harry is ze best']
    },
    {
        fileName:"test-air10-2.txt",
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

const testAir10 = (argObj) => {

    totalTest++;
    const test = getTxtArr(argObj.fileName);

    if (test.length === argObj.result.length) {

        for (let i = 0; i < test.length; i++) {
            if (test[i] !== argObj.result[i]) {
                return "failure";
            }
        }

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }

};


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
            '    !!!!!!!',
            '   !!!!!!!!!',
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

/*
testStarter("air00", testAir00, testAir00argArr);
testStarter("air01", testAir01, testAir01argArr);
testStarter("air02", testAir02, testAir02argArr);
testStarter("air03", testAir03, testAir03argArr);
testStarter("air04", testAir04, testAir04argArr);
testStarter("air05", testAir05, testAir05argArr);
testStarter("air06", testAir06, testAir06argArr);
testStarter("air07", testAir07, testAir07argArr);
testStarter("air08", testAir08, testAir08argArr);
testStarter("air09", testAir09, testAir09argArr);
testStarter("air10", testAir10, testAir10argArr);
testStarter("air11", testAir11, testAir11argArr);
testStarter("air12", testAir12, testAir12argArr);
*/

testStarterArr("air11", testAir11argArr);
testStarterArr("air12", testAir12argArr);


console.log("Total success: ("+ totalSuccesses +"/"+ totalTest +")");