
document.addEventListener('DOMContentLoaded', () => {
    countUp()
})

//declare variables
const body = document.querySelector('body')
const counter = body.querySelector('#counter')

const minusBtn = body.querySelector('#minus')
const plusBtn = body.querySelector('#plus')
const heartBtn = body.querySelector('#heart')
const pauseBtn = body.querySelector('#pause')

const likesUl = body.querySelector('.likes')
const commentListDiv = body.querySelector('#list')

const form = body.querySelector('#comment-form')
const userInput = body.querySelector('#comment-input')

let isPaused = false

let count = -1  
let likesCount = {}

//count + reset count + pause count
function countUp() {
    if (!isPaused) {
    count++
    counter.textContent = count
    timerId = setTimeout(countUp, 1000)
    }
}

function resetCount() {
    count = -1
    counter.textContent = count
    pauseCount()
    countUp()
}

function pauseCount() { clearTimeout(timerId)}
   
//event listeners
pauseBtn.addEventListener('click', () => {
    if (!isPaused) {
    isPaused = true
    minusBtn.disabled = true
    plusBtn.disabled = true
    heartBtn.disabled = true
    pauseBtn.textContent = "Resume"
    } else {
        isPaused = false
        minusBtn.disabled = false
        plusBtn.disabled = false
        heartBtn.disabled = false
        pauseBtn.textContent = "pause"
        resetCount()
    }
})

heartBtn.addEventListener('click', () => {
    if (likesCount[count]) {
        likesCount[count]++;
    } else {
        likesCount[count] = 1;
    }

    const numberOfLikes = likesCount[count];
    const li = document.createElement('li');
    li.innerHTML = `${count} has been liked ${numberOfLikes} times!`;
    likesUl.appendChild(li);
})

minusBtn.addEventListener('click', () => {
    count--
   return counter.textContent--
})

plusBtn.addEventListener('click', () => {
    count++
    return counter.textContent++
 })
 
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const p = document.createElement('p')
    p.textContent = userInput.value
    commentListDiv.appendChild(p)
})

