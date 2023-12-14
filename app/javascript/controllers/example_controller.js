// app/javascript/controllers/example_controller.js
import { Controller } from "stimulus";

export default class extends Controller {
  static values = { message: String };

  connect() {
    console.log("Controller connected");
    this.output();
  }

  disconnect() {
    console.log("Controller disconnected");
  }

  output() {
    console.log(`Message: ${this.messageValue}`);
  }

  changeMessage(event) {
    this.messageValue = event.target.value;
    this.output();
  }
}
