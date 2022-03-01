/*
Формат CSS-переменных

  --theme-default-{NAME} - начальное значение
  --theme-light-{NAME}  - для 'light'
  --theme-dark-{NAME} - для 'dark'

*/

export const changeCssVaribles = theme => {
    const root = document.querySelector(':root');

    const cssVaribles = ['header', 'bgimg'];

    cssVaribles.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`,
            `var(--theme-${theme}-${element})`
        )
    })
}