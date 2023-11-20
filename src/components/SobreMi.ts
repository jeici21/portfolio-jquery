import $ from 'jquery'

export const setupSobreMi = (darkMode: boolean) => {
  if (darkMode) {
    $('.sobre-mi').css('color', 'blue')
  } else {
    $('.sobre-mi').css('color', 'pink')
  }
}

export const SobreMi = /*html*/`
  <p class="sobre-mi">Sobre Mí</p>
  <p>Hola sobre mí</p>
`