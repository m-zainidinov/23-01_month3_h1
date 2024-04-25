const link = document.getElementById('link')
const email = document.getElementById('email')

link.addEventListener('input', function() {
    const http = link.value
    if (trueLink(http)) {
        link.className = 'true'
    } else {
        link.className = 'false'
    }
})

email.addEventListener('input', function() {
    const post = email.value
    if (trueEmail(post)) {
        email.className = 'true'        
    } else {
        email.className = 'false'        
    }
})

function trueLink(http) {
    return /^https?:\/\/.*\..*/.test(http)
}

function trueEmail(post) {
    return /.+@.+\..+/.test(post)
}

