import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="patient-name"
export default class extends Controller {
  // targets is an array and we can have multiple targets here in single array.
  // Just like
  static targets = ["name"];

  connect() {
    window.alert("Hello I am Connected")
  }

  getName=()=>{
    const element= this.nameTarget
    const name = element.textContent
    window.alert("you clicked on, ${name}")
  }
}
