import { AccountIDValidator } from "./AccountIDValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputAccountID extends InputWithValidator {
  constructor(opts) {
    super(new AccountIDValidator(), opts);
  }
}

customElements.define("input-accountid", InputAccountID);

export { InputAccountID };

