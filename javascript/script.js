
let input = document.querySelectorAll('input'),
  form = document.querySelector('form'),
  age = document.querySelector('select'),
  content = document.getElementById('content')

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(input[2])
  let users = [
    {
      ism: input[0].value,
      familiya: input[1].value,
      yoshi: age.value,
    },
  ]
  if (
    users[0].ism === '' ||
    users[0].familiya === '' ||
    users[0].ism === null ||
    users[0].familiya === null
  ) {
    alert("Ma'lumotlaringizni kiriting")
  } else {
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `<div id='row'><h2 class='alert alert-danger'>
  Ism: ${users[0].ism} -- Familiyasi:  ${users[0].familiya} -- Yoshi:  ${
      users[0].yoshi
    }--Oilasi: ${
      input[2].checked ? 'Oilali' : 'Oila qurmagan'
    } <button class='btn btn-danger' onclick="remove(this)">Delete</button></h2></div>`
    content.append(newDiv)
    form.reset()
  }
})

function remove(btn) {
  btn.closest('div').remove()
}
