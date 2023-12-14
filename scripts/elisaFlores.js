document.querySelectorAll('.js-home-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      window.location.href = "index.html";
    });
  });

  
document.querySelectorAll('.js-elisa-button')
.forEach((button) => {
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});