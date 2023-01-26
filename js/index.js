// header submenu
const navLinks = document.querySelectorAll('.menu .menu__item')

navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('menu__item-sub')) {
      item.classList.toggle('active')
    }
  })
})

// select
const select = document.querySelector('.input-select')
const options = document.querySelectorAll('.select .option')
const selectName = document.querySelector('.input-select__name')

select.addEventListener('click', () => {
  if (select.classList.contains('open')) {
    select.classList.remove('open')
  } else [select.classList.add('open')]
})

options.forEach((item) => {
  item.addEventListener('click', () => {
    selectName.innerHTML = item.innerHTML
  })
})

// progress
const progressLine = document.querySelector('.progress-line')

progressLine.style.width = 95 + 'px'
addPercent.addEventListener('click', () => {
  progressLine.style.width = (475 * 25) / 100 + 'px'
  progressLine.innerHTML = '25%'
})

// scroll top
document.querySelector('.scroll-top').addEventListener('click', () => {
  window.scrollTo(scrollY, 0)
})

// map
ymaps.ready(init)

function init() {
  var myMap = new ymaps.Map('map', {
      center: [59.928194, 30.346644],
      zoom: 13,
      controls: [],
    }),
    BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
      `
        <div class="my-balloon">
          <div class="my-balloon__title">Наш адрес:</div>
          <div class="my-balloon__address">Санкт-Петербург, <br/>Владимирский проспект, 23,<br />лит. А, офис 701</div>
          <div class="my-balloon__link">{{properties.name}}</div>
          <div class="my-ballon__arrow"></div>
        </div>
      `
    )

  myPlacemark = new ymaps.Placemark(
    [59.928194, 30.346644],
    {
      name: 'Схема проезда',
    },
    {
      balloonContentLayout: BalloonContentLayout,
      // balloonLayout: BalloonContentLayout,
      balloonPanelMaxMapArea: 0,
      balloonOffset: [55, -30],
    }
  )

  myMap.behaviors.disable('scrollZoom')
  myMap.geoObjects.add(myPlacemark)

  myPlacemark.balloon.open([59.928194, 30.346644], '', {
    closeButton: false,
  })
}

// show more

const showMoreButton = document.querySelector('#show-more')
const showMoreContent = document.querySelector('#show-more-content')

showMoreButton.addEventListener('click', () => {
  showMoreContent.classList.toggle('open')
  showMoreButton.classList.toggle('open')
})

// slider swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2.8,
  centeredSlides: false,
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 17,
    },
    1280: {
      spaceBetween: 22,
    },
    1600: {
      spaceBetween: 30,
    }
  }
})
