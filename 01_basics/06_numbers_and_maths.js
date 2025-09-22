// console.log(Math.random())
// const a = Math.round(((Math.random()*10)+1))
// console.log(a);

// Dice Game

// Select the button and result display element
const button = document.getElementById('rollButton');
const result = document.getElementById('result');

// Add click event to the button
button.addEventListener('click', function() {
    // User roll (1–6)
    const userRoll = Math.floor(Math.random() * 6) + 1;

    // Computer roll (1–6)
    const computerRoll = Math.floor(Math.random() * 6) + 1;

    // Compare rolls and determine winner
    let message = `You rolled ${userRoll}. Computer rolled ${computerRoll}. `;
    if (userRoll > computerRoll) {
        message += "You win!";
    } else if (userRoll < computerRoll) {
        message += "You lose!";
    } else {
        message += "It's a draw!";
    }

    // Display the result
    result.textContent = message;
});
