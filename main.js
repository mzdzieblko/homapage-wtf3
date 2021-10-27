const firstName = 'Mateusz';
const age = 32;

console.log(`Nazywam się ${firstName} mam ${age} lat ;D `);

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