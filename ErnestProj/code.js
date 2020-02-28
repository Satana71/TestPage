// let slider = document.querySelector('.slider'); //получение общего слайдера
// let sliderLenta = slider.querySelector('.slider-lenta'); // общая лента
// let sliderItems = slider.querySelectorAll('.slider-lenta-item.real'); // получаем настоящие элементы
// let sliderBullets = document.querySelectorAll('.slider-bullets div'); // здесь у нас буллетсы
// sliderLenta.style.width = (sliderItems.length + 2) * 100 + "%"

// let nowShowIndex = 0; // наш изначальный индекс
// bullets_draw(nowShowIndex); // изначальная отрисовка


// sliderBullets.forEach(function (bullet) {
//     bullet.onclick = function () {
//         if (sliderLenta.classList.contains('animated')) {
//             return;
//         }
//         sliderLenta.classList.add('animated');
//         let bullet_index = bullet.getAttribute('id');
//         bullets_draw(bullet_index);
//         nowShowIndex = +bullet_index;
//         $(sliderLenta).animate({
//             left: -100 * (nowShowIndex + 1) + "%"
//         }, 600, function () {
//             sliderLenta.classList.remove('animated');
//         })
//     };

// });




// function bullets_draw(show_index) {
//     for (let i = 0; i < sliderBullets.length; i++) {
//         sliderBullets[i].style.backgroundColor = "white";
//     }
//     sliderBullets[show_index].style.backgroundColor = "orange";
// }


var imgs = new Array('img/1998.PNG', 'img/2009.PNG', 'img/2016.png');

var image = document.getElementById("image");

image.src = imgs[0];
image.dataset.current = 0;

function slide(ind) {
  let current = +image.dataset.current;
  current += ind;
  if (current >= imgs.length)
    current = 0;
  if (current < 0)
    current = imgs.length - 1;
  image.src = imgs[current];
  image.dataset.current = current;
}

function imgsrc(event) {
  var w = document.body.clientWidth;
  var p = event.clientX;
  if (p > (w / 2)) {
    slide(1);
  } else {
    slide(-1);
  }
}