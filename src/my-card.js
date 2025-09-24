import { LitElement, html, css } from "lit";

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "Card Title";
    this.image = "";
    this.fancy = false;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      fancy: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
        margin: 16px;
        --my-card-fancy-bg: #ffe066;
        --my-card-img-ratio: 16/9;
      }
      :host([fancy]) .card {
        background: var(--my-card-fancy-bg, gold);
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 15px 0px #f00a;
      }
      .card {
        display: flex;
        flex-direction: column;
        border: 2px solid #eaeaea;
        background-color: #fafafa;
        min-width: 320px;
        max-width: 350px;
        min-height: 410px;
        border-radius: 18px;
        overflow: hidden;
        transition: background 0.2s, box-shadow 0.2s, border 0.2s;
      }
      .img-holder {
        aspect-ratio: var(--my-card-img-ratio, 16/9);
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        background: #d5eaff;
      }
      .img-holder img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: block;
        max-height: 170px;
        aspect-ratio: var(--my-card-img-ratio, 16/9);
      }
      .title {
        font-size: 1.6rem;
        padding: 12px;
        margin: 0;
        text-align: center;
        font-weight: bold;
        background: #ededed;
      }
      details {
        margin: 8px;
        width: calc(100% - 16px);
      }
      summary {
        font-size: 18px;
        padding: 4px 0;
        cursor: pointer;
      }
      details[open] summary {
        font-weight: bold;
        text-decoration: underline;
      }
      .desc-slot {
        border: 2px solid #222;
        border-radius: 7px;
        background: #f7f7ff;
        margin-top: 5px;
        min-height: 50px;
        max-height: 90px;
        overflow: auto;
        padding: 10px;
        font-size: 1rem;
      }
      /* Bonus: style any button or link slotted into the card */
      ::slotted(a),
      ::slotted(button) {
        margin-top: 8px;
        display: inline-block;
        padding: 6px 20px;
        background: #358eda;
        color: #fff;
        border-radius: 6px;
        border: none;
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.2s;
      }
      ::slotted(a:hover),
      ::slotted(button:hover) {
        background: #184d7a;
      }
    `;
  }

  openChanged(e) {
    if (e && e.target && e.target.getAttribute("open") !== null) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <div class="img-holder">
          ${this.image
            ? html`<img src="${this.image}" alt="${this.title}" />`
            : ""}
        </div>
        <div class="title">${this.title}</div>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div class="desc-slot">
            <slot></slot>
          </div>
        </details>
      </div>
    `;
  }
}
customElements.define(MyCard.tag, MyCard);
