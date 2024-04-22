// Variáveis
const tryButton = document.querySelector('#btn-try')
const againButton = document.querySelector('#btn-again')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

let aleatoryNumber = Math.round(Math.random() * 10)
let attempts = 1

// Events
tryButton.addEventListener('click', handleTryClick)
againButton.addEventListener('click', handleAgainClick)
document.addEventListener('keydown', enterClick)

//Functions
function handleTryClick(event) {
    event.preventDefault()
    
    const inputText = document.querySelector('#input-number')
    const inputNumber = Number(inputText.value)
    const textAgain = document.querySelector('.screen2 h2')
    const conditions = isNaN(inputNumber) || !Number.isInteger(inputNumber) || inputText.value === "" || inputNumber > 10 || inputNumber < 0
    
    if (conditions) {
        alert(`Erro de digitação, tente novamente.`)
    } else {
        console.log(aleatoryNumber)
        if (aleatoryNumber === inputNumber) {
            toggleScreen()
            textAgain.innerText = `Acertou em ${attempts} tentativas!`
        } else {
            alert('Você errou, tente novamente.')
        }        
        inputText.value = ""
        attempts++
    }
}

function handleAgainClick () {
    toggleScreen()
    aleatoryNumber = Math.round(Math.random() * 10)
    attempts = 1
}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function enterClick(e) {
    if (e.key === 'Enter' && screen1.classList.contains('hide')) {
        handleAgainClick()
    }
}