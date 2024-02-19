const square = document.querySelector(".game-square")
const f = square.querySelector("#foo")

square.addEventListener("click", (ev) => {
    let rect = square.getBoundingClientRect();
    f.style.transform = `translateY(${(ev.clientY - rect.top) - 25}px)`
    f.style.transform += `translateX(${(ev.clientX - rect.left) - 25}px)`
  },
  false,
);
