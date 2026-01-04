/**
 * Global Modal Function to replace alert()
 * Requires Bootstrap 4 and jQuery
 */
function showModal(title, message, type = 'info') {
    let modalId = 'globalModal';
    let modal = document.getElementById(modalId);

    if (!modal) {
        const modalHtml = `
        <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="${modalId}Label" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="${modalId}Label"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p id="${modalId}Body" style="font-size: 1.1rem;"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        modal = document.getElementById(modalId);
    }

    const modalTitle = document.getElementById(`${modalId}Label`);
    const modalBody = document.getElementById(`${modalId}Body`);
    const modalHeader = modal.querySelector('.modal-header');

    modalTitle.textContent = title;
    modalBody.textContent = message;

    // Reset classes
    modalHeader.className = 'modal-header';
    if (type === 'success') {
        modalHeader.classList.add('bg-success');
        modalTitle.style.color = 'white';
    } else if (type === 'error') {
        modalHeader.classList.add('bg-danger');
        modalTitle.style.color = 'white';
    } else if (type === 'warning') {
        modalHeader.classList.add('bg-warning');
        modalTitle.style.color = 'black';
    } else {
        modalHeader.classList.add('bg-info');
        modalTitle.style.color = 'white';
    }

    $(`#${modalId}`).modal('show');
}
