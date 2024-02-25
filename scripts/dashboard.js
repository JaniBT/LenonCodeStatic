const navOpener = document.querySelector('#showNav-btn')
const navCloser = document.querySelector('#closeNav-btn')
const sideNav = document.querySelector('.side-nav')

navOpener.onclick = function(e) {
    sideNav.style.display = "flex"
    navOpener.style.display = "none"
    navCloser.style.display = "block"
}

navCloser.onclick = function(e) {
    sideNav.style.display = "none"
    navCloser.style.display = "none"
    navOpener.style.display = "block"
}

window.addEventListener('resize', e => {
    const screenWidth = window.innerWidth
    if (screenWidth > 700) {
        sideNav.display = "flex"
    }
});

const signout_modal = document.querySelector('.signout-modal')
const agree_btn = signout_modal.querySelector('#agree-btn')
const disagree_btn = signout_modal.querySelector('#disagree-btn')
const quit_btn = document.querySelector('#quit-btn')

quit_btn.onclick = function(e) {
    signout_modal.style.display = "flex"
    document.body.style.opacity = "0.8"
    signout_modal.style.opacity = "1"
}

disagree_btn.onclick = function(e) {
    signout_modal.style.display = "none"
    document.body.style.opacity = ""
}

agree_btn.onclick = function(e) {
    window.open('../subpages/codebases.html', '_parent')
}