AFRAME.registerComponent("pick-up",{

    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            Context_AF.pickUp();
            });
    },

    pickUp : function(){
        
    },
});
