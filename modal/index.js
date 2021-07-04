const modal = $.modal()

document.addEventListener('click', event =>{
    if(event.target.dataset.open) {
        modal.open();
    }
})