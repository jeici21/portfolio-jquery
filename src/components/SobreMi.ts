import $ from 'jquery'

const SobreMi = () => {
  $('#app').append(/*html*/`
    <div class="bg-primary bg-opacity-10 pt-5" id="sobre-mi">
      <div class="container">
        <div class="row" id="visible-sobre-mi">
          <div class="col-md-6">
            <h2 class="fst-italic text-primary text-center text-md-start">Sobre mí</h2>
            <p class="text-primary text-center text-md-start">MI PERFIL</p>
            <p class="pt-5 fs-5 lh-lg">Me apasionan la programación y el diseño de páginas web, y
              poseo las aptitudes y experiencia profesional necesarias para entrar en dicho mundo. Como un
              profesional optimista con excelentes habilidades de trabajo en equipo, espero un futuro
              brillante en esta industria. Explora mi sitio para ver lo que puedo aportar.</p>
          </div>
          <div class="col-md-6 pt-5 pt-md-0">
            <h2 class="fst-italic text-primary text-center text-md-start">Intereses</h2>
            <p class="text-primary text-center text-md-start">EN MIS RATOS LIBRES</p>
            <div class="row row-cols-2 pt-5">
              <div class="col"><p>🎮 Videojuegos</p></div>
              <div class="col"><p>💻 Programación</p></div>
              <div class="col"><p>📺 Series</p></div>
              <div class="col"><p>⚽ Fútbol</p></div>
              <div class="col"><p>📖 Lectura</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `)

  const checkSobreMiVisibility = () => {
    if ($(window).scrollTop() || 0 + ($(window).height() || 0) > ($('#visible-sobre-mi').offset()?.top || 0)) {
      $('#visible-sobre-mi').removeClass('opacity-0 invisible fadeInDiv hidden')
        .addClass('opacity-100 visible fadeInDiv visible');
    } else {
      $('#visible-sobre-mi').removeClass('opacity-100 visible fadeInDiv visible')
        .addClass('opacity-0 invisible fadeInDiv hidden')
    }
  }

  checkSobreMiVisibility();
  $(window).on('scroll', () => checkSobreMiVisibility());
}

export default SobreMi