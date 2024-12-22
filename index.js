// Add interest functionality; displays the interest form
document.getElementById('add-interest-button').addEventListener('click', () => {
  document.getElementById('save-interest-form').classList.add('show')
  document.getElementById('save-interest-form').classList.remove('hide')
  document.getElementById('blur').classList.add('blur')
})

// Save interest functionality; it saves the interest added or filled. And displays it on the interests board
document.querySelector('#save-interest-btn').addEventListener('click', () => {
  let interestName = document.querySelector('#interest-name').value
  let interestValue = document.querySelector('#interest-value').value
  if (interestName && interestValue) {
   createElement(interestName, interestValue)
   interestName = ''
   interestValue = ''
  
  //createElement(interestName, interestValue)
  document.getElementById('save-interest-form').classList.remove('show')
  document.getElementById('save-interest-form').classList.add('hide')
  document.getElementById('blur').classList.remove('blur')
  } else {
    document.querySelector('.message').innerHTML = 'Fill in all required fields or inputs!'
  }
})

// Cancel interest functionality; cancels interests details inputted
document.querySelector('.cancel-btn').addEventListener('click', () => {
  document.querySelector('#interest-name').value = ''
  document.querySelector('#interest-value').value = ''
  document.getElementById('save-interest-form').classList.add('hide')
  document.getElementById('blur').classList.remove('blur')
})

const createElement = (interestName, interestValue) => {
  let interests = document.querySelector('.interests')
  let interestContainer = document.createElement('div')
  let br = document.createElement('br')
  let interestNameContainer = document.createElement('p')
  let interestValueContainer = document.createElement('p')
  interestNameContainer.innerHTML = interestName
  interestNameContainer.className = 'interest-name'
  interestValueContainer.innerHTML = interestValue
  interestValueContainer.className = 'interest-description'
  interestContainer.className = 'interest';
  interests.append(interestContainer)
  interestContainer.append(interestNameContainer)
  interestContainer.append(br)
  interestContainer.append(interestValueContainer)
  interests.append(br)
  interests.append(br)
}