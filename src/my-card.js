// my-card.js
import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() { return 'my-card'; }

  constructor() {
    super();
    this.title = 'My card';
    this.image = '';
    this.details = '';
    this.href = '';
    this.active = false;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      details: { type: String },
      href: { type: String },
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host { display: inline-flex; margin: 8px; }
      :host([active]) .card {
        outline: 2px solid #22c55e;
        outline-offset: 8px;
      }
      .card {
        display: inline-flex;
        border: 2px solid grey;
        padding: 8px;
        background-color: #0b1630;
        transition: .2s all ease-in-out;
        opacity: .95;
        color: black;
      }
      .img { width: 200px; height: 100%; object-fit: cover; }
      .text {
        width: 300px; padding: 0 8px 8px 8px; background-color: white;
        margin-left: 8px; max-height: 300px; overflow: auto;
      }
      .title {
        position: sticky; top: 0; background-color: #eee; text-align: center;
        font-size: 1.25rem; padding: 8px 8px 12px; margin: 0 -8px 8px;
      }
      .btn {
        display: inline-block; background: orange; color: white;
        padding: 12px 16px; border-radius: 16px; text-decoration: none; text-align: center;
      }
      .btn:hover, .btn:focus-visible { background: red; }
      .card:hover, .card:focus-within { opacity: 1; outline: 2px solid green; outline-offset: 12px; }
    `;
  }

  render() {
    return html`
      <div class="card">
        ${this.image ? html`<img class="img" src=${this.image} alt=${this.title} />` : html``}
        <div class="text">
          <h3 class="title">${this.title}</h3>
          <p>${this.details}</p>
          <slot></slot>
          ${this.href
            ? html`<a class="btn" href=${this.href} target="_blank" rel="noopener">Learn more</a>`
            : html``}
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
