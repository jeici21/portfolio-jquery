import $ from 'jquery'

const SobreMi = (darkMode: boolean) => {
  $('#sobre-mi').length > 0 && $('#sobre-mi').remove()
  $('#app').append(/*html*/`
    <div id="sobre-mi">
      <p class="sobre-mi">Sobre Mí</p>
      <p>Hola sobre mí</p>
    </div>
  `)
  if (darkMode) {
    $('.sobre-mi').css('color', 'blue')
  } else {
    $('.sobre-mi').css('color', 'pink')
  }
}

export default SobreMi