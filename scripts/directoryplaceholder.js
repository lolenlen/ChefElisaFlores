document.querySelectorAll('.js-home-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = "index.html";
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