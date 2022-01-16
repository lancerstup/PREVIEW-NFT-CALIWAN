const cardImage  = document.querySelector('.card__image');
const cardOverlay = document.querySelector('.card__overlay')
const cardOverlayImage = document.querySelector('.card__overlay__image')

console.log(cardOverlay)

cardImage.addEventListener('mouseenter', () => {
  
    if(cardOverlay.classList.contains('fade-out')){
        cardOverlay.classList.remove('fade-out');
        cardOverlay.classList.add('fade-in');
        cardOverlayImage.classList.add('fade-go');
        cardOverlayImage.classList.remove('fade-out');
 
    }

})


cardOverlay.addEventListener('mouseleave', () => {
  
    if(cardOverlay.classList.contains('fade-in')){
        cardOverlay.classList.add('fade-out');
        cardOverlay.classList.remove('fade-in');
        cardOverlayImage.classList.remove('fade-go');
        cardOverlayImage.classList.add('fade-out');

    }
 
})











