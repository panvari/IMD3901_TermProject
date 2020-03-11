AFRAME.registerComponent('player_position', {
    schema: {
        
    },

    tick: function (time, timeDelta) {

        console.log(this.el.getAttribute('position'));

        let playerPosition = this.el.getAttribute('position');

        if(0 < playerPosition.x < 1 && playerPosition.z < -38){ //specify specific points around castle
            // console.log('change to scene 2 (Great Hall) ')
            changeScene(3); //call changescene function within the startScene imbedded html script
        };
}
});
