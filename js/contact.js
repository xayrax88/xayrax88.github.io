
const scriptURL = 'https://script.google.com/macros/s/AKfycbyjzng9BiYQsyBbQcR3Om8w_EcM9B_V2-Xkqy5RlvdzUaxie6IkFbxCPmVSCjFCODeggA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 10000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})
