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
        console.log("pickup function");

        let camera = document.getElementById("camera");
        let propsList = document.getElementById("props");

        let activeItem = false;
        let props = document.querySelectorAll(".prop");

        for(i = 0; i <props.length; i++){
            if(props[i].classList.contains("active")){
                activeItem = true;
                break;
            }
        }
        if(!activeItem){
            console.log("attach to camera");

            let indicator = document.createElement("a-entity");
            indicator.setAttribute("geometry",{primitive:"sphere", radius:0.5 })

            if(Context_AF.el.classList.contains("blue")){
                indicator.setAttribute("position",{x:0, y:6, z:0 })
            }
            else{
                indicator.setAttribute("position",{x:0, y:12, z:0 })
            }
            indicator.setAttribute("material", "color", "#1f66e5");
            indicator.setAttribute('light', {type: 'point', intensity: 0.05, color:'#1f66e5'});

            Context_AF.el.appendChild(indicator);

            Context_AF.el.classList.add("active");
        }
    },
});

AFRAME.registerComponent("match",{

    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            Context_AF.match();
            });
    },

    match : function(){
        const Context_AF = this;
        let props = document.querySelectorAll(".prop");

        for(i = 0; i < props.length; i++) {
            if (props[i].classList.contains("active")) {
                if((props[i].classList.contains("blue") && Context_AF.el.classList.contains("blue")) || 
                    (props[i].classList.contains("green") && Context_AF.el.classList.contains("green")) || 
                    (props[i].classList.contains("red") && Context_AF.el.classList.contains("red")) || 
                    (props[i].classList.contains("purple") && Context_AF.el.classList.contains("purple")) || 
                    (props[i].classList.contains("yellow") && Context_AF.el.classList.contains("yellow"))){

                    props[i].parentNode.removeChild(props[i]);
                }
            }
        };

        props = document.querySelectorAll(".prop");
        if(!props.length){
            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
            socket.emit('armourMini_MobileWin')
        }
    },
});