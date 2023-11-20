import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import { App, DarkMode, setupApp } from './App'

$(() => {
  $('#app')!.html(App)
  setupApp()
})

DarkMode()