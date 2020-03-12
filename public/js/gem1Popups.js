AFRAME.registerComponent('popup', {
    schema: {
        // Def Values
    },

    init: function() {
        let popUp = document.querySelector('#popUp');
        let counter = 0;
        const gemNoise = new Audio("/audio/gemNoise.wav");
        let instructions1 = document.querySelector('#armourInstructions');

        this.el.addEventListener('click', () => {
            if (counter % 2 == 0) {
                // popUp.setAttribute('visible', 'true')
                instructions1.setAttribute('visible', 'true');
                gemNoise.play();
                socket.emit('launch_mini_game1') //Call Minigame 1 for mobile
            } else if (counter % 2 == 1) {
                // popUp.setAttribute('visible', 'false');
                instructions1.setAttribute('visible', 'false');
            }
            counter += 1;
        });
    }
});