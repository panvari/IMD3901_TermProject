// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageFourController(){
    let message = document.querySelector('#kingMessage_04');

    if(sessionStorage.getItem('message4Shown') == 'true'){
        // console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    socket.emit('message04Mobile')
    // console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message4Shown', 'true');
    }, 3500000)

}

window.onload = messageFourController;