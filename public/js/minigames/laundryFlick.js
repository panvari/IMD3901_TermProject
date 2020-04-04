AFRAME.registerComponent("flick",{

    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log("clothing clicked");
            Context_AF.flick();
            });
    },

    flick : function(){
        const Context_AF = this;
        let clothes = document.querySelectorAll(".clothing");

        console.log(clothes);

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

        clothes = document.querySelectorAll(".clothing");
        let index = 0;
        
        if (!clothes.length){
            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
        }
        else {
            do {
                index = Math.floor(Math.random() * clothes.length);
            }
            while(clothes[index].classList.contains("clickable") && (clothes.length >= 1));
            
            console.log("next clothing");
            clothes[index].setAttribute("visible", "true");
            clothes[index].classList.add("clickable");
        }
    },
});

AFRAME.registerComponent("delete-clothing",{
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            Context_AF.remove();
        });
    },

    remove : function(){
        const Context_AF = this;
        let clothes = document.querySelectorAll(".clothing");

        console.log(clothes);

        if (document.querySelector(".clothing").classList.contains("notAllowed")){
            console.log("gonna remove");
            for(i=0; i < clothes.length; i++){
                if(clothes[i].classList.contains("clickable")){
                    Context_AF.el.parentNode.removeChild(clothes[i]);
                    break;
                }
            }
            
            // Context_AF.el.setAttribute('animation__2', {property: 'position', to: {x:camPosition.x, y:camPosition.y, z:camPosition.z}, loop: false, dur:2000, easing: 'easeInOutQuad'});
        }
        else{
            for(i=0; i < clothes.length; i++){
                if(clothes[i].classList.contains("clickable")){
                    console.log("WRONG");
                    clothes[i].classList.remove("clickable");
                    clothes[i].setAttribute("visible","false");
                    break;
                }
            }
        }

        clothes = document.querySelectorAll(".clothing");
        let index = 0;

        if (!clothes.length){
            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
            socket.emit('laundryMini_MobileWin')
        }
        else {
            console.log("next clothing");
            do {
                index = Math.floor(Math.random() * clothes.length);
            }
            while(clothes[index].classList.contains("clickable") && (clothes.length >= 1));

            clothes[index].setAttribute("visible", "true");
            clothes[index].classList.add("clickable");
        }
    },
});