import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import the specific icons from your Goodies and ResumeBug
import {
  faCode,
  faCoffee,
  faAddressCard,
  faPaperPlane,
  faFloppyDisk,
  faFileLines,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

// Disable adding CSS automatically since we will handle it via Nuxt
config.autoAddCss = false;

library.add(
  faCode,
  faCoffee,
  faAddressCard,
  faPaperPlane,
  faLinkedin,
  faGithub,
  faCodepen,
  faFloppyDisk,
  faFileLines,
  faChevronRight,
  faChevronLeft,
  faChevronDown,
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
