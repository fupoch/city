// const currentTime = document.querySelector('#moscow')

function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses () {
    slides.forEach((slide) => {
    slide.classList.remove('active')
    })
}    
}

// function zero_first_format(value)
// {
//     if (value < 10)
//     {
//         value='0'+value;
//     }
//     return value;
// }

// function setTime() {
//     let dateMoscow = new Date()
//     let hours = zero_first_format(dateMoscow.getHours());
//     let minutes = zero_first_format(dateMoscow.getMinutes());
//     let seconds = zero_first_format(dateMoscow.getSeconds());
//     currentTime.innerHTML = hours+":"+minutes+":"+seconds
// }

// setInterval(function() {
//     document.getElementById('#moscow').innerHTML = setTime();
// }, 1000);

// document.querySelector('#current-date').innerHTML = setTime()



slidesPlugin();


setInterval(function() {
    let t = new Date(),
    tt = t.getUTCHours() + 3;
    document.getElementById('moscow').innerHTML = (tt >= 24 ? "0" : "") + (tt >= 24 ?  tt - 24 : tt) + ":" + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes() + ":" + (t.getSeconds() < 10 ? '0' : '') + t.getSeconds();
    }, 1000);

setInterval(function() {
let t = new Date(),
tt = t.getUTCHours() + 9;
document.getElementById('tokyo').innerHTML = (tt >= 24 ? "0" : "") + (tt >= 24 ?  tt - 24 : tt) + ":" + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes() + ":" + (t.getSeconds() < 10 ? '0' : '') + t.getSeconds();
}, 1000);

setInterval(function() {
    let t = new Date(),
    tt = t.getUTCHours() + 1;
    document.getElementById('rome').innerHTML = (tt >= 24 ? "0" : "") + (tt >= 24 ?  tt - 24 : tt) + ":" + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes() + ":" + (t.getSeconds() < 10 ? '0' : '') + t.getSeconds();
    }, 1000);

setInterval(function() {
let t = new Date(),
tt = t.getUTCHours() - 5;
document.getElementById('new-york').innerHTML = (tt >= 24 ? "0" : "") + (tt >= 24 ?  tt - 24 : tt) + ":" + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes() + ":" + (t.getSeconds() < 10 ? '0' : '') + t.getSeconds();
}, 1000);

setInterval(function() {
    let t = new Date(),
    tt = t.getUTCHours() + 4;
    document.getElementById('dubai').innerHTML = (tt >= 24 ? "0" : "") + (tt >= 24 ?  tt - 24 : tt) + ":" + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes() + ":" + (t.getSeconds() < 10 ? '0' : '') + t.getSeconds();
    }, 1000);




// function setColor(element) {
//     const color = '#FFFFFF'
//     element.style.backgroundColor = color
//     element.style.boxShadow = `0 0 20px ${color}, 0 0 20px ${color}`
// }

// function removeColor(element) {
//     element.style.boxShadow = `0 0 0px #000`
// }

// const slides = document.querySelectorAll('.slide')

// for (const slide of slides) {
// slide.classList.add('slide')
// slide.addEventListener('mouseover', () => setColor(slide))

// slide.addEventListener('mouseleave', () => removeColor(slide))
// }