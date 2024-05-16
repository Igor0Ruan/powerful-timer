import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class PowerfulTimer extends LitElement {
  static styles = css`
    main.timer {
      background-color: #000;
      color: #72e8ae;
    }
  `;

  @property({ type: String }) header = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>

      <main class="timer">
        <div class="left-menu">Left Menu</div>
        <div class="time-left">12m58s</div>
        <div class="graphic-counter">graphic-counter</div>
      </main>
    `;
  }
}
