if(window.innerWidth > 720) {
  document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]')

  if(!isDropdownButton && !e.target.closest('[data-dropdown]')) {
    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
      dropdown.classList.remove('active')
    })
  }

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]')
    currentDropdown.classList.toggle('active')

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove('active')
    })
  }
})
}

const burger = document.querySelector('.burger')
const closeMenu = document.querySelector('.close-menu')
const burgerMenu = document.querySelector('.burger-menu')
const firstNavList = document.querySelector('.first-nav-list')
const secondNavList = document.querySelector('.second-nav-list')

const features = document.querySelector('.features')
const companies = document.querySelector('.company')
const featuresDropdown = document.querySelector('.features-dropdown')
const companyDropdown = document.querySelector('.company-dropdown')

burger.addEventListener('click', () => {
  firstNavList.classList.toggle('active')
  document.body.classList.toggle('active')
})

closeMenu.addEventListener('click', () => {
  firstNavList.classList.remove('active')
  document.body.classList.remove('active')
  features.classList.remove('active')
  featuresDropdown.classList.remove('active')
  companies.classList.remove('active')
  companyDropdown.classList.remove('active')
})


if(window.innerWidth <= 720) {
  features.addEventListener('click', () => {
    features.classList.toggle('active')
    featuresDropdown.classList.toggle('active')
  })
  companies.addEventListener('click', () => {
    companies.classList.toggle('active')
    companyDropdown.classList.toggle('active')
  })
}