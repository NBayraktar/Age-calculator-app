const inputDay = document.querySelector('.day')
const inputMonth = document.querySelector('.month')
const inputYear = document.querySelector('.year')
const outputDay = document.querySelector('.valid-day')
const outputMonth = document.querySelector('.valid-month')
const outputYear = document.querySelector('.valid-year')
const submitBtn = document.querySelector('.submit-btn')
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const date = new Date()
let day = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()

console.log(submitBtn);

submitBtn.addEventListener("submit", function (event) {
  event.preventDefault()
  validateForm()
})

function validateForm() {
  console.log('Helelele');
}