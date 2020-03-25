AFRAME.registerComponent('player_position', {
    schema: {

    },

    tick: function(time, timeDelta) {

        // console.log(this.el.getAttribute('position'));

        let playerPosition = this.el.getAttribute('position');

        if (-1 < playerPosition.x < 1 && playerPosition.z > 9.5) { //specify specific points around castle
            // console.log('change to scene 2 (Great Hall) ')
            changeScene(3.1); //call changescene
        };
    }
});