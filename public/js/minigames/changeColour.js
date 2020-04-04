AFRAME.registerComponent("change-blue",{
    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
            Context_AF.changeBlue();
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        });
    },

    changeBlue : function(){
        const Context_AF = this;

        let colourStr = Context_AF.el.getAttribute("material").color;
        document.querySelector("#blueTapestry").setAttribute('material','color',colourStr);
    }
});

AFRAME.registerComponent("change-white",{
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
            Context_AF.changeWhite();
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        });
    },

    changeWhite : function(){
        const Context_AF = this;

        let colourStr = Context_AF.el.getAttribute("material").color;
        document.querySelector("#whiteTapestry").setAttribute('material','color',colourStr);
    }
});

AFRAME.registerComponent("change-red",{
    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
            Context_AF.changeRed();
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        });
    },

    changeRed : function(){
        const Context_AF = this;

        let colourStr = Context_AF.el.getAttribute("material").color;
        document.querySelector("#redTapestry").setAttribute('material','color',colourStr);
    }
});

AFRAME.registerComponent("change-yellow",{
    init: function(){
        console.log('init component');

        const Context_AF = this;

        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
            Context_AF.changeYellow();
        });
        Context_AF.el.addEventListener('mouseleave', function(event){
            Context_AF.el.object3D.scale.set(1.0,1.0,1.0);
        });
    },

    changeYellow : function(){
        const Context_AF = this;

        let colourStr = Context_AF.el.getAttribute("material").color;
        document.querySelector("#yellowTapestry").setAttribute('material','color',colourStr);
    },
});

AFRAME.registerComponent("end-game",{
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('mouseenter', function(event){
            Context_AF.checkWin();
        });
    },

    checkWin : function(){
        if (document.querySelector("#yellowTapestry").getAttribute("material").color == "#ffab19" && document.querySelector("#blueTapestry").getAttribute("material").color == "#00008b" && document.querySelector("#whiteTapestry").getAttribute("material").color == "#ffffff" && document.querySelector("#redTapestry").getAttribute("material").color == "#e60000"){

            console.log("win condition");
            setTimeout(window.location.replace('/mobile'), 3000);
            socket.emit('tapestryMini_MobileWin')

        }
    }
});