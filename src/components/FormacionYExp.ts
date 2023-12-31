const FormacionYExp = () => {
  $('#app').append(/*html*/`
    <div class="container pt-5" id="formacion-y-exp">
      <div class="row" id="visible-form-y-exp">
        <div class="col-md-6">
          <h2 class="fst-italic text-primary text-center text-md-start">Formación</h2>
          <p class="text-primary text-center text-md-start">MIS CONOCIMIENTOS</p>
          <p class="pt-5 fw-bold">2010 - 2016</p>
          <p>Graduado con el título de Ingeniero en Sistemas Computacionales</p>
          <p>Universidad Estatal de Milagro</p>
        </div>
        <div class="col-md-6">
          <h2 class="fst-italic text-primary text-center text-md-start">Experiencia</h2>
          <p class="text-primary text-center text-md-start">TRAYECTORIA PROFESIONAL</p>
          <p class="pt-5 fw-bold">Junio 2023 - Agosto 2023</p>
          <p>EICHE, Web Developer Vue-React</p>
          <p class="pt-5 fw-bold">Noviembre 2022 - Febrero 2023</p>
          <p>Kruger Corporation, Ex participante de Kruger Star</p>
          <p class="pt-5 fw-bold">Septiembre 2020 - Noviembre 2020</p>
          <p>GYSECOMP, Web Developer</p>
        </div>
      </div>
    </div>
  `)

  const checkFormacionYExpVisibility = () => {
    const windowPosition = ($(window).scrollTop() || 0 / 2) + ($(window).height() || 0);
    const elementPosition = $('#visible-form-y-exp').offset()?.top || 0;

    if (windowPosition > elementPosition) {
      $('#visible-form-y-exp').removeClass('opacity-0 invisible fadeInDiv hidden')
        .addClass('opacity-100 visible fadeInDiv open');
    } else {
      $('#visible-form-y-exp').removeClass('opacity-100 visible fadeInDiv open')
        .addClass('opacity-0 invisible fadeInDiv hidden')
    }
  }

  checkFormacionYExpVisibility();
  $(window).on('scroll', () => checkFormacionYExpVisibility());
}

export default FormacionYExp