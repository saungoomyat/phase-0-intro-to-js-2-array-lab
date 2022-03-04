// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']; 

function destructivelyAppendCat(name) {
    cats.push(name);
    return;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return;
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return;
}

function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push(name);
    return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.unshift(name);
    return copyOfCats;
}

function removeLastCat() {
    const copyOfCats = [...cats];
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats;
}