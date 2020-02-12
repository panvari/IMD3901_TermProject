AFRAME.registerComponent('scorecomponent', {
    schema: {
    },

    init: function () {

        this.el.addEventListener('click', (event) => {
            console.log('add score!')
            let score = document.getElementsByName('a-gui-label');
            score.value = 'val';
      });
    }
});
