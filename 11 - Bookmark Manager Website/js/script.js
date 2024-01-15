// Tabs menu event listener
const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab => tab.addEventListener('click', e => {
  tabs.forEach(tab => {
    tab.children[0].classList.remove(
      'border-softRed', 'border-b-4', 'md:border-b-0'
    )
  })

  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.add('hidden')
  })

  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  document.getElementById('panels')
          .getElementsByClassName(classString)[0]
          .classList.remove('hidden')
}))



// Hamburger button listener
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  }
  else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
})