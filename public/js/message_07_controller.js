// CONTROL FOR KING MESSAGES THROUGHOUT THE GAME

function messageSevenController(){
    let message = document.querySelector('#kingMessage_07');

    if(sessionStorage.getItem('message7Shown') == 'true'){
        // console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    // console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message7Shown', 'true');
    }, 35000)

}

window.onload = messageSevenController;