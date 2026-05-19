const toggle = document.querySelector('.nav-toggle')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-link')

function openMenu() {
  toggle.classList.add('active')
  toggle.setAttribute('aria-expanded', 'true')
  navList.classList.add('open')

}

function closeMenu() {
  toggle.classList.remove('active')
  toggle.setAttribute('aria-expanded', 'false')
  navList.classList.remove('open')

}

toggle.addEventListener('click', () => {
  const isOpen = navList.classList.contains('open')
  isOpen ? closeMenu() : openMenu()
})

navLinks.forEach((link) => link.addEventListener('click', closeMenu))

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu()
})

console.log(window.innerWidth, document.documentElement.clientWidth)
