function scrollTo(element) {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  })
}

document.querySelector('.scroll').addEventListener('click', function(event){
  event.preventDefault();

  scrollTo("#form")
})