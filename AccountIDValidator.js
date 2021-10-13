//import { Validator } from "../input-number/Validator.js";
import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";

const han = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_.";
const zen = "０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ－＿．";
const hanzen = han + zen;

class AccountIDValidator extends Validator {
  isValid(c) {
    if (c == "") {
      return false;
    }
    return hanzen.indexOf(c) >= 0;
  }
  normalize(c) {
    if (c == "") {
      return null;
    }
    const n = hanzen.indexOf(c);
    if (n < 0) {
      return null;
    }
    if (n >= han.length) {
      return han[n - han.length];
    }
    return c;
  }
}

export { AccountIDValidator };
