const burger = document.querySelector('.burger-menu');
const cross = document.querySelector('.header-body--cross');
const menu = document.querySelector('.header-body--menu');
const menuBody = document.querySelector('.header-body');
const listItem = document.querySelectorAll('.list-item');

// ------------ mobile menu ---------------

function toggleClass() {
  menu.classList.toggle('active');
  menuBody.classList.toggle('active');
  document.body.classList.toggle('lock');
}

burger.addEventListener('click', () => toggleClass());
cross.addEventListener('click', () => toggleClass());
listItem.forEach((item, id) => {
  item.addEventListener('click', () => toggleClass());
})


// -------------- menu-scroll-navigation ---------------

// const selectors = Array.from(document.querySelectorAll('.technology, .info, .section-price, .section-footer'));
const selectors = [... document.querySelectorAll('.technology, .info, .section-price, .section-footer')];
console.log('selectors', selectors);

document.querySelectorAll('.list-item').forEach((item, id) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    let currentItem = id;
    selectors.forEach((itemClass, id) => {
      let topCoord;
      if(currentItem === id) {
        topCoord = itemClass.getBoundingClientRect().top - 65 + window.scrollY;
        window.scrollTo({
          top: topCoord,
          behavior: "smooth",
        });
      };
    });
  });
});

document.querySelector('.round-button--a').onclick = (e) => {
  e.preventDefault();
  topCoord = document.querySelector('.technology').getBoundingClientRect().top - 65 + window.scrollY;
  window.scrollTo({
    top: topCoord,
    behavior: "smooth",
  });
}


// ------------------- подсветка пунктов при скролле страницы ---------------

window.addEventListener('scroll', () => {
  selectors.forEach((item, id) => {
    if(item.offsetTop - 600 <= window.scrollY) {
      document.querySelectorAll('.list-item').forEach((item) => {
        if(item.classList.contains('href-color')) {
        item.classList.remove('href-color');
        }
      })
      document.querySelectorAll('.list-item')[id].classList.add('href-color');
    }
  });
})
