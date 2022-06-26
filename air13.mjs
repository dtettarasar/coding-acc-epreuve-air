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

// Test air00
console.log("test air00");
console.log(air00Split("Fear Of The Dark"));
console.log(air00Split("Bonjour les gars"));
console.log("--------");

// Test air01
console.log("test air01");
console.log(air01Split('The Ace Of Spades', 'Of'));
console.log(air01Split('Crevette magique dans la mer des étoiles', 'la'));
console.log("--------");

// Test air02
console.log("test air02");
console.log(concatenation(["je", "teste", "des", "trucs"], " "));
console.log(concatenation(["megadeth", "metallica", "anthrax", "exodus", "testament"], ", "));
console.log("--------");

// Test air03
console.log("test air03");
console.log(getIntruders(["1", "2", "3", "4", "5", "4", "3", "2", "1"]));
console.log(getIntruders(["bonjour", "monsieur", "bonjour"]));
console.log("--------");

// Test air04
console.log("test air04");
console.log(removeDuplicateChar('Hello milady,   bien ou quoi ??'));
console.log(removeDuplicateChar('All Out Life !!'));
console.log("--------");

// Test air05
console.log("test air05");
console.log(updateArr([1, 2, 3, 4, 5], 2));
console.log(updateArr([10, 11, 12, 20], -5));
console.log("--------");

// Test air06
console.log("test air06");
console.log(strCtrl(['Michel', 'Albert', 'Thérèse', 'Benoit'], "t"));
console.log(strCtrl(['Metallica', 'Megadeth', 'Slayer', 'Anthrax', 'Testament'], "me"));
console.log("--------");

// Test air07
console.log("test air07");
console.log(sortedInsert([1, 3, 4], 2));
console.log(sortedInsert([10, 20, 30, 40, 50, 60, 70, 90], 33));
console.log("--------");

// Test air08
console.log("test air08");
console.log(sortedFusion([10, 20, 30], [15, 25, 35]));
console.log(sortedFusion([4, 6, 8], [5, 7, 9]));
console.log("--------");

// Test air09
console.log("test air09");
console.log(rotateArr(['Michel', 'Albert', 'Thérèse', 'Benoit']));
console.log(rotateArr(['Rust', 'in', 'Peace']));
console.log("--------");
