$(document).ready(function(){

    const buttonClose = $(".close-modal");
    const overlayModal = $(".modal-overlay")

    buttonClose.on('click', function(e){
        e.preventDefault();
        closeModal();
    });

    overlayModal.on('click', function(e){
        e.preventDefault();
        closeModal();
    });
});

function closeModal() {
    $(".modal").addClass("modal-closed");
}