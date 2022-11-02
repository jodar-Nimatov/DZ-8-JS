const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0

button.addEventListener ('click',function(e) {
    e.preventDefault()
    if (input.value === '') return
    createElement (input.value)
    input.value = ''
})

function createElement (value) {
    i++
    const button = document.createElement('button')
    const li = document.createElement('li')
    button.style.cssText = `
    border-radius: 30px;
    `
    li.textContent = value
    button.textContent = "delete"

    li.className = 'li'
    button.className = 'btn'

    result.appendChild (li)
    li.appendChild(button)

    button.addEventListener('click',function() {
        i--
        total.textContent = i
        result.removeChild(li)
    })

    li.addEventListener('click',function () {
        li.classList.toggle('li-active')
    })

    total.textContent = i
}



