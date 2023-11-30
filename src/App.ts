import Aptitudes from "./components/Aptitudes";
import Footerbar from "./components/Footerbar";
import FormacionYExp from "./components/FormacionYExp";
import Navbar from "./components/Navbar";
import Portada from "./components/Portada";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";

let darkMode = false
const setDarkMode = (mode: boolean) => {
  darkMode = mode
  Aptitudes(darkMode)
  Proyectos(darkMode)
  Footerbar(darkMode)
}

const DarkModeEffect = () => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setDarkMode(darkModeMediaQuery.matches);
  darkModeMediaQuery.addEventListener('change', e => setDarkMode(e.matches));
  return () => darkModeMediaQuery.removeEventListener('change', e => setDarkMode(e.matches));
}

export const App = () => {
  DarkModeEffect()
  Navbar()
  Portada()
  SobreMi()
  FormacionYExp()
  Aptitudes(darkMode)
  Proyectos(darkMode)
  Footerbar(darkMode)
}

export default App