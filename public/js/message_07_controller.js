// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageSevenController(){
    let message = document.querySelector('#kingMessage_07');

    if(sessionStorage.getItem('message7Shown') == 'true'){
        // console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    socket.emit('message07Mobile')
    // console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message7Shown', 'true');
    }, 3500000)

}

window.onload = messageSevenController;