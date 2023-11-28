import Navbar from "./components/Navbar";
import Portada from "./components/Portada";
import SobreMi from "./components/SobreMi";

let darkMode = false
const setDarkMode = (mode: boolean) => {
  darkMode = mode
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
}

export default App