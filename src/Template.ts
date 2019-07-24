import { html } from "lit-element";
import { pan_tool } from "@anoblet/material-icons";
import "@anoblet/grid-component";

export default function() {
  return html`
    <grid-component>
      <div class="center">
        ${this.count}
      </div>
      <span id="clap">${pan_tool}</span>
    </grid-component>
  `;
}
