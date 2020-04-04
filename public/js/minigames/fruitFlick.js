AFRAME.registerComponent("flick",{

    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log("fruit clicked");
            Context_AF.flick();
            });
    },

    flick : function(){
        const Context_AF = this;
        let fruits = document.querySelectorAll(".fruit");

        if (Context_AF.el.classList.contains("allowed")){
            console.log(Context_AF.el);
            // Context_AF.el.setAttribute('animation__2', {property: 'position', to: {x:camPosition.x, y:camPosition.y, z:camPosition.z}, loop: false, dur:2000, easing: 'easeInOutQuad'});
            Context_AF.el.parentNode.removeChild(Context_AF.el);
        }
        else{
            console.log("not allowed!");
            Context_AF.el.classList.remove("clickable");
            Context_AF.el.setAttribute("visible","false");
        }

        fruits = document.querySelectorAll(".fruit");
        let index = 0;
        
        if (!fruits.length){
            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
        }
        else {
            do {
                index = Math.floor(Math.random() * fruits.length);
            }
            while(fruits[index].classList.contains("clickable") && (fruits.length >= 1));
            
            fruits[index].setAttribute("visible", "true");
            fruits[index].classList.add("clickable");
        }
    },
});

AFRAME.registerComponent("delete-fruit",{
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            Context_AF.remove();
        });
    },

    remove : function(){
        const Context_AF = this;
        let fruits = document.querySelectorAll(".fruit");

        console.log(fruits);

        if (document.querySelector(".fruit").classList.contains("notAllowed")){
            console.log("gonna remove");
            for(i=0; i < fruits.length; i++){
                if(fruits[i].classList.contains("clickable")){
                    Context_AF.el.parentNode.removeChild(fruits[i]);
                    break;
                }
            }
            
            // Context_AF.el.setAttribute('animation__2', {property: 'position', to: {x:camPosition.x, y:camPosition.y, z:camPosition.z}, loop: false, dur:2000, easing: 'easeInOutQuad'});
        }
        else{
            for(i=0; i < fruits.length; i++){
                if(fruits[i].classList.contains("clickable")){
                    console.log("WRONG");
                    fruits[i].classList.remove("clickable");
                    fruits[i].setAttribute("visible","false");
                    break;
                }
            }
        }

        fruits = document.querySelectorAll(".fruit");
        let index = 0;

        if (!fruits.length){
            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
            socket.emit('fruitMini_MobileWin');
        }
        else {
            console.log("next fruit");
            do {
                index = Math.floor(Math.random() * fruits.length);
            }
            while(fruits[index].classList.contains("clickable") && (fruits.length >= 1));

            fruits[index].setAttribute("visible", "true");
            fruits[index].classList.add("clickable");
        }
    },
});