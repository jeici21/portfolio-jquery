import $ from 'jquery'
import { css } from '@emotion/css'
import { aptitudes } from '../data/aptitudes'
import { fadeinDiv } from '../utils/styledUtils'

const img = css`
  transition: .2s;

  &:hover {
    transform: scale(1.1);
  }
`

const Aptitudes = (darkMode: boolean) => {
  $('#aptitudes').length > 0 && $('#aptitudes').remove()
  $('#app').append(/*html*/`
    <div class="container pt-5" id="aptitudes">
      <h2 class="fst-italic text-primary text-center">Aptitudes</h2>
      <p class="text-primary text-center">LO QUE PUEDO APORTAR</p>
      <div class="row justify-content-center" id="aptitudes-cards"></div>
    </div>
  `)
  $.each(aptitudes, (_, aptitud) => {
    $('#aptitudes-cards').append(/*html*/`
      <div class="col-sm-6 col-md-4 col-lg-2 text-center">
        <div class="card border-0 ${darkMode && 'text-bg-dark'}">
          <img class="card-img-top ${img}" src=${aptitud.icono} alt="Ícono">
          <div class="card-body"><div class="card-title fw-bold">${aptitud.nombre}</div></div>
        </div>
      </div>
    `)
  })

  const checkAptitudesVisibility = () => {
    if (($(window).scrollTop() || 0 / 3) + ($(window).height() || 0) > ($('#aptitudes').offset()?.top || 0)) {
      $('#aptitudes').removeClass(`opacity-0 invisible ${fadeinDiv(false)}`).addClass(`opacity-100 visible ${fadeinDiv(true)}`);
    } else {
      $('#aptitudes').removeClass(`opacity-100 visible ${fadeinDiv(true)}`).addClass(`opacity-0 invisible ${fadeinDiv(false)}`)
    }
  }

  checkAptitudesVisibility();
  $(window).on('scroll', () => checkAptitudesVisibility());
}

export default Aptitudes