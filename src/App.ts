import { SobreMi, setupSobreMi } from "./components/SobreMi";

let darkMode = false

const setDarkMode = (mode: boolean) => {
  darkMode = mode
  setupSobreMi(darkMode);
}

export const DarkMode = () => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  setDarkMode(darkModeMediaQuery.matches);
  darkModeMediaQuery.addEventListener('change', e => setDarkMode(e.matches));
  return () => darkModeMediaQuery.removeEventListener('change', e => setDarkMode(e.matches));
}

export const setupApp = () => {
  setupSobreMi(darkMode)
}

export const App = SobreMi