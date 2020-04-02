// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageThreeController(){
    let message = document.querySelector('#kingMessage_03');

    if(sessionStorage.getItem('message3Shown') == 'true'){
        // console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    // console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message3Shown', 'true');
    }, 35000)

}

window.onload = messageThreeController;