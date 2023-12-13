import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.showDialog()
  }

  showDialog() {
    window.alert("Hello, this is a dialog box, lets play!")
  }

  greet() {
    window.alert("It's greeting time!")
  }
}
