const printToDom = (divId, textToPrint) => {
    console.log(textToPrint)
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};



console.log('Lakia Jones');
const iAmThirsty = (num) => {
    if (num < 21) {
    return 'drink some water!';
    }
    else if (num > 20 && num < 65) {
    return 'have a beer!';
    }
    else {
        return 'Take a nap!';
    }
    
}

printToDom('Thirsty', iAmThirsty(15));
printToDom('Thirsty', iAmThirsty(35));
printToDom('Thirsty', iAmThirsty(60));
printToDom('Thirsty', iAmThirsty(66));



