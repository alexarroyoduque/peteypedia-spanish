import { LitElement, html, css } from 'lit-element';

export class WpPanel extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      level: { type: Number },
      description: { type: String },
      items: { type: Array }
    };
  }
  constructor() {
    super();

    this.title = '';
    this.level = 2;
    this.description = '';
    this.items = [];
  }

  static get styles() {
    return css`
      :host {
        display: block;
        border: .5rem solid var(--wp-panel-border-color);
        border-radius: 1rem;
        padding: 2rem;
        background-color: var(--wp-panel-background-color);
      }

      h1, h2 {
        font-size: 1.8rem;
        color: var(--wp-panel-title-color);
        margin: 0;
      }

      ul {
        padding: 0;
        margin-top: 1rem;
      }

      li, a {
        color: var(--wp-panel-content-color);
      }

      li {
        list-style: none;
        font-size: 1.1rem;
        margin-bottom: .8rem;
      }

      p {
        color: var(--wp-panel-content-color);
      } 

      .item-description {
        font-size: .8rem;
        margin-top: 0.1rem;
      }

      .item-text {
        margin: 0;
      }

    `;
  }

  render() {
    return html`

      <h1 ?hidden="${this.level !== 1}">${this.title}</h1>
      <h2 ?hidden="${this.level === 1}">${this.title}</h2>
      <p ?hidden="${this.description === 'undefined'}">${this.description}</p>
      <ul ?hidden="${!this.items.length}">
        ${this.items.map(item => html`
          <li>
            <a ?hidden=${!item.link} href="${item.link}" target="_blank">${item.text}</a>
            <p class='item-text' ?hidden=${item.link}>${item.text}</p>
            <p class='item-description' ?hidden=${!item.description}>${item.description}</p>
          </li>
        `)}
      </ul>

    `;
  }


}

customElements.define('wp-panel', WpPanel);
