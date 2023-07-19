const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show')
        }
    });
});

const blobObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-blob');
        }
    });
});

const hiddenHardSkillsElements = document.querySelectorAll('.hard-skills-list-hidden');
hiddenHardSkillsElements.forEach((element) => observer.observe(element));

const hiddenSoftSkillsElements = document.querySelectorAll('.soft-skills-list-hidden');
hiddenSoftSkillsElements.forEach((element) => observer.observe(element));

const hiddenBlobs = document.querySelectorAll('.my-skills-blob.blob-hidden');
hiddenBlobs.forEach((element) => observer.observe(element));



// var swiper = new Swiper(".slide-content", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });

  var swiper = new Swiper(".slide-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
