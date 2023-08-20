import drawField from "./services/drawField.js";

document.querySelectorAll('.drawButtons button')
    .forEach(btn => {
    btn.onclick = () => {
        resetField(document.querySelector('#playground'))
        drawField(btn.id)
    }
})

let resetField = (parent) => {
    Array.from(parent.children).forEach(row => {
        parent.removeChild(row)
    })
}

// TODO:
// 1. Перевірка діагоналей
// 2. Блокування поля після закінчення гри