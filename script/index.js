let arr = ["btn-amar1", "btn-amar2", "btn-amar3", "btn-amar4", "btn-amar5", "btn-amar6"]

for (let x of arr) {
    document.getElementById(x)
    .addEventListener("click", function(){
    const val = getInnerTextById("task-assigned")

    const result = val - 1
    if (result < 0) {
        alert("You don't have any task assigned")
    }
    else {
        document.getElementById("task-assigned").innerText = result
        document.getElementById(x).style.backgroundColor = "#9BA8F8"
        
        // task-completed incrementing
        let taskCompleted = document.getElementById("task-completed").innerText
        let newTaskCompleted = parseInt(taskCompleted) + 1
        document.getElementById("task-completed").innerText = newTaskCompleted

        // history log incrementing
        let parent_elem = document.getElementById("history-container")

        let new_elem = document.createElement("p")
        // getting parent element
        let childNode = document.getElementById(x)
        let parentNode = childNode.parentElement
        let grandParentNode = parentNode.parentElement

        let requiredParent = grandParentNode.querySelector("h3")
        let requiredParentContent = requiredParent.innerText

        new_elem.innerText = `
        You have Complete The Task ${requiredParentContent} at `
        new_elem.classList.add("bg-[#F4F7FF]","mt-6","mb-7", "rounded-lg", "px-3", "py-3")

        // real time display
        let irlTime = new Date()
        new_elem.innerText += irlTime.toLocaleTimeString()
        parent_elem.appendChild(new_elem)

    }
})
}
// click theme button to change background
document.getElementById("btn-theme")
.addEventListener("click", function(){
    colorGenerator()
})

// click clear history button to clear all history
document.getElementById("btn-history")
.addEventListener("click", function(){
    clearHistory()
})

// click banner mid div to go to blog.html
const bannerMid = document.getElementById("banner-mid")
bannerMid.addEventListener("click", function(){
    window.location.href = "blog.html"
})