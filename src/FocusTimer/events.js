import * as el from './elements.js';
import * as actions from './actions.js'

export function registerControls(){
    el.controls.addEventListener('click', event => {
        const action = event.target.dataset.action
        if(actions[action]() != 'function') return
        
        actions[action]()
    })
}   

export function registerMusicTheme() {
    el.musicTheme.addEventListener('click', event => {
        const theme = event.target.dataset.theme
        if(actions[theme]() != 'function') return

        actions[theme]()
})
}

