import * as elements from './elements.js'

export function registerControls(){
    elements.home.addEventListener('click', () => {
        elements.exploration.classList.remove('select')
        elements.universe.classList.remove('select')
        elements.body.classList.remove('universe', 'exploration')
        elements.home.classList.add('select')
    })
    
    elements.universe.addEventListener('click', () => {
        elements.home.classList.remove('select')
        elements.exploration.classList.remove('select')
        elements.body.classList.remove('exploration')
        elements.body.classList.add('universe')
        elements.universe.classList.add('select')
    })
    
    elements.exploration.addEventListener('click', () => {
        elements.home.classList.remove('select')
        elements.universe.classList.remove('select')
        elements.body.classList.remove('universe')
        elements.body.classList.add('exploration')
        elements.exploration.classList.add('select')
    })
}

