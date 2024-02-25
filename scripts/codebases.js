let typed = new Typed(".typjs", {
    strings: ["LenonCode", "Our CodeBase", "Hard to find huh?"],
    typeSpeed: 100,
    backDelay: 650,
    backSpeed: 100,
    loop: true
})

let logins = {
    login_auth: [
        {
            username: 'root',
            password: 'Passw123'
        },
        {
            username: 'sysOp',
            password: 'Po32My-#'
        },
        {
            username: 'Pointr23',
            password: 'Lu1-yM'
        }
    ]
}

const login_button = document.querySelector('#login-button')
const login_form = document.getElementById('myForm')
const header = document.querySelector('header')
const loginbutton = document.querySelector('#loginbutton')
const exit_button = document.getElementById('exit-btn')

const user = document.querySelector('#username')
const passw = document.querySelector('#passw')

login_button.onclick = function(e) {
    header.style.opacity = '0.7'
    login_form.style.display = "block"
}

exit_button.onclick = function(e) {
    header.style.opacity = '1'
    login_form.style.display = 'none'
}

let number_of_tries = 0
let time_left = 60
let nIntervId

let login_user_list = []

loginbutton.addEventListener('click', e => {
    e.preventDefault()
    if (!user.value || !passw.value) {
        alert('Please fill out the user and the password form!')
    } else {
        if (number_of_tries < 3) {
            let user_found = false
            for (let i = 0; i < logins.login_auth.length; i++) {
                if (logins.login_auth[i].username == user.value && logins.login_auth[i].password == passw.value) {
                    user_found = true
                    login_user_list.push(logins.login_auth[i].username)
                    break
                } else {
                    user_found = false
                }
            }
            if (user_found) {
                window.open('../subpages/codebaseDashboard.html', '_parent')
            } else {
                number_of_tries += 1
                alert(`Username or Password is incorrect. Try again! You have ${4 - number_of_tries} tries left!`)
            }
        } else if (number_of_tries === 3) {
            alert('You exceeded your login attempts!')
            nIntervId = setInterval(function(e) { time_left -= 1 }, 1000)
            setTimeout(function(e) { number_of_tries = 0; time_left = 60; if (time_left === 60) { clearInterval(nIntervId); alert('You can try again!'); }}, 60000)
            number_of_tries += 1
        } else {
            alert(`You can try again after ${time_left} seconds!`)
        }
    }
})