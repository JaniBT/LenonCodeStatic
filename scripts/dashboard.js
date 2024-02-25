const navOpener = document.querySelector('#showNav-btn')
const navCloser = document.querySelector('#closeNav-btn')
const sideNav = document.querySelector('.side-nav')

navOpener.onclick = function(e) {
    sideNav.style.display = "flex"
    navOpener.style.display = "none"
    navCloser.style.display = "block"
    navCloser.style.marginLeft = "4.5rem"
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