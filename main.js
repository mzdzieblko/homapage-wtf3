const firstName = 'Mateusz';
const age = 32;

console.log(`Nazywam się ${firstName} mam ${age} lat ;D `);

function hello(age, name){
    console.log(`Siema, nazywam się ${name} i mam ${age} lat`)
}

hello(40, 'Edward');

const box = document.querySelector('.div--js');

box.innerHTML = 'Treść podstawiona przez JS';


function calculate(myNumber){
    return myNumber*7
};

const myResoult = calculate(2);

console.log(myResoult); 

function greet(age, irstName){ /*nazwy argumentów funkcji muszą być takie same jak zmienne w ciele finkcji inaczej, zmienne z ciała funkcji będą "szukać takich samych nazw w kodzie"*/
    console.log(
        `Witaj Drogi Odwiedzający, nazywam się ${irstName} i mam ${age} lata`
    );
}

greet(34, 'Janek');

greet('Dawid', 18);
/*wartości argumentów przekazywane są do "nazw" argumentów funkcji i później wykożystywane w ciele funkcji. Kolejność wartości argumentów mają znaczenie.
Wpisanie greet('Dawid', 18) spowoduje podstawienie 18 do zmiennej irstName  a Dawid do zmiennej age*/

function createContent(querySelectorContent, content){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.div--js2','Dodaje treść funkcją JS xD dzięki Korsan <3');

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true,
    name: 'Death Star',
    levels: 357,
    population: 10000,
    isLightOn: true,
    commmander: {
        name: 'Darth Vader',
        age: 44
    }
}

console.log(deathStar.commmander);

const humanOne = {
    name: 'Maciek',
    age: 32
}

const humanTwo = {
    name: 'Stefan',
    age: 38
}
console.log(humanTwo.age); //dwa obiekty wskazują na różne wartości age

humanTwo.age = 'Maciek'; // wartość age może być innego tupu niż zadeklatowana przy utworzeniu💥 
console.log(humanTwo.age);

humanTwo.age = humanOne.age; //wskazuje na wartość age z innego obiektu
console.log(humanOne);
console.log(humanTwo);

humanTwo.age = 35; //losowa wartość age dla odrónienia
console.log(humanOne);
console.log(humanTwo);

const humanTwoNext = humanOne; //tworze nowy obiekt wskazujac na inny obiekt
console.log(humanOne);
console.log(humanTwo);
console.log(humanTwoNext);

humanTwoNext.age = 38; //zmiana wartosci age w onowym obiekcie zmienia wartosc age w obiekcie z ktorego "powstal"
console.log(humanOne);
console.log(humanTwo);
console.log(humanTwoNext);

if (!('JavaScript' == 'Java')){
    console.log(`ten kod się wykona`)
}