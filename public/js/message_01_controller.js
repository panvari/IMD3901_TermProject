// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageOneController(){
    let message = document.querySelector('#kingMessage_01');

    if(sessionStorage.getItem('message1Shown') == 'true'){
        console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message1Shown', 'true');
    }, 35000)

}

window.onload = messageOneController;