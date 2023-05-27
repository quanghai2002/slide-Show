let wrapImg = document.querySelector('.wrap');
let imgList = document.querySelectorAll('.img');
let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');
let dots = document.querySelectorAll('.dots');



let index = 0;
function nextImg() {
    let active = document.querySelector('.active');
    index++;
    if (index > imgList.length - 1) {
        index = 0;
    }
    active.classList.remove('active')
    imgList[index].classList.add('active');
    let dotsActive = document.querySelector('.dots.active');
    dotsActive.classList.remove('active');
    dots[index].classList.add('active');
}

btnNext.addEventListener('click', nextImg)

function prevImg() {
    let active = document.querySelector('.active');
    if (index <= 0) {
        index = imgList.length;
    }
    index--;
    active.classList.remove('active')
    imgList[index].classList.add('active');
    let dotsActive = document.querySelector('.dots.active');
    dotsActive.classList.remove('active');
    dots[index].classList.add('active');
}
btnPrev.addEventListener('click', prevImg);


dots.forEach((item, index) => {
    item.onclick = () => {
        let imgActive = document.querySelector('.active');
        imgActive.classList.remove('active');
        imgList[index].classList.add('active');
        let dotsActive = document.querySelector('.dots.active');
        dotsActive.classList.remove('active');
        dots[index].classList.add('active');
    };
})

setInterval(() => {
    btnNext.click();
}, 2000)