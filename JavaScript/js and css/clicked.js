function toggleButton(selector) {
    const button = document.querySelector(selector);
    if (!(button.classList.contains('is-toggled'))) {



        turnOffPreviousButton();
        
        button.classList.add('is-toggled');

    } else {
      button.classList.remove('is-toggled');
    }
  }
function turnOffPreviousButton(){
    const preb = document.querySelector('.is-toggled')
    if(preb){
        preb.classList.remove('is-toggled')
    }
}