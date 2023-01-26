let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
     count += 1
     countEl.textContent = count  
}

function remove(){
    count = count - 1
    countEl.textContent = count
}

function save(){
    countAndDash = count + " - "
    saveEl.textContent += countAndDash
    countEl.textContent = 0
    count = 0
}

