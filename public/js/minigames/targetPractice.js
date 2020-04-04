AFRAME.registerComponent("flick",{

    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            Context_AF.flick();
            });
    },

    flick : function(){
        const Context_AF = this;
        let targetParent = document.getElementById("targets");
        let yRot = document.getElementById("camera").object3D.rotation.y;


        if (yRot >= 0.669 && yRot <= 0.872){
            console.log(yRot);
            targetParent.removeChild(document.getElementById("target1"));
        }
        else if (yRot >= 0.13 && yRot <= 0.326){
            console.log(yRot);
            targetParent.removeChild(document.getElementById("target2"));
        }
        else if (yRot >= -0.402 && yRot <= -0.222){
            console.log(yRot);
            targetParent.removeChild(document.getElementById("target3"));
        }
        else if (yRot >= -0.792 && yRot <= -0.604){
            console.log(yRot);
            targetParent.removeChild(document.getElementById("target4"));
        }
        else if (yRot >= -1.292 && yRot <= -1.03){
            console.log(yRot);
            targetParent.removeChild(document.getElementById("target5"));
        }

        let targets = document.querySelectorAll(".target");
        if (!targets.length){
            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
            socket.emit('targetMini_MobileWin')
        }
        
    },
});