document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper 1 if the container exists
  var swiperContainer1 = document.querySelector('.swiper-container');
  if (swiperContainer1) {

    var swiper1Options = {
      slidesPerView: 'auto', // Вместо фиксированного значения
      spaceBetween: 37,
      centeredSlides: true,
      loop: true,
      speed: 1000,
      initialSlide: 2,
      autoplay: {
        delay: window.innerWidth < 1200 ? 123000 : 223000,
        disableOnInteraction: false,
      },
      effect: 'slide', // Убедитесь, что используется эффект 'slide'
      // Добавьте следующие параметры:
      watchSlidesProgress: true,
      virtualTranslate: false,
      breakpoints: {
        // Настройки для мобильных устройств
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // Настройки для планшетов
        768: {
          slidesPerView: 1.2,
          spaceBetween: 30
        },
        // Настройки для десктопов
        1200: {
          slidesPerView: 1.41,
          spaceBetween: 37
        }
      },
      // Остальные настройки...
    };

    //work good
    // var swiper1Options = {
    //   slidesPerView: window.innerWidth < 1200 ? 1 : 1.41,
    //   spaceBetween: 37,
    //   centeredSlides: true,
    //   effect: 'slide',
    //   loop: true,
    //   speed: 1000,
    //   initialSlide: 2,
    //   autoplay: {
    //     delay: window.innerWidth < 1200 ? 123000 : 223000,
    //     disableOnInteraction: false,
    //   },
    //
    //   on: {
    //     slideChangeTransitionEnd: function () {
    //       var activeSlide = document.querySelector('.swiper-slide-active');
    //       var subtitle = activeSlide.querySelector('.subtitleSlide');
    //       var button = activeSlide.querySelector('.btnSlide');
    //
    //       // Remove animation classes from all slides
    //       document.querySelectorAll('.subtitleSlide').forEach(function (el) {
    //         el.style.animation = 'none';
    //         el.style.opacity = '0';
    //       });
    //       document.querySelectorAll('.btnSlide').forEach(function (el) {
    //         el.style.animation = 'none';
    //         el.style.opacity = '0';
    //       });
    //
    //       // Add animation classes to the active slide's elements if they exist
    //       if (subtitle) {
    //         subtitle.style.animation = 'slideUp 0.5s ease forwards';
    //       }
    //       if (button) {
    //         button.style.animation = 'slideUp 0.5s ease forwards';
    //       }
    //     }
    //   }
    // };


    var swiper1 = new Swiper(swiperContainer1, swiper1Options);
  }

  // Initialize Swiper 2 if the container exists
  var swiperContainer2 = document.querySelector('.swiper-container2');
  if (swiperContainer2) {
    var swiper2Options = {
      slidesPerView: window.innerWidth <= 770 ? 1 : (window.innerWidth < 1500 ? 1.5 : 2.7),
      spaceBetween: 37,
      centeredSlides: true,
      loop: true,
      initialSlide: 1,
      autoplay: {
        delay: 110000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: window.innerWidth <= 770 ? 1 : (window.innerWidth < 1500 ? 1.5 : 2.7),
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
    var swiper2 = new Swiper(swiperContainer2, swiper2Options);
  }

  // Change file label text on file input change
  var fileInput = document.getElementById('file-input');
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      var fileLabel = document.getElementById('file-label-text');
      if (this.files.length > 0) {
        fileLabel.textContent = 'файл загружен';
      } else {
        fileLabel.textContent = 'Прикрепить файл';
      }
    });
  }

  // Intersection Observer for titleSection
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('Элемент виден:', entry.target); // Логирование видимости
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.titleSection').forEach(section => {
    observer.observe(section);
  });

  document.querySelectorAll('.titleSupp').forEach(section => {
    observer.observe(section);
  });

  document.querySelectorAll('.rightTitle').forEach(section => {
    observer.observe(section);
  });

  document.querySelectorAll('.titleMain').forEach(section => {
    console.log('Обнаружен элемент .titleMain:', section); // Логирование элементов
    observer.observe(section);
  });

  // Animation: show images one by one imgS1Elem on Main Page
  const imgElems = document.querySelectorAll('.imgS1Elem');
  if (imgElems.length) {
    const observerImg = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, index * 300); // Delay each image by 0.3s
          observerImg.unobserve(entry.target); // Stop observing once it has become visible
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    imgElems.forEach(img => {
      observerImg.observe(img);
    });
  }

  // Animation: show images one by one imgS1Elem on contactsPage
  const imgElemsContact = document.querySelectorAll('.contactImg');
  if (imgElemsContact.length) {
    const observerImg = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, index * 300); // Delay each image by 0.3s
          observerImg.unobserve(entry.target); // Stop observing once it has become visible
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });

    imgElemsContact.forEach(img => {
      observerImg.observe(img);
    });
  }

  // Contact Yandex map
  ymaps.ready(init);

  function init() {
    // Map 1
    var myMap1 = new ymaps.Map("map1", {
      center: [55.726923, 37.694235], // Coordinates for the first address
      zoom: 16,
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
    });
    // Map 1
    var myMap11 = new ymaps.Map("map11", {
      center: [55.726923, 37.694235], // Coordinates for the first address
      zoom: 16,
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
    });

    var placemark1 = new ymaps.Placemark([55.726923, 37.694235], {
      hintContent: 'г. Москва, Скотопрогонная, 35 стр. 5',
      balloonContent: '<strong>г. Москва, Скотопрогонная, 35 стр. 5</strong><br>Пн-Вс 8:00-18:00'
    });
    var placemark11 = new ymaps.Placemark([55.726923, 37.694235], {
      hintContent: 'г. Москва, Скотопрогонная, 35 стр. 5',
      balloonContent: '<strong>г. Москва, Скотопрогонная, 35 стр. 5</strong><br>Пн-Вс 8:00-18:00'
    });

    myMap1.geoObjects.add(placemark1);
    myMap11.geoObjects.add(placemark11);

    // Map 2
    var myMap2 = new ymaps.Map("map2", {
      center: [55.786521, 37.722585], // Coordinates for the second address
      zoom: 16,
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
    });
    // Map 2
    var myMap22 = new ymaps.Map("map22", {
      center: [55.786521, 37.722585], // Coordinates for the second address
      zoom: 16,
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'routeButtonControl']
    });

    var placemark2 = new ymaps.Placemark([55.786521, 37.722585], {
      hintContent: 'Москва, ул. Ткацкая, 5 стр. 4',
      balloonContent: '<strong>Москва, ул. Ткацкая, 5 стр. 4</strong><br>Пн-Вс 9:00-21:00'
    });

    var placemark22 = new ymaps.Placemark([55.786521, 37.722585], {
      hintContent: 'Москва, ул. Ткацкая, 5 стр. 4',
      balloonContent: '<strong>Москва, ул. Ткацкая, 5 стр. 4</strong><br>Пн-Вс 9:00-21:00'
    });

    myMap2.geoObjects.add(placemark2);
    myMap22.geoObjects.add(placemark22);
  }
});

// Custom select elem for ourProjects
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.endsWith('ourProjects.html')) {

    // Place the code specific to ourProjects.html here
    const customSelectContainer = document.querySelector('.custom-select-container');
    const customSelectTrigger = customSelectContainer.querySelector('.custom-select-trigger');
    const customOptions = customSelectContainer.querySelector('.custom-options');
    const customOptionsList = customOptions.querySelectorAll('.custom-option');
    const originalSelect = customSelectContainer.querySelector('.custom-select');

    customSelectTrigger.addEventListener('click', () => {
      customOptions.classList.toggle('active');
    });

    customOptionsList.forEach(option => {
      option.addEventListener('click', () => {
        customOptionsList.forEach(opt => {
          opt.classList.remove('selected');
        });
        option.classList.add('selected');
        customSelectTrigger.textContent = option.textContent;
        originalSelect.value = option.getAttribute('data-value');
        customOptions.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!customSelectContainer.contains(e.target)) {
        customOptions.classList.remove('active');
      }
    });
  }
});

// active links underheader, highlite text when current url
document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  const links = document.querySelectorAll('.underHeader a');

  links.forEach(link => {
    if (link.getAttribute('href').endsWith(currentPath)) {
      link.classList.add('active');
    }
  });
})

//dropdown code on printMetalPAge
  if (window.location.pathname.endsWith('printMetal.html') || window.location.pathname.endsWith('printmetal.html')) {

    const dropdownItems = document.querySelectorAll('.dropdownItem');

    dropdownItems.forEach(item => {
      const header = item.querySelector('.dropdownHeader');
      header.addEventListener('click', () => {
        const content = item.querySelector('.dropdownContent');
        const arrow = item.querySelector('.arrow');

        if (item.classList.contains('active')) {
          item.classList.remove('active');
          content.style.maxHeight = null;
          arrow.style.transform = 'rotate(180deg)';
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
          arrow.style.transform = 'rotate(0deg)';
        }
      });
    });
  }

  // Toggle Burger Menu
  const burgerMenu = document.getElementById('burger-menu');
  const navbar = document.getElementById('navbar');

  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    navbar.classList.toggle('active');
  });
