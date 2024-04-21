// Variáveis
const tryButton = document.querySelector('#btn-try')
const againButton = document.querySelector('#btn-again')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let aleatoryNumber = Math.round(Math.random() * 10)
let attempts = 1

// Events
tryButton.addEventListener('click', handleTryClick)
againButton.addEventListener('click', function() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    aleatoryNumber = Math.round(Math.random() * 10)
    attempts = 1
})

//Functions
function handleTryClick(event) {
    event.preventDefault()
    
    console.log(aleatoryNumber)
    
    const inputText = document.querySelector('#input-number')
    const inputNumber = parseInt(inputText.value)
    const textAgain = document.querySelector('.screen2 h2')
    
    if (isNaN(inputNumber)) {
        alert(`Erro de digitação, tente novamente.`)
    } else if (aleatoryNumber === inputNumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        textAgain.innerText = `Acertou em ${attempts} tentativas!`
    } else {
        alert('Você errou, tente novamente.')
    }
    
    inputText.value = ""
    attempts++
}