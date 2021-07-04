function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin',`
    <div class="modal-overlay" data-close="true">
        <div class="modal-window">
            <div class="modal-title">
                <div class="modal-close" data-close="true">&times;</div>
                <div>
                    <input type="text" class="modal-textinput" name="" id="" placeholder='Имя' required></input> <br>
                    <input type="tel" class="modal-textinput" name="" id="" placeholder='Номер телефона' required></input> <br>
                    <input type="email" class="modal-textinput" name="" id="" placeholder='Email' required></input> <br>
                    <input type="text" class="modal-textinput" name="" id="" placeholder='Название товара' required></input>
                </div>

            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}



$.modal = function(options){

    const $modal = _createModal(options);
    
    const modal = {
        open(){
            $modal.classList.add('open');
        },
        close(){
            $modal.classList.remove('open')
        },
        destroy(){}
    }


    $modal.addEventListener('click', event =>{
        if(event.target.dataset.close) {
            modal.close();
        }
    })
    
    return modal
}