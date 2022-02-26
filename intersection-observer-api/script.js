let isIntersecting = false
let timeoutID

// check that the target remains visible for at least one second
function handleChange(bool) {
    isIntersecting = bool

    clearTimeout(timeoutID)

    timeoutID = setTimeout(() => {
        if (isIntersecting && document.hasFocus()) {
        console.log('Target Seen')
        }
    }, 1000)
}

// observe for intersection only if document is visible
function handleTabVisibility() {
    if (document.visibilityState === "hidden") {
        observer.unobserve(document.querySelector(".target"));
    } else {
        observer.observe(document.querySelector(".target"));
    }
}

// target div has to be at least 50% of its size visible
const observer = new IntersectionObserver(entries => handleChange(entries[0].isIntersecting), { threshold: [0.5] });

document.addEventListener("visibilitychange", handleTabVisibility, false);

window.onload = () => {
    observer.observe(document.querySelector(".onetag"));
}
