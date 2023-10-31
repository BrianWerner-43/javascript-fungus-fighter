// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:


// HP and AP counters
let fungusHP = 100;
let playerAP = 100;

function attack(event) {

    // immediate actions
    console.log('I\'m attacking!');

    // change HP/AP values based on clicked attack
    let currentAttack = event.target.getAttribute('class')
    switch (currentAttack) {
        case ('attack-btn arcane-scepter'):
            playerAP -= 12;
            fungusHP -= 14;
            break;
        case('attack-btn entangle'):
            playerAP -= 23;
            fungusHP -= 9;
            break;
        case('attack-btn dragon-blade'):
            playerAP -= 38;
            fungusHP -= 47;
            break;
        case('attack-btn star-fire'):
            playerAP -= 38;
            fungusHP -= 25;
            break;
    }

    // prevent HP/AP from going below 0
    if (fungusHP < 0) {
        fungusHP = 0;
    }
    if (playerAP < 0) {
        playerAP = 0;
    }

    // update DOM
    renderChanges();
};


function renderChanges() {

    // change DOM to reflect updated variables
    document.getElementById("ap-text").innerText = `${playerAP} AP`
    document.getElementById("hp-text").innerText = `${fungusHP} HP`

    // set death states
    if (playerAP <= 0) {
        document.getElementById('fungus').classList.remove('walk')
        document.getElementById('fungus').classList.add('jump')
        // document.getElementById('attacks')
    }
    if (fungusHP <= 0) {
        document.getElementById('fungus').classList.remove('walk')
        document.getElementById('fungus').classList.add('dead')
    }
}


function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
onReady()