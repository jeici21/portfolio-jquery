import $ from 'jquery'

const Navbar = () => {
  $('#app').append(/*html*/`
    <nav class="navbar navbar-expand-md bg-primary sticky-top" data-bs-theme="dark">
      <button class="navbar-toggler fs-1 ms-auto me-1" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list text-light"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto fst-italic text-center" id="links">
          <li class="nav-item ps-md-5">
            <a class="nav-link active" href="#sobre-mi">Sobre mí</a>
          </li>
          <li class="nav-item ps-md-5">
            <a class="nav-link" href="#formacion-y-exp">Formación y experiencia</a>
          </li>
          <li class="nav-item ps-md-5">
            <a class="nav-link" href="#aptitudes">Aptitudes</a>
          </li>
          <li class="nav-item ps-md-5">
            <a class="nav-link" href="#proyectos">Proyectos</a>
          </li>
        </ul>
      </div>
    </nav>
  `)
  $('#links li a').on('click', function () {
    $('#links li a').removeClass('active');
    $(this).addClass('active');
  });
}

export default Navbar