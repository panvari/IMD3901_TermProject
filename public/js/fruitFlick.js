let fruits = document.querySelectorAll(".fruit");

AFRAME.registerComponent("flick",{

    init: function(){
        console.log('init component');

        const Context_AF = this;

        if (Context_AF.el.className == "fruit"){
            Context_AF.el.addEventListener('click', function(event){
                Context_AF.flick();
            });
        }

        else{
            Context_AF.el.addEventListener('click', function(event){
                console.log("clicked")
                Context_AF.remove();
            });
        }
    },

    flick : function(){
        const Context_AF = this;
        if (Context_AF.el.className == "allowed"){

            Context_AF.el.parentNode.removeChild(Context_AF.el);
            Context_AF.nextFruit();
        }
    },
    remove : function(){
        const Context_AF = this;

        if (Context_AF.el.className == "notAllowed"){
            Context_AF.el.parentNode.removeChild(Context_AF.el);
            Context_AF.nextFruit();
        }
    },
    nextFruit : function(){

        let index = fruits.indexOf(Context_AF.el);
        if (index > -1){
            fruits.splice(index,1);
        }

        if (fruits.length == 0){
            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
        }
        else {
            fruits[0].setAttribute("visible", "true");
        }

    }
});
