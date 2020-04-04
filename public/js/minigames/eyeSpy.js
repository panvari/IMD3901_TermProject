AFRAME.registerComponent("pick-up",{

    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            Context_AF.pickUp();
            });
    },

    pickUp : function(){

        const Context_AF = this;

        if (Context_AF.el.classList.contains("collectable")){
            Context_AF.el.classList.add("collected");
            Context_AF.el.classList.remove("clickable");
            Context_AF.el.setAttribute("visible", "false");
        }

        let items = document.querySelectorAll(".collected");

        if(items.length == 4){
            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
        }
    },
});