// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageSixController(){
    let message = document.querySelector('#kingMessage_06');

    if(sessionStorage.getItem('message6Shown') == 'true'){
        // console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    sessionStorage.setItem('message6Shown', 'true');
    socket.emit('message06Mobile')
    // console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
    }, 20000)

}

window.onload = messageSixController;