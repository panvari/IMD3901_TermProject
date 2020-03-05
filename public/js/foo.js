AFRAME.registerComponent('foo', {
    schema: {
        //Def Values        
    },

    tick: function() {
        this.el.addEventListener('collide', function(e) {
          console.log('Player has collided with ', e.detail.body.el);
          console.log(e.detail.target.el); // Original entity (playerEl).
          console.log(e.detail.body.el); // Other entity, which playerEl touched.
          console.log(e.detail.contact); // Stats about the collision (CANNON.ContactEquation).
          console.log(e.detail.contact.ni); // Normal (direction) of the collision (CANNON.Vec3).
        });
      }
});