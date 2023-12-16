import $ from 'jquery'
import { proyectos } from '../data/proyectos'

const Proyectos = (darkMode: boolean) => {
  $('#proyectos').length > 0 && $('#proyectos').remove()
  $('#app').append(/*html*/`
    <div id="proyectos" class="container text-center py-5">
      <h2 class="fst-italic text-primary">Proyectos</h2>
      <p class="text-primary">MIS TRABAJOS HASTA EL MOMENTO</p>
      <div class="row row-gap-2 justify-content-center" id="proyectos-cards"></div>
    </div>
  `)
  $.each(proyectos, (index, proyecto) => {
    $('#proyectos-cards').append(/*html*/`
      <div class="col-md-6 col-lg-4">
        <div class="card border-secondary h-100 ${darkMode && 'text-bg-dark'}">
          <img class="card-img-top" src=${proyecto.img} alt="K-Market E-commerce" height="180">
          <div class="card-body" id="proyectos-body-${index}">
            <div class="card-title fw-bold">${proyecto.titulo}</div>
            <div class="card-text">${proyecto.descripcion}</div>
          </div>
        </div>
      </div>
    `)
    proyecto.repo && $(`#proyectos-body-${index}`).append(/*html*/`
      <a href=${proyecto.repo} target="_blank" class="btn btn-success mx-1 mt-3">Repositorio ${proyecto.repo_2 && '1'}</a>
    `)
    proyecto.repo_2 && $(`#proyectos-body-${index}`).append(/*html*/`
      <a href=${proyecto.repo_2} target="_blank" class="btn btn-success mx-1 mt-3">Repositorio 2</a>
    `)
    $(`#proyectos-body-${index}`).append(/*html*/`
      <br><a href=${proyecto.link} class="btn btn-danger mt-2" target="_blank">Sitio Web</a>
    `)
  })

  const checkProyectosVisibility = () => {
    const windowPosition = ($(window).scrollTop() || 0 / 4) + ($(window).height() || 0);
    const elementPosition = $('#proyectos').offset()?.top || 0;

    if (windowPosition > elementPosition) {
      $('#proyectos').removeClass('opacity-0 invisible fadeInDiv hidden')
        .addClass('opacity-100 visible fadeInDiv open');
    } else {
      $('#proyectos').removeClass('opacity-100 visible fadeInDiv open')
        .addClass('opacity-0 invisible fadeInDiv hidden')
    }
  }

  checkProyectosVisibility();
  $(window).on('scroll', () => checkProyectosVisibility());
}

export default Proyectos