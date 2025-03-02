// task assigned decrementing
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
        new_elem.innerText = `
        You have Complete The Task Add Dark Mode at`

        parent_elem.appendChild(new_elem)




    }
})
}
// 
