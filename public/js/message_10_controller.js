// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageTenController(){
    let message = document.querySelector('#kingMessage_10');

    if(sessionStorage.getItem('message10Shown') == 'true'){
        // console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    socket.emit('message10Mobile')
    // console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message10Shown', 'true');
    }, 3500000)

}

window.onload = messageTenController;