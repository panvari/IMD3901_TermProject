AFRAME.registerComponent('player_position', {
    schema: {
        //Def Values        
    },

    tick: function (time, timeDelta) {
            var playerCamera = this.el.sceneEl.camera.el;
            let playerPosition = playerCamera.getAttribute('position');
            let playerRotation = playerCamera.getAttribute('rotation');

            // console.log(playerPosition, playerRotation);

            if(playerPosition.z > -5000 && playerPosition.z < -4000){ //specify specific points around castle
                // console.log('true')
                changeScene(2); //call changescene function within the startScene imbedded html script
            };
    }
});
