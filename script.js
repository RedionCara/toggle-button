const checkbox = document.getElementById('check')
const body = document.getElementsByTagName('body')


checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
  document.body.classList.add('background-color')
  } else {
    document.body.classList.remove('background-color')
    }
})
