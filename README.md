# coding-acc-epreuve-air

Solutions des exercices de l'épreuve de l'air, du programme Coding Accelerator

## air00.js - Split 

Découpe une chaîne de caractères en tableau (séparateurs : espaces, tabulations, retours à la ligne).

~~~
$> node air00.js 'Fear Of The Dark'
Fear
Of
The
Dark
~~~

## air01.js - Split en fonction

Découpe une chaîne de caractères en tableau en fonction du séparateur donné en 2e argument.

~~~
$> node air01.js 'The Ace Of Spades' 'Of'
The Ace 
 Spades
~~~

## air02.js - Concat 

Transforme un tableau de chaînes de caractères en une seule chaîne de caractères. Espacés d’un séparateur donné en dernier argument au programme.

~~~
$> node air02.js 'system of a down' 'korn' 'slipknot' ', '
system of a down, korn, slipknot
~~~

## air03.js - Chercher l’intrus

Retourne la valeur d’une liste qui n’a pas de paire.

~~~
$> node air03.js 'Muse' 'Queens' 'Arctic Monkeys' 'Queens' 'Muse' 'Motörhead'
Arctic Monkeys
Motörhead
~~~

## air04.js - Un seul à la fois

Affiche une chaîne de caractères en évitant les caractères identiques adjacents.

~~~
$> node air04.js 'All Out Life!!'
Al Out Life!
~~~

## air05.js - Sur chacun d’entre eux

Programme qui est capable de reconnaître et de faire une opération (addition ou soustraction) sur chaque entier d’une liste.

~~~
$> node air05.js 10 11 12 20 '-5'
5 6 7 15
~~~

## air06.js - Contrôle de pass sanitaire

Supprime d’un tableau tous les éléments qui ne contiennent pas une autre chaîne de caractères.

~~~
$> node air06.js Metallica Megadeth Slayer Anthrax Testament me
Slayer, Anthrax
~~~

## air07.js - Insertion dans un tableau trié

Ajoute à une liste d’entiers triée un nouvel entier tout en gardant la liste triée dans l’ordre croissant. Le dernier argument est l’élément à ajouter.

~~~
$> node air07.js 1 3 4 2
1 2 3 4
~~~

## air08.js - Mélanger deux tableaux triés

Fusionne deux listes d’entiers triées en les gardant triées, les deux listes seront séparées par un “fusion”.

~~~
$> node air08.js 10 20 30 fusion 15 25 35
10 15 20 25 30 35
~~~

## air09.js - Rotation vers la gauche 

Décale tous les éléments d’un tableau vers la gauche. Le premier élément devient le dernier à chaque rotation.

~~~
$> node air09.js Rust in Peace
in, Peace, Rust
~~~

## air10.js - Afficher le contenu

Affiche le contenu d’un fichier donné en argument.

~~~
$> node air10.js test-air10-1.txt
this is coding accelerator
Harry is ze best
~~~

## air11.js - Afficher une pyramide

Affiche un escalier constitué d’un caractère et d’un nombre d’étages donné en paramètre.

~~~
$> node air11.js o 5
    o
   ooo
  ooooo
 ooooooo
ooooooooo
~~~

## air12.js - Le roi des tris

Programme qui trie une liste de nombres, en utilisant l’algorithme du tri rapide (QuickSort).

~~~
$> node air12.js 10 20 30 15 25 35
10 15 20 25 30 35
~~~

## air13.js - Meta exercice 

Programme qui vérifie si les exercices de l'épreuve de l’air sont présents dans le répertoire et qu’ils fonctionnent.

~~~
$> node air13.js
air00 (1/3) : success
air00 (2/3) : success
air00 (3/3) : success
air01 (1/2) : success
air01 (2/2) : failure
air02 (1/1) : success
... 
Total success: (25/28)
~~~






















