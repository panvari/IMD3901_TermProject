AFRAME.registerComponent('popup', {
    schema: {
        // Def Values
    },

    init: function() {
        // let popUp = document.querySelector('#popUp');
        let counter = 0;
        const gemNoise = new Audio("/audio/gemNoise.wav");
        let instructions2 = document.querySelector('#kingColorInstructions');

        this.el.addEventListener('click', () => {
            if (counter % 2 == 0) {
                // popUp.setAttribute('visible', 'true')
                instructions2.setAttribute('visible', 'true');
                gemNoise.play();
                socket.emit('launch_mini_game2') //Call Minigame 2 for mobile
            } else if (counter % 2 == 1) {
                // popUp.setAttribute('visible', 'false');
                instructions2.setAttribute('visible', 'false');
            }
            counter += 1;
        });
    }
});