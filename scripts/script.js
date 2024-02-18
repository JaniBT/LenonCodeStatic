const left_arrow = document.querySelector("#left-arrow")
const right_arrow = document.querySelector("#right-arrow")
const img_container = document.querySelector(".img-container")

const images = ["url('../assets/images/image-cont.jpg') center/cover no-repeat", "url('../assets/images/image-cont2.jpg') center/cover no-repeat", "url('../assets/images/image-cont3.jpg') center/cover no-repeat"]
let index_of_images = 0
const min_index = 0
const max_index = 2
function index_sum() {
    if (index_of_images !== max_index) {
        index_of_images += 1
        img_container.style.background = images[index_of_images]
    } else {
        index_of_images = 0
        img_container.style.background = images[index_of_images]
    }
}

setInterval(index_sum, 15000)

left_arrow.addEventListener('click', e => {
    if (index_of_images !== min_index) {
        index_of_images -= 1
        img_container.style.background = images[index_of_images]
    } else {
        index_of_images = 2
        img_container.style.background = images[index_of_images]
    }
})

right_arrow.addEventListener('click', e => {
    if (index_of_images !== max_index) {
        index_of_images += 1
        img_container.style.background = images[index_of_images]
    } else {
        index_of_images = 0
        img_container.style.background = images[index_of_images]
    }
})