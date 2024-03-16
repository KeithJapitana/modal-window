"use strict";

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    return;
}

const openModal = function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', openModal);

}



btnClosemodal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown', function(e){

    if (e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        } 
       
    }
  }
    
);