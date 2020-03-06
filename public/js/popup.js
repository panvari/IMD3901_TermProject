AFRAME.registerComponent('popup', {
    schema: {
        // Def Values
    },

    init: function () {
        let popUp = document.querySelector('#popUp');
        let counter = 0;

        this.el.addEventListener('click', () => {
            if(counter % 2 == 0){
                    popUp.setAttribute('visible', 'true')
                    console.log('visible')
                }else if(counter % 2 == 1 ){
                    popUp.setAttribute('visible', 'false');
                    console.log('invisible')
                }
                counter += 1;
        })
    }
});
