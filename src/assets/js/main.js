/*  ========================================================================
    # Main JavaScript
    ========================================================================  */

import Greetings from './scripts/greetings';

const ArrayScripts = [Greetings];

const Scripts = {
  init() {
    if (ArrayScripts.length > 0 && ArrayScripts !== undefined) {
      ArrayScripts.forEach(script => {
        script.init();
      });
    }
  }
};

Scripts.init();
