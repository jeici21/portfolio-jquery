const Footerbar = (darkMode: boolean) => {
  $('#footer').length > 0 && $('#footer').remove()
  $('#app').append(/*html*/`
    <div id="footer">
      <div class="bg-primary bg-opacity-10 py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center">
              <h2 class="fst-italic text-primary">Mis redes sociales</h2>
              <div class='d-flex flex-row justify-content-center column-gap-4 fs-5 pt-5'>
                <a href="https://www.linkedin.com/in/jorge-castro-vargas-7242a8129/" target='_blank'
                  rel="noopener noreferrer" title="LinkedIn"><i class='bi bi-linkedin'></i></a>
                <a href="https://www.facebook.com/jeici21/" target='_blank'
                  rel="noopener noreferrer" title="Facebook"><i class='bi bi-facebook'></i></a>
                <a href="https://twitter.com/cijei21" target='_blank'
                  rel="noopener noreferrer" title="X"><i class='bi bi-twitter-x'></i></a>
                <a href="https://github.com/jeici21" target='_blank'
                  rel="noopener noreferrer" title="GitHub"><i class='bi bi-github'></i></a>
              </div>
            </div>
            <div class="col-md-6 text-center pt-5 pt-md-0">
              <a class='${darkMode ? 'link-light' : 'link-dark'} link-underline-opacity-0 link-underline-opacity-100-hover'
                href="mailto:david92_jc@yahoo.es">david92_jc@yahoo.es</a>
              <p>Tel: +593997543298</p>
              <div class="row justify-content-around align-items-center pt-5">
                <div class="col-auto">
                  <a href="https://1drv.ms/b/s!AmoVp6TBUcPb2GLIuS1R0-TOq4d7?e=3BST4b" target="_blank"
                    class="btn btn-primary btn-lg rounded-0" aria-label="Descargar CV" 
                    rel="noopener noreferrer"><i class="bi bi-download"></i> Descargar CV</a>
                </div>
                <div class="col-auto">
                  <a href="#" class="btn btn-outline-primary border-2 rounded-circle" 
                    title='Volver al Inicio'><i class="bi bi-chevron-up"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-primary text-white fst-italic ps-5 py-3">
        © ${new Date().getFullYear()} Diseñado por Jorge Castro Vargas.
      </footer>
    </div>
  `)
}

export default Footerbar