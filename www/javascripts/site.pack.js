// This is a main JavaScript file that will ll be compiled into /javascripts/site.js
//
// Any JavaScript file in your site folder can be referenced here by using import or require statements.
// Additionally, you can import modules installed via your package.json file.
//
// For example:
// import './fileName'
//
// To learn more, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }

  const $inputs = Array.prototype.slice.call(document.querySelectorAll('input[type=text]'), 0)
  const $textareas = Array.prototype.slice.call(document.querySelectorAll('textarea'), 0)
  const $inputLabels = Array.prototype.slice.call(document.querySelectorAll('.field label'), 0)

  if ($inputs.length > 0) {
    $inputs.forEach(el => {
      el.classList.toggle('input')
    })
  }

  if ($textareas.length > 0) {
    $textareas.forEach(el => {
      el.classList.toggle('textarea')
    })
  }

  if ($inputLabels.length > 0) {
    $inputLabels.forEach(el => {
      el.classList.toggle('label')
    })
  }
})
