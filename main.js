const checkbox = document.querySelector('input[type="checkbox"]')
const themeSwitcher = document.querySelector('.theme__switcher').querySelector('span')

checkbox.addEventListener('change', () => {
    if(checkbox.checked) themeSwitcher.innerHTML = '<i class="fa-solid fa-sun"></i>'
    else themeSwitcher.innerHTML = '<i class="fa-solid fa-moon"></i>'
})