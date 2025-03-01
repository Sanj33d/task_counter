// document.getElementById("btn-amar1")
// .addEventListener("click", function(){
//     const val = getInnerTextById("task-assigned")

//     const result = val - 1
//     if (result < 0) {
//         alert("You don't have any task assigned")
//     }
//     else {
//         document.getElementById("task-assigned").innerText = result

//     }
// })

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
    }
})
}