import $ from 'jquery'

export const setupNavbar = () => {
  $('#links li a').on('click', function () {
    $('#links li a').removeClass('active');
    $(this).addClass('active');
  });
}

export const Navbar = /*html*/`
  <nav class="navbar navbar-expand-sm bg-primary sticky-top" data-bs-theme="dark">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list text-light"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto fst-italic" id="links">
          <li class="nav-item ps-5">
            <a class="nav-link active" href="#sobre-mi">Sobre mí</a>
          </li>
          <li class="nav-item ps-5">
            <a class="nav-link" href="#formacion-y-experiencia">Formación y experiencia</a>
          </li>
          <li class="nav-item ps-5">
            <a class="nav-link" href="#aptitudes">Aptitudes</a>
          </li>
          <li class="nav-item ps-5">
            <a class="nav-link" href="#proyectos">Proyectos</a>
          </li>
        </ul>
      </div>
  </nav>
`