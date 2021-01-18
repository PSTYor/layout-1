window.onload = function() {
    document.querySelector('.subscribe-form').onsubmit = function(event) {
        event.preventDefault();

        ajaxRequest();
    };
};

function ajaxRequest() {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'php/sendingLetter.php');

    let formData = new FormData(document.querySelector('.subscribe-form'));

    xhr.send(formData);

    xhr.onload = function() {
        if(this.readyState === 4 && this.status === 200) {
            alert(this.response);
        }
    };
}