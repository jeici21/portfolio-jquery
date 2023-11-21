import { css } from "@emotion/css"
import $ from 'jquery'

const span = css`
  &:hover {
    color: silver;
  }
`

let active = 0;
const setActive = (value: number) => {
  active = value;
}

export const setupNavbar = () => {
  const links = [
    { text: "Sobre mí", href: "#sobre-mi" },
    { text: "Formación y experiencia", href: "#formacion-y-experiencia" },
    { text: "Aptitudes", href: "#aptitudes" },
    { text: "Proyectos", href: "#proyectos" },
  ];

  $.each(links, (index, link) => {
    $('#links').append(/*html*/`
      <li class="nav-item ps-5">
        <a class="nav-link link-light ${index === 0 && 'fw-bold'}" href=${link.href}>
          <span class=${span}>${link.text}</span>
        </a>
      </li>
    `).find('a').on('click', function () {
      setActive(index);
      $('#links li a').removeClass('fw-bold');
      $(this).addClass('fw-bold');
    })
  })
}

export const Navbar = /*html*/`
  <nav class="navbar navbar-expand-sm bg-primary">
    <div class="container-fluid">
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list text-light"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fst-italic" id="links"></ul>
      </div>
    </div>
  </nav>
`