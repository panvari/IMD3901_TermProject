// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageNineController(){
    let message = document.querySelector('#kingMessage_09');

    if(sessionStorage.getItem('message9Shown') == 'true'){
        // console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    // console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message9Shown', 'true');
    }, 20000)

}

window.onload = messageNineController;