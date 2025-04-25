
const scriptURL = 'https://script.google.com/macros/s/AKfycbwYKxffAIjM11jUQKT3T7-nVOJAPqe4VCtM-N30J53bWJlmbnDW-6kyoOsHAfAYcAHTiw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    form.reset()
    .catch(error => console.error('Error!', error.message))
})
