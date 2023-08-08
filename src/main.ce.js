import { defineCustomElement } from "vue";
import App from "./custom-elements/index.ce.vue";

window.customElements.define("xx-xx-im", defineCustomElement(App));
