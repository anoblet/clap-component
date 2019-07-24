import { LitElement, customElement, property } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("clap-component")
export class ClapComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);

  @property({ type: Number }) public count = 0;
  public interval: any;

  firstUpdated() {
    const button = this.shadowRoot.querySelector("#clap");
    button.addEventListener("mousedown", () => {
      this.interval = setInterval(() => {
        this.increaseCount();
      }, 100);
    });
    button.addEventListener("mouseup", () => {
      clearInterval(this.interval);
    });
  }

  public increaseCount() {
    this.count++;
    this.dispatchEvent(
      new CustomEvent("count-changed", {
        detail: {
          count: this.count
        }
      })
    );
  }
}
