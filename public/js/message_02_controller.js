function messageTwoController(){
    let message = document.querySelector('#kingMessage_02');

    if(sessionStorage.getItem('message2Shown') == 'true'){
        console.log('Not showing Kings message!')
        return;
    }

    message.setAttribute('visible', 'true');
    console.log('Showing Kings message!')

    setInterval(() => {
        message.setAttribute('visible', 'false');
        sessionStorage.setItem('message2Shown', 'true');
    }, 35000)

}

window.onload = messageTwoController;