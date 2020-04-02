// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageFiveController(){
    let message = document.querySelector('#kingMessage_05');

    if(sessionStorage.getItem('message5Shown') == 'true'){
        // console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    socket.emit('message05Mobile')
    // console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message5Shown', 'true');
    }, 3500000)

}

window.onload = messageFiveController;