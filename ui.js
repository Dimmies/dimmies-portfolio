// Click Avatar
let clickAviCount = 0
document.getElementById("personal-avatar").addEventListener("click", function() {
    clickAviCount++

    if (clickAviCount == 5) {
        clickAviCount = 0
        document.getElementById("personal-avatar").classList.add("spin")
        setTimeout(() => {
            document.getElementById("personal-avatar").classList.remove("spin")
        }, 2000);
    }
})

let infoButton = document.getElementById("info-button")
infoButton.addEventListener("mouseover", function(e) {
    infoButton.innerHTML = `LEARN MORE`
    infoButton.className = "info-btn-hover"
})

infoButton.addEventListener("mouseleave", function(e) {
    infoButton.innerHTML = `<i class="fa-solid fa-caret-down"></i>`
    infoButton.className = "info-btn-unhover"
})

// Show/Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-show")
        } else {
            entry.target.classList.remove("scroll-show")
        }
    });
});

const hiddenElements = document.querySelectorAll(".scroll-hide")
hiddenElements.forEach((el) => observer.observe(el))

// Hover Skill Effect
const handleOnMouseMove = e => {
    const { currentTarget : target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)
}

const handeOnMouseLeave = e => {
    const { currentTarget : target } = e;

    target.style.setProperty("--mouse-x", `-1000px`)
    target.style.setProperty("--mouse-y", `-1000px`)
}

for (const card of document.querySelectorAll(".skill-card")) {
    card.onmousemove = e => handleOnMouseMove(e)
    card.onmouseleave = e => handeOnMouseLeave(e)
}

for (const card of document.querySelectorAll(".experience-card")) {
    card.onmousemove = e => handleOnMouseMove(e)
    card.onmouseleave = e => handeOnMouseLeave(e)
}

function ScrollToContent() {
    window.scrollTo({
        behavior: 'smooth',
        top:
          document.querySelector("#info-aboutme").getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          200,
    })
}