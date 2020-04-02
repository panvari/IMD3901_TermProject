let clothes = document.querySelectorAll(".clothing");

AFRAME.registerComponent("flick",{

    init: function(){
        console.log('init component');

        const Context_AF = this;

        if (Context_AF.el.className == "clothing"){
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

        let index = clothes.indexOf(Context_AF.el);
        if (index > -1){
            clothes.splice(index,1);
        }

        if (clothes.length == 0){
            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
        }
        else {
            clothes[0].setAttribute("visible", "true");
        }

    }
});
