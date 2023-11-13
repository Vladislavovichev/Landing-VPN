//slide-show

let right = document.querySelector('.button-right')
let left = document.querySelector('.button-left')
let slide_line = document.querySelector('.slideshow-slides')
let first_dot = document.querySelector('.first_dot')
let second_dot = document.querySelector('.second_dot')
let third_dot = document.querySelector('.third_dot')

offset = 0

right.addEventListener('click', () => {

    if (offset == -844) {
        return
    } else {
        offset -=422
        slide_line.style.left =offset +'px'
        isRightRed()
        isLeftRed()
        isDotRed()
    }
})

left.addEventListener('click', () => {
    if (offset == 0) {
        return
    } else {
        offset +=422
        slide_line.style.left =offset +'px'
        isRightRed()
        isLeftRed()
        isDotRed()
    }

})

function isRightRed() {
    if (offset == - 844) {
        right.classList.add('end-right')
        right.classList.remove('red-right')
    } else {
        right.classList.remove('end-right')
        right.classList.add('red-right')
    }
}

function isLeftRed() {
    if (offset == 0) {
        left.classList.remove('red-left')
        left.classList.add('end-left')
    } else {
        left.classList.remove('end-left')
        left.classList.add('red-left')
    }
}

function isDotRed() {
    switch (offset) {
        case 0:
            first_dot.classList.add('red-dot')
            second_dot.classList.remove('red-dot')
            third_dot.classList.remove('red-dot')
            break;

        case -422:
            first_dot.classList.remove('red-dot')
            second_dot.classList.add('red-dot')
            third_dot.classList.remove('red-dot')
            break;

        case -844:
            first_dot.classList.remove('red-dot')
            second_dot.classList.remove('red-dot')
            third_dot.classList.add('red-dot')
            break;
    
        default:
            break;
    }
}





//pop-up

let pop_up = document.querySelector('.pop-up-wrapper')
let close = document.querySelector('.pop-up__close')
let hasShown = true;

document.addEventListener('scroll', e=> {
    let scroll = window.scrollY;
    if (scroll > 600 && hasShown) {
        pop_up.classList.add('pop-up__show')
        hasShown = false
    }
})

close.addEventListener('click', e=> {
    pop_up.classList.remove('pop-up__show')
})


//burger

document.querySelector('.header__burger').addEventListener('click', function() {
    this.classList.toggle('header__burger_active');
    document.querySelector('.header__nav').classList.toggle('header__burger_open');
})