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
import {getPanels} from './panels.js';
import('./wp-panel.js')


export class WpMain extends LitElement {
  static get properties() {
    return {
      panels: { type: Array }
    };
  }

  constructor() {
    super();
    this.panels = getPanels();
  }

  static get styles() {
    return css`
      :host {
        display: block;
        --theme-primary-font-family: monospace;
        --theme-secondary-font-family: monospace;

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
        letter-spacing: .2rem;
        --wp-panel-title-color: var(--theme-color-primary);
        --wp-panel-content-color: var(--theme-color-secondary);
        --wp-panel-background-color: var(--theme-color-dark);
        --wp-panel-border-color: var(--theme-color-gray-dark);
        margin: 2rem 0 2rem 0;
      }

      footer {
        color: var(--theme-color-secondary);
        font-size: .9rem;
        text-align: center;
        padding: .8rem;
      }
      footer a {
        color: var(--theme-color-secondary);
      }
      footer p {
        margin: .2rem;
      }
    `;
  }
    

  render() {
    return html`

      <section>
        ${this.panels.map(panel => html`
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
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />Este obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">licencia de Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional</a>.
      </footer>

    `;
  }


}

customElements.define('wp-main', WpMain);
