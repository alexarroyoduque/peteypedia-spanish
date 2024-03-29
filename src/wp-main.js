/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */


import { LitElement, html, css } from 'lit-element';
import {getPanelsSpanish} from './panels-spanish.js';
import {getPanelsEnglish} from './panels-english.js';
import('./wp-panel.js')


export class WpMain extends LitElement {
  static get properties() {
    return {
      panelsSpanish: { type: Array },
      panelsEnglish: { type: Array },
      panelsSelected: { type: Array }
    };
  }

  constructor() {
    super();
    this.panelsSpanish = getPanelsSpanish();
    this.panelsEnglish = getPanelsEnglish();
    this.panelsSelected = [...this.panelsSpanish];

    this.addEventListener('change-language', (ev) => {
      if (ev.detail === 'spanish') {
        this.panelsSelected = [...this.panelsSpanish];
        document.documentElement.lang = 'es';
      } else if (ev.detail === 'english') {
        this.panelsSelected = [...this.panelsEnglish];
        document.documentElement.lang = 'en';
      }
    });

  }

  static get styles() {
    return css`
      :host {
        display: block;
        --theme-primary-font-family: 'Courier Prime', monospace;
        --theme-secondary-font-family: 'Courier Prime', monospace;

        --theme-color-golden: #fbde00;
        --theme-color-light: #fff;
        --theme-color-gray-dark: #2b2b2b;
        --theme-color-dark: #000;

        --theme-color-primary: var(--theme-color-golden);
        --theme-color-secondary: var(--theme-color-light);

        margin: 0px auto;
      }

      wp-panel {
        font-family: var(--theme-primary-font-family);
        letter-spacing: .15rem;
        --wp-panel-title-color: var(--theme-color-primary);
        --wp-panel-content-color: var(--theme-color-secondary);
        --wp-panel-background-color: var(--theme-color-dark);
        --wp-panel-border-color: var(--theme-color-gray-dark);
        margin: 1.8rem 0 1.8rem 0;
      }

      footer {
        color: #E0E0E0;
        font-size: .9rem;
        text-align: center;
        padding: .8rem;
      }
      footer a {
        color: #E0E0E0;
      }
      footer p {
        margin: .2rem;
      }
    `;
  }
    

  render() {
    return html`

      <section>
        ${this.panelsSelected.map(panel => html`
          <wp-panel role="article"
            title="${panel.title}"
            level="${panel.level}"
            description="${panel.description}"
            .items="${panel.items}"
          ></wp-panel>
        `)}
      </section>

      <footer>
        <p>Toda la propiedad intelectual de esta información pertenece a HBO.</p>
        <p>PETEYPEDIA en español adaptada por @AlexArroyoDuque.</p>
        <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />Este obra está bajo una <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">licencia de Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional</a>.
      </footer>

    `;
  }


}

customElements.define('wp-main', WpMain);
