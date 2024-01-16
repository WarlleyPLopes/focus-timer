import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'


// Controls
export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function timeAddition(){
   el.minutes.textContent = Number(el.minutes.textContent) + 5
   if(el.minutes.textContent > 60){
       el.minutes.textContent = 60
   }
}

export function timeLess(){
    el.minutes.textContent = Number(el.minutes.textContent) - 5
    if(el.minutes.textContent < 5){
        el.minutes.textContent = 0
    }
}

// Music Theme
export function forest(){
    state.isMuted = document.documentElement.classList.toggle('music-on')
    document.querySelector('.ph-tree-palm').classList.toggle('activated')
    if(state.isMuted){
        sounds.forest.play()
    } else (sounds.forest.pause())
    console.log(state.isMuted)
}

export function rain(){
    state.isMuted = document.documentElement.classList.toggle('music-on')
    document.querySelector('.ph-cloud-rain').classList.toggle('activated')
    if(state.isMuted){
        sounds.rain.play()
    } else (sounds.rain.pause())
}

export function coffeeShop(){
    state.isMuted = document.documentElement.classList.toggle('music-on')
    document.querySelector('.ph-storefront').classList.toggle('activated')
    if(state.isMuted){
        sounds.coffeeShop.play()
    } else (sounds.coffeeShop.pause())
}

export function fire(){
    state.isMuted = document.documentElement.classList.toggle('music-on')
    document.querySelector('.ph-fire').classList.toggle('activated')
    if(state.isMuted){
        sounds.fire.play()
    } else (sounds.fire.pause())
}   