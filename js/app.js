document.addEventListener('DOMContentLoaded', function () {
  var swiper1 = new Swiper('.swiper-container', {
    slidesPerView: 1.41, // Show 1.41 slides to get the partial slide effect
    spaceBetween: 37, // Space between slides
    centeredSlides: true,
    loop: true,
    initialSlide: 1, // Start from the second slide to show partial slides on both sides
    autoplay: {
      delay: 3000, // Time in ms between each slide transition
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    breakpoints: {
      1024: {
        slidesPerView: 1.41, // Adjust this value based on your design
      },
    },
    on: {
      slideChangeTransitionEnd: function () {
        var activeSlide = document.querySelector('.swiper-slide-active');
        var subtitle = activeSlide.querySelector('.subtitleSlide');
        var button = activeSlide.querySelector('.btnSlide');

        // Remove animation classes from all slides
        document.querySelectorAll('.subtitleSlide').forEach(function (el) {
          el.style.animation = 'none';
          el.style.opacity = '0';
        });
        document.querySelectorAll('.btnSlide').forEach(function (el) {
          el.style.animation = 'none';
          el.style.opacity = '0';
        });

        // Add animation classes to the active slide's elements if they exist
        if (subtitle) {
          subtitle.style.animation = 'slideUp 0.5s ease forwards';
        }
        if (button) {
          button.style.animation = 'slideUp 0.5s ease forwards';
        }
      }
    }
  });

  var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 2.7, // Show 3 slides
    spaceBetween: 37, // Space between slides
    centeredSlides: true,
    loop: true,
    initialSlide: 1, // Start from the second slide to show partial slides on both sides
    autoplay: {
      delay: 110000, // Time in ms between each slide transition
      disableOnInteraction: false, // Continue autoplay after user interactions
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.7, // Adjust this value based on your design
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // файл загружен
    if (document.getElementById('file-input')){
      document.getElementById('file-input').addEventListener('change', function() {
        var fileLabel = document.getElementById('file-label-text');
        if (this.files.length > 0) {
          fileLabel.textContent = 'файл загружен';
        } else {
          fileLabel.textContent = 'Прикрепить файл';
        }
      });
    }
});





// Intersection Observer for titleSection
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.titleSection').forEach(section => {
  observer.observe(section);
});


document.querySelectorAll('.titleMain').forEach(section => {
  observer.observe(section);
});


//animation :show images one by one imgS1Elem
document.addEventListener("DOMContentLoaded", function() {
  const imgElems = document.querySelectorAll('.imgS1Elem');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('in-view');
        }, index * 300); // Delay each image by 0.3s
        observer.unobserve(entry.target); // Stop observing once it has become visible
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  imgElems.forEach(img => {
    observer.observe(img);
  });
});


//contact yandex map
ymaps.ready(init);

function init() {
  // Map 1
  var myMap1 = new ymaps.Map("map1", {
    center: [55.731663, 37.655407], // Coordinates for the first address
    zoom: 16,
    controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
  });

  var placemark1 = new ymaps.Placemark([55.731663, 37.655407], {
    hintContent: 'г. Москва, Скотопрогонная, 35 стр. 5',
    balloonContent: '<strong>г. Москва, Скотопрогонная, 35 стр. 5</strong><br>Пн-Вс 8:00-18:00'
  });

  myMap1.geoObjects.add(placemark1);

  // Map 2
  var myMap2 = new ymaps.Map("map2", {
    center: [55.794007, 37.702875], // Coordinates for the second address
    zoom: 16,
    controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
  });

  var placemark2 = new ymaps.Placemark([55.794007, 37.702875], {
    hintContent: 'Москва, ул. Ткацкая, 5 стр. 4',
    balloonContent: '<strong>Москва, ул. Ткацкая, 5 стр. 4</strong><br>Пн-Вс 9:00-21:00'
  });

  myMap2.geoObjects.add(placemark2);
}
