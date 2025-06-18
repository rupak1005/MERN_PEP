
function guess() {
    var secnumber = Math.floor(Math.random() * 100) + 1; // random number between 1 and 100
    var number;
    var chances = 7;
    console.log("Secret number (for testing):", secnumber);

    while (chances > 0) {
        number = Number(prompt(`Guess the number (1-100):`));
        chances--;

        if (number === secnumber) {
            return 'You win!';
        } else if (number > secnumber) {
            alert(`Secret number is smaller. Tries left: ${chances}`);
        } else {
            alert(`Secret number is greater. Tries left: ${chances}`);
        }
    }
    return alert("You lose!");
}

console.log(guess());