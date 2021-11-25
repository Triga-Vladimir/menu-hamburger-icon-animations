const body = document.querySelectorAll('.hum');


body.forEach((btn) => {
    btn.addEventListener('click', () => {
        body.forEach((btnItem) => {
            if (btnItem === btn) {
                btnItem.classList.toggle('open')
            }
        })

    });
});
