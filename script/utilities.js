function getInnerTextById(id){
    const my_var = document.getElementById(id).innerText
    const my_var2 = parseInt(my_var)
    return my_var2
}

// helper function 1
function colorGenerator(){
    let randomColor = `#${Math.floor(Math.random()*16**6).toString(16)}`
    // converting hex <#FFFFFF> color to rgba color <#FFFFFF40> 
    let colorWithOpacity = randomColor + "40"
    // 00 → 0% opacity (fully transparent)
    // 40 → 25% opacity (fully transparent)
    // 80 → 50% opacity (semi-transparent)
    // FF → 100% opacity (fully opaque)

    document.getElementById("body").style.backgroundColor = colorWithOpacity
}

// helper functiob 2
function clearHistory() {
    let removingContainer = document.getElementById("history-container")
    removingContainer.innerText = ""
}