AFRAME.registerComponent('weaponsgem', {
    schema: {
        // Def Values
    },

    init: function() { //DONE
        let counter = 0;
        const gemNoise = new Audio("/audio/gemNoise.wav");
        let armourInstructions = document.querySelector('#armourInstructions');
        let weaponRoomGem = document.querySelector('#weaponRoomGem')

        this.el.addEventListener('click', () => {
            if (counter % 2 == 0) {
                weaponRoomGem.setAttribute('material', 'color', 'red')
                armourInstructions.setAttribute('visible', 'true');
                window.sessionStorage.setItem('gem1Collected', 'true');
                gemNoise.play();
                socket.emit('launch_mini_game1') //Call Minigame 1 for mobile
                socket.emit('gem1Mobile')
            } else if (counter % 2 == 1) {
                armourInstructions.setAttribute('visible', 'false');
            }
            counter += 1;
        });
    }
});

AFRAME.registerComponent('traininggem', {
    schema: {
        // Def Values
    },

    init: function() {
        let counter = 0;
        const gemNoise = new Audio("/audio/gemNoise.wav");
        let trainingInstructions = document.querySelector('#trainingInstructions');
        let trainingGem = document.querySelector('#trainingGem')

        this.el.addEventListener('click', () => {
            if (counter % 2 == 0) {
                trainingInstructions.setAttribute('visible', 'true');
                trainingGem.setAttribute('material', 'color', 'red');
                window.sessionStorage.setItem('gem5Collected', 'true');
                gemNoise.play();
                socket.emit('launch_mini_game1') //Call Minigame 1 for mobile
                socket.emit('gem5Mobile')
            } else if (counter % 2 == 1) {
                trainingInstructions.setAttribute('visible', 'false');
            }
            counter += 1;
        });
    }
});

AFRAME.registerComponent('servantsgem', { //DONE
    schema: {
        // Def Values
    },

    init: function() {
        let counter = 0;
        const gemNoise = new Audio("/audio/gemNoise.wav");
        let servantsInstructions = document.querySelector('#servantInstructions');
        let servantsGem = document.querySelector('#servantsGem')

        this.el.addEventListener('click', () => {
            if (counter % 2 == 0) {
                servantsInstructions.setAttribute('visible', 'true');
                servantsGem.setAttribute('material', 'color', 'red')
                window.sessionStorage.setItem('gem3Collected', 'true');
                gemNoise.play();
                socket.emit('launch_mini_game1') //Call Minigame 1 for mobile
                socket.emit('gem3Mobile')
            } else if (counter % 2 == 1) {
                servantsInstructions.setAttribute('visible', 'false');
            }
            counter += 1;
        });
    }
});

AFRAME.registerComponent('pantrygem', { // DONE
    schema: {
        // Def Values
    },

    init: function() {
        let counter = 0;
        const gemNoise = new Audio("/audio/gemNoise.wav");
        let pantryInstructions = document.querySelector('#pantryInstructions');
        let pantryGem = document.querySelector('#pantryGem')

        this.el.addEventListener('click', () => {
            if (counter % 2 == 0) {
                pantryInstructions.setAttribute('visible', 'true');
                pantryGem.setAttribute('material', 'color', 'red');
                window.sessionStorage.setItem('gem2Collected', 'true');
                gemNoise.play();
                socket.emit('launch_mini_game1') //Call Minigame 1 for mobile
                socket.emit('gem2Mobile')
            } else if (counter % 2 == 1) {
                pantryInstructions.setAttribute('visible', 'false');
            }
            counter += 1;
        });
    }
});

AFRAME.registerComponent('towergem', { //DONE
    schema: {
        // Def Values
    },

    init: function() {
        let counter = 0;
        const gemNoise = new Audio("/audio/gemNoise.wav");
        let towerInstructions = document.querySelector('#towerInstructions');
        let towerGem = document.querySelector('#towerGem')

        this.el.addEventListener('click', () => {
            if (counter % 2 == 0) {
                towerInstructions.setAttribute('visible', 'true');
                towerGem.setAttribute('material', 'color', 'red');
                window.sessionStorage.setItem('gem4Collected', 'true');
                gemNoise.play();
                socket.emit('launch_tower_MiniGame')
                socket.emit('launch_mini_game1') //Call Minigame 1 for mobile
                socket.emit('gem4Mobile')
            } else if (counter % 2 == 1) {
                towerInstructions.setAttribute('visible', 'false');
            }
            counter += 1;
        });
    }
});

AFRAME.registerComponent('thronegem', {
    schema: {
        // Def Values
    },

    init: function() { //DONE
        let counter = 0;
        const gemNoise = new Audio("/audio/gemNoise.wav");
        let kingColorInstructions = document.querySelector('#kingColorInstructions');
        let throneRoomGem = document.querySelector('#throneRoomGem')

        this.el.addEventListener('click', () => {
            if (counter % 2 == 0) {
                kingColorInstructions.setAttribute('visible', 'true');
                throneRoomGem.setAttribute('material', 'color', 'red');
                window.sessionStorage.setItem('gem6Collected', 'true');
                gemNoise.play();
                socket.emit('launch_Minigame') //Call Minigame for mobile
                socket.emit('gem6Mobile')
            } else if (counter % 2 == 1) {
                kingColorInstructions.setAttribute('visible', 'false');
            }
            counter += 1;
        });
    }
});