// src/polaris-chip.js
import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get tag() { return 'polaris-chip'; }

  constructor() {
    super();
    this.title = 'Chip Default';
    this.href = '';
    this.target = '_blank';
    this.rel = 'noopener';
    this.active = false;
  }

  static get properties() {
    return {
      title:  { type: String },
      href:   { type: String },
      target: { type: String },
      rel:    { type: String },
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host { display: inline-flex; }
      :host([active]) span, :host([active]) a {
        outline: 2px solid #22c55e; outline-offset: 4px;
      }
      span, a {
        background-color: orange; color: black; font-size: 24px;
        padding: 16px; margin: 8px; text-decoration: none; border-radius: 8px; display: inline-block;
      }
      span:hover, a:hover,
      span:focus-visible, a:focus-visible { background-color: grey; border: 1px solid black; }
    `;
  }

  render() {
    const inner = html`${this.title}`;
    return this.href
      ? html`<a href=${this.href} target=${this.target} rel=${this.rel}>${inner}</a>`
      : html`<span>${inner}</span>`;
  }
}

globalThis.customElements.define(PolarisChip.tag, PolarisChip);
