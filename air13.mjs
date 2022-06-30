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

// Test air00
const testAir00 = (strToTest, arrExpected) => {
    totalTest++;
    const arrGenerated = air00Split(strToTest);
    if (arrGenerated.length === arrExpected.length) {

        for (let i = 0; i < arrGenerated.length; i++) {
            if (arrGenerated[i] !== arrExpected[i]) {
                return "failure";
            }
        }

        totalSuccesses++;
        return "success";

    } else {

        return "failure";

    }
}

const testAir00Str = ["Fear Of The Dark","Bonjour les gars"];
const testAir00Arr = [
    [ 'Fear', 'Of', 'The', 'Dark' ],
    [ 'Bonjour', 'les', 'gars' ]
];

for (let i = 0; i < testAir00Str.length; i++) {
    const testResult = testAir00(testAir00Str[i], testAir00Arr[i]);
    const testNum = i + 1;
    console.log("air00 ("+ testNum +"/" + testAir00Str.length + ") : " + testResult);
}

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
    }
]

const testAir01 = (argObj) => {
    const test = air01Split(argObj.strToCut, argObj.sep);
    console.log(test);
}

testAir01(testAir01argArr[0]);

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

for (let i = 0; i < testAir02argArr.length; i++) {
    const testResult = testAir02(testAir02argArr[i]);
    const testNum = i + 1;
    console.log("air02 ("+ testNum +"/" + testAir02argArr.length + ") : " + testResult);
}


// Test air03
/*
console.log("test air03");
console.log(getIntruders(["1", "2", "3", "4", "5", "4", "3", "2", "1"]));
console.log(getIntruders(["bonjour", "monsieur", "bonjour"]));
console.log("--------");
*/

// Test air04
/*
console.log("test air04");
console.log(removeDuplicateChar('Hello milady,   bien ou quoi ??'));
console.log(removeDuplicateChar('All Out Life !!'));
console.log("--------");
*/

// Test air05
/*
console.log("test air05");
console.log(updateArr([1, 2, 3, 4, 5], 2));
console.log(updateArr([10, 11, 12, 20], -5));
console.log("--------");
*/

// Test air06
/*
console.log("test air06");
console.log(strCtrl(['Michel', 'Albert', 'Thérèse', 'Benoit'], "t"));
console.log(strCtrl(['Metallica', 'Megadeth', 'Slayer', 'Anthrax', 'Testament'], "me"));
console.log("--------");
*/

// Test air07
/*
console.log("test air07");
console.log(sortedInsert([1, 3, 4], 2));
console.log(sortedInsert([10, 20, 30, 40, 50, 60, 70, 90], 33));
console.log("--------");
*/

// Test air08
/*
console.log("test air08");
console.log(sortedFusion([10, 20, 30], [15, 25, 35]));
console.log(sortedFusion([4, 6, 8], [5, 7, 9]));
console.log("--------");
*/

// Test air09
/*
console.log("test air09");
console.log(rotateArr(['Michel', 'Albert', 'Thérèse', 'Benoit']));
console.log(rotateArr(['Rust', 'in', 'Peace']));
console.log("--------");
*/

// Test air10
/*
console.log("test air10");
console.log(getTxtArr("test-air10-1.txt"));
console.log(getTxtArr("test-air10-2.txt"));
console.log("--------");
*/

// Test air11
/*
console.log("test air11");
console.log(buildPyramid("o", 7));
console.log(buildPyramid("!", 8));
console.log("--------");
*/

// Test air12
/*
console.log("test air12");
console.log(quickSortProcess([11,9,39,2,8,87,92,63,74,6,5,69,63,33,30]));
console.log(quickSortProcess([4,1,8,6,2,9,5,3,0,7]));
console.log("--------");
*/

console.log("Total success: ("+ totalSuccesses +"/"+ totalTest +")");