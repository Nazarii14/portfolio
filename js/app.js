const aboutObserver = new IntersectionObserver((entries) => {
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

const aboutHobbiesTextsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
          entry.target.classList.add('show-about-hobbies-text');
      }
      else {
        entry.target.classList.remove('show-about-hobbies-text')
    }
  });
});

const skillsObserver = new IntersectionObserver((entries) => {
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


const aboutCards = document.querySelectorAll('.about-card');
aboutCards.forEach((element) => aboutObserver.observe(element));

const aboutHobbiesSvg = document.querySelectorAll("#about-text path");
aboutHobbiesSvg.forEach((element) => aboutHobbiesTextsObserver.observe(element));

const hiddenHardSkillsElements = document.querySelectorAll('.hard-skills-list-hidden');
hiddenHardSkillsElements.forEach((element) => skillsObserver.observe(element));

const hiddenSoftSkillsElements = document.querySelectorAll('.soft-skills-list-hidden');
hiddenSoftSkillsElements.forEach((element) => skillsObserver.observe(element));

const hiddenBlobs = document.querySelectorAll('.my-skills-blob');
hiddenBlobs.forEach((element) => blobObserver.observe(element));



const aboutText = document.querySelectorAll('#about-text path')
const hobbiesText = document.querySelectorAll('#hobbies-text path')


VanillaTilt.init(document.querySelector(".data-tilt"), {
  scale: 1.05,
  max: 25,
  speed: 5000
});


VanillaTilt.init(document.querySelector(".education-lyceum"), {
  scale: 1.05,
  max: 10,
  speed: 1000
});

VanillaTilt.init(document.querySelector(".education-university"), {
  scale: 1.05,
  max: 10,
  speed: 1000
});

VanillaTilt.init(document.querySelector(".btn.btn2"), {
  scale: 1.15,
  max: 25,
  speed: 5000
});

VanillaTilt.init(document.querySelector(".to-top"), {
  scale: 1.15,
  max: 25,
  speed: 1000
});



// to top button
const toTopButton = document.querySelector(".to-top");

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTopButton.classList.add("active")
  }
  else {
    toTopButton.classList.remove("active")
  }
})


const toggle = document.querySelector('.switch input[type="checkbox"]');

function toggleTheme() {
  if (toggle.checked) {
    transition()
    updateCSSVariables("#00fbff", "#ffffff", "#000000", "#626262");
  } 
  else {
    transition()
    updateCSSVariables("#00fbff", "#000000", "#ffffff", "#262626");
  }
}

let transition = () => {
  document.documentElement.classList.add('transition');
  window.setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000)
}

function updateCSSVariables(mainColor, blackColor, whiteColor, greyColor) {
  document.documentElement.style.setProperty('--main-color', mainColor);
  document.documentElement.style.setProperty('--black-color', blackColor);
  document.documentElement.style.setProperty('--white-color', whiteColor);
  document.documentElement.style.setProperty('--grey-color', greyColor);
}

toggle.addEventListener('change', toggleTheme);

// let darkMode = localStorage.getItem("switch")
// const darkModeToggle = document.querySelector("switch")

// darkMode.addEventListener('click', function () {
//   console.log('test');
// })

// const toggle = document.getElementsByClassName('switch')
// const body = document.getElementById('body')

// toggle.addEventListener('click', function () {
//   this.classList.toggle()
// })

// let btn = document.querySelectorAll('.projects-button').forEach(btn => {
//   btn.addEventListener('mousemove', (e) => {
//     let x = e.offsetX;
//     let y = e.offsetY;
//     let btnWidth = btn.clientWidth;
//     let btnHeight = btn.clientHeight;
//     let transX = (x - btnWidth / 2);
//     let transY = (y - btnHeight / 2);
//     btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`

//     let mx = e.pageX - btn.offsetLeft;
//     let my = e.pageY - btn.offsetTop;
//     btn.style.setProperty('--x', mx + 'px');
//     btn.style.setProperty('--y', my + 'px');
//   })
//   btn.addEventListener('mouseout', (e) => {
//     btn.style.transform = '';
//   })
// })



// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

window.onscroll = function() {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var progressBar = document.getElementById("myBar");
  
  if (scrolled > 100) {
    progressBar.style.width = "100%";
  } else {
    progressBar.style.width = scrolled + "%";
  }
}


// side menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

//contact form
const scriptURL = "https://script.google.com/macros/s/AKfycbyOeuPn9ul10ylJzCEGsm0A8YDYsi_qse82_banpcXOvNBaG7Pu6rhJ09MT4UbyklGN/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});


const container = document.querySelector('.education-list');
const circle = document.querySelector('.circle');

container.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  circle.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

container.addEventListener('mouseenter', () => {
  circle.style.opacity = '1';
});

container.addEventListener('mouseleave', () => {
  circle.style.opacity = '0';
});


// gsap.registerPlugin(ScrollTrigger);
// let slides = gsap.utils.toArray('.card')

// let scrollTween = gsap.to(slides, {
//   xPercent: -100 * (slides.length - 1),
//   ease: 'none',

//   scrollTrigger: {
//     trigger: 'card-wrapper',
//     pin: true,
//     scrub: 0.1,
//     end: "+=3000",

//     onUpdate: self => {
//       let skewAmount = self.getVelocity() / 200
//       let scaleAmount = 1 + Math.abs(self.getVelocity() / 20000)

//       slides.forEach(slide => {
//         gsap.to(slide.querySelector('.card'), {
//           skewX: skewAmount,
//           overwrite: true,
//           ease: "power1.out"
//         })
//       })
//     },

//     onScrubComplete: () => {
//       slides.forEach(slide => {
//         gsap.to(slide.querySelector('.card'), {
//           skewX: 0,
//           duration: 0.5,
//           ease: "power1.out"
//         })
//       })
//     }
//   }
// })