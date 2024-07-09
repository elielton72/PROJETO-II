let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.getElementById('.contaier')
let items = container.querySelectorAll('.list .items')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')
let list = container.querySelector('.list')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider(){
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    
    let dotsOld = indicator.querySelector('ul li')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('number').innerHTML = '0' + active + 1

}



nexButton.onclick = () => {
    list.styles.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
     items[active].classList.add('active')

}


prevButton.onclick = () => {
    list.styles.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add('active')

}