// Meta exercice

// Import des fonctions à tester

import {mySplit as air00Split} from "./air00.mjs";
import {mySplit as air01Split} from "./air01.mjs";
import {concatenation} from "./air02.mjs";
import {getIntruders} from "./air03.mjs";

// Test air00
console.log("test air00");
console.log(air00Split("Fear Of The Dark"));
console.log("--------");

// Test air01
console.log("test air01");
console.log(air01Split('The Ace Of Spades', 'Of'));
console.log("--------");

//Test air02
console.log("test air02");
console.log(concatenation(["megadeth", "metallica", "anthrax", "exodus", "testament"], ", "));
console.log("--------");

//Test air03
console.log("test air03");
console.log(getIntruders(["1", "2", "3", "4", "5", "4", "3", "2", "1"]));
console.log(getIntruders(["bonjour", "monsieur", "bonjour"]));
console.log("--------");
