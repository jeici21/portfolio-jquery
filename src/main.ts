import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import { App, setupApp } from './App'

$(() => {
  $('#app')!.html(App)
  setupApp()
})