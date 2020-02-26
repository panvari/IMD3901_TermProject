AFRAME.registerComponent('player_position', {
    schema: {
        //Def Values        
    },


    tick: function (time, timeDelta) {
            var playerCamera = this.el.sceneEl.camera.el;
            let playerPosition = playerCamera.getAttribute('position');
            let playerRotation = playerCamera.getAttribute('rotation');

            console.log(playerPosition, playerRotation);

            if(playerCamera) 
    }
});
