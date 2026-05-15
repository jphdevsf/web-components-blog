import { FullWidth } from "../../components/FullWidth/FullWidth.js"
import { tagName } from "../../lib/utils.js"

export class NotFound extends HTMLElement {
  static tagName = "x-not-found"
  connectedCallback() {
    this.innerHTML = `
    <${tagName(FullWidth)}>
      <x-row>
            <x-column>
                <br />
                <br />
                <br />    
                <h1>404: Aw Shucks!</h1>
                <a href="/">Go Back Home</a>
                <br />
                <br />
                <br />
            </x-column>
        </x-row>
    </${tagName(FullWidth)}>
    `
  }
}
