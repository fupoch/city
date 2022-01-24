const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector ('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount-1)*100}vh`

let activeSlidesIndex = 0

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
      activeSlidesIndex++
      if (activeSlidesIndex === slidesCount)
      {
          activeSlidesIndex = 0
      }
  } else if (direction === 'down') {
      activeSlidesIndex--
      if (activeSlidesIndex < 0) {
          activeSlidesIndex = slidesCount-1
      }
  }

  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlidesIndex*height}px)`

  sidebar.style.transform = `translateY(${activeSlidesIndex*height}px)`
}

