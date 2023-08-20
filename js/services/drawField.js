export default (size) => {
    let isXNext = true
    for(let i = 0; i < size; i++) {
        let container = document.createElement('div')
        container.classList.add('grid','gap-2',`grid-cols-${size}`)
        for(let j = 0; j<size; j++) {
            let button = document.createElement('button')
            button.classList.add('bg-slate-600', 'text-white','min-h-[30px]')
            button.setAttribute('data-col', j)
            button.setAttribute('data-row', i)
            button.addEventListener('click', function(){
                if(!button.innerText) {
                    button.innerText = isXNext ? 'X' : 'O'
                    isXNext = !isXNext
                }
                checkWinner(button)
            })
            container.appendChild(button)
        }
        let playground = document.querySelector('#playground');
        playground.appendChild(container)
    }
}
function checkWinner(target) {
    if(Array.from(target.parentNode.children).every(item => item.innerText === target.innerText)) {
        alert('Winner is: '+target.innerText )
        return
    }
    if(Array.from(
            document.querySelectorAll(
                `[data-col="${target.getAttribute('data-col')}"]`
            )
        ).every(item => item.innerText === target.innerText)
    ) {
        alert('Winner is: '+target.innerText )
        return
    }
}