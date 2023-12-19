
document.querySelectorAll('.js-home-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

  document.querySelectorAll('.js-elisa-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = "elisaFlores.html";
    });
  });

  document.querySelectorAll('.js-pastry-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = "pastries.html";
    });
  });

  document.querySelectorAll('.js-recipe-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = "recipe.html";
    });
  });

  document.querySelectorAll('.js-activism-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = "activism.html";
    });
  });

  document.querySelectorAll('.js-contact-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = "https://www.instagram.com/elisaflorespastry/";
    });
  });


//fade in fade out
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Adjust threshold as needed
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, options);

const fadeElements = document.querySelectorAll('.introButterflycakeBubble');

fadeElements.forEach(element => {
  observer.observe(element);
});


