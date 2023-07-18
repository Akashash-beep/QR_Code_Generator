let input_box = document.getElementById('input_box');
let btn = document.getElementById('btn');
let img = document.querySelector('img');
let container = document.getElementById('cont');
let alerting = document.getElementById('Alert');
let closed = document.getElementById('close');
btn.addEventListener('click', () => {

    if (input_box.value == "") {
        container.classList.remove('active');
        alerting.classList.add('keyactive');
        closed.addEventListener('click', () => {
            alerting.classList.add('keydeactive');
            alerting.classList.remove('keyactive');
            setTimeout(() => {
                alerting.classList.remove('keydeactive');
            }, 1000)

        })

    }
    else if (input_box.value != "") {
        container.classList.add('active');
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=255-255-255&bgcolor=56-103-255&data=${input_box.value}`;
        alerting.classList.remove('keyactive');

    }
    input_box.value = "";

})
