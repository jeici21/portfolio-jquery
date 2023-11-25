import { css } from "@emotion/css";
import fondo from '../assets/fondo.jpg'
import yo from '../assets/yo.jpeg'
import $ from 'jquery'

const div = css`
  background: linear-gradient(rgba(1, 33, 82, 0.5), rgba(1, 33, 82, 0.5)), url(${fondo}) fixed;
  background-size: auto 125%;
`

const h1 = css`
  font-size: 5rem;
`

export const setupPortada = () => {
  $('#boton-portada').on('click', function () {
    window.open('https://1drv.ms/b/s!AmoVp6TBUcPb2GLIuS1R0-TOq4d7?e=3BST4b', '_blank')
  })
}

export const Portada = /*html*/`
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9 text-light d-flex flex-column align-items-center justify-content-end position-relative pt-5 pt-md-0 ${div}">
        <div class='z-1 position-relative'>
          <p class='fs-5'>HOLA, SOY</p>
          <h1 class='fw-bold ${h1}'>Jorge Castro</h1>
          <h5 class='fst-italic'>Ingeniero en Sistemas Computacionales</h5>
        </div>
      </div>
      <div class="col-md-3 text-bg-primary text-center pt-5 pt-md-0">
        <img src=${yo} alt="Yo" width="150" height='150' class="rounded-circle">
        <h1 class='fw-bold pt-5'>Jorge Castro</h1>
        <p class='py-4'>Ingeniero en Sistemas Computacionales.<br />Universidad Estatal de Milagro</p>
        <a href="mailto:david92_jc@yahoo.es" class='link-light link-underline-opacity-0 link-underline-opacity-100-hover'>
          david92_jc@yahoo.es
        </a>
        <p>Tel: +593997543298</p>
        <div class="row px-5 fs-5">
          <div class="col">
            <a href="https://www.linkedin.com/in/jorge-castro-vargas-7242a8129/" target='_blank'
              rel="noopener noreferrer" title="LinkedIn"><i class='bi bi-linkedin link-light'></i></a>
          </div>
          <div class="col">
            <a href="https://www.facebook.com/jeici21/" target='_blank'
              rel="noopener noreferrer" title="Facebook"><i class='bi bi-facebook link-light'></i></a>
          </div>
          <div class="col">
            <a href="https://twitter.com/cijei21" target='_blank'
              rel="noopener noreferrer" title="X"><i class='bi bi-twitter-x link-light'></i></a>
          </div>
          <div class="col">
            <a href="https://github.com/jeici21" target='_blank'
              rel="noopener noreferrer" title="GitHub"><i class='bi bi-github link-light'></i></a>
          </div>
        </div>
        <button class="btn btn-light btn-lg my-5 rounded-0" id="boton-portada">
          <i class="bi bi-download"></i> Descargar CV
        </button>
      </div>
    </div>
  </div>
`