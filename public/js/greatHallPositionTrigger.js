AFRAME.registerComponent('player_position', {
    schema: {

    },

    tick: function(time, timeDelta) {
        // console.log(this.el.getAttribute('position'));

        let playerPosition = this.el.getAttribute('position');

        if (0 < playerPosition.x < 1 && playerPosition.z > 3) { // MAIN COURTYARD
            console.log('main courtyard')
            changeScene('main_courtyard'); //call changescene function within the startScene imbedded html script
        }

        if (playerPosition.x < -12 && playerPosition.x > -10.5 && playerPosition.z < -14 && playerPosition.z > -16) { // KITCHEN
            console.log('kitchen')
            changeScene('kitchen'); //call changescene function within the startScene imbedded html script
        }

        // if (-12 > playerPosition.x > -13 && -29 > playerPosition.z > -30) { //WEAPON ROOMw
        //     console.log('weapon room')
        //     changeScene('weapon_room'); //call changescene function within the startScene imbedded html script
        // }

        // if (-1 < playerPosition.x < 1 && playerPosition.z < -31) { // UPPER CORRIDOR
        //     console.log('Upper corridor')
        //     changeScene('upper_corridor'); //call changescene function within the startScene imbedded html script
        // }

        // if (12 < playerPosition.x < 13 && -29 > playerPosition.z > -30) { //GUARD QUARTERS
        //     console.log('Guard Quarters')
        //     changeScene('guard_quarters'); //call changescene function within the startScene imbedded html script
        // }

        // if (12 < playerPosition.x < 13 && -14.5 > playerPosition.z > -15.5) { //HALLWAY TO OUTSIDE
        //     console.log('Hallway outside')
        //     changeScene('hallway'); //call changescene function within the startScene imbedded html script
        // }

        // if (12 < playerPosition.x < 13 && -4.5 > playerPosition.z > -5.5) { //SERVANTS QUARTERS
        //     console.log('Servants Quarters')
        //     changeScene('servants_quarters'); //call changescene function within the startScene imbedded html script
        // }
    }
});