
const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

const inputFunk = (e) => {
    const inputValue = e.target.value.trim()

    if (inputValue === '') {
        span.textContent = 'Anonymous'
    } else {
        span.textContent = inputValue
    }
}

input.addEventListener('input', inputFunk)