// Мобильное меню
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = sideMenu.querySelector(".close-btn");

if (menuBtn && sideMenu && closeBtn) {
  menuBtn.addEventListener("click", () => sideMenu.classList.add("open"));
  closeBtn.addEventListener("click", () => sideMenu.classList.remove("open"));
  sideMenu.addEventListener("click", e => {
    if(e.target.tagName === "A") sideMenu.classList.remove("open");
  });
}

// Текущий год
document.getElementById("year").textContent = new Date().getFullYear();

// Анимация секций
const animSections = document.querySelectorAll('.animate');

function checkAnim() {
  const triggerBottom = window.innerHeight * 0.85;
  animSections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < triggerBottom){
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkAnim);
window.addEventListener('load', checkAnim);

// Яндекс.Карта
function initMap() {
  ymaps.ready(function(){
    var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64], // Москва
      zoom: 10
    });
    myMap.geoObjects.add(new ymaps.Placemark([55.76, 37.64], { hintContent: 'Мой Мир' }));
  });
}
window.addEventListener('load', initMap);
