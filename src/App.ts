import { Navbar, setupNavbar } from "./components/Navbar";
import { Portada, setupPortada } from "./components/Portada";
import { SobreMi, setupSobreMi } from "./components/SobreMi";

let darkMode = false
const setDarkMode = (mode: boolean) => {
  darkMode = mode
  setupSobreMi(darkMode);
}

const DarkModeEffect = () => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setDarkMode(darkModeMediaQuery.matches);
  darkModeMediaQuery.addEventListener('change', e => setDarkMode(e.matches));
  return () => darkModeMediaQuery.removeEventListener('change', e => setDarkMode(e.matches));
}

export const setupApp = () => {
  setupNavbar()
  setupPortada()
  setupSobreMi(darkMode)
  DarkModeEffect()
}

export const App = Navbar + Portada + SobreMi