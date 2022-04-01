const menuListItem = document.querySelectorAll('.menu-list__item')
const menuListLink = document.querySelectorAll('.menu-list__link')

menuListItem.forEach((item, index) => {
  
  item.addEventListener('click', () => {
    let listItem = item
    let listLink = menuListLink[index]

    menuListItem.forEach((item, index) => {
      item.classList.remove('menu-list__item--active')
      menuListLink[index].classList.remove('menu-list__link--active')
    })

    listItem.classList.add('menu-list__item--active')
    listLink.classList.add('menu-list__link--active')

  })
})

