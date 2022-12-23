

const button = document.querySelector('#button')
const output = document.querySelector('#output')

button.addEventListener('click', () => {
    let input = document.querySelector('#input').value
    let revers = input.split('').reverse().join('')
    if (input.localeCompare(revers) == 0) {
        output.innerHTML = "Palindrome "
    } else {
        output.innerHTML = "Not a Palindrome "
    }
})