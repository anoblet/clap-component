import { LitElement, customElement, property } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("component-clap")
export class Clap extends LitElement {
  public static styles = Style;

  public render = Template.bind(this);
  public interval: any;
  @property({ type: Number }) public count = 0;

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
