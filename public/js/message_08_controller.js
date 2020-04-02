// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageEightController(){
    let message = document.querySelector('#kingMessage_08');

    if(sessionStorage.getItem('message8Shown') == 'true'){
        // console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    // console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message8Shown', 'true');
    }, 35000)

}

window.onload = messageEightController;