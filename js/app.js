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
  });

  var swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 2.7, // Show 3 slides
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
        slidesPerView: 2.7, // Adjust this value based on your design
      },
    },
  });

  // файл загружен
  document.getElementById('file-input').addEventListener('change', function() {
    var fileLabel = document.getElementById('file-label-text');
    if (this.files.length > 0) {
      fileLabel.textContent = 'файл загружен';
    } else {
      fileLabel.textContent = 'Прикрепить файл';
    }
  });
});
