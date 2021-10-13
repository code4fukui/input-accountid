import * as t from "https://deno.land/std/testing/asserts.ts";
import { AccountIDValidator } from "./AccountIDValidator.js";

Deno.test("isValid", () => {
  const v = new AccountIDValidator();
  t.assert(v.isValid("1"));
  t.assert(v.isValid("１"));
  t.assert(v.isValid("a"));
  t.assert(v.isValid("_"));
  t.assert(v.isValid("-"));
  t.assert(v.isValid("."));
  t.assert(!v.isValid("$"));
  t.assert(!v.isValid("あ"));
  t.assert(!v.isValid(""));
});
Deno.test("normalize", () => {
  const v = new AccountIDValidator();
  t.assertEquals(v.normalize("1"), "1");
  t.assertEquals(v.normalize("１"), "1");
  t.assertEquals(v.normalize("."), ".");
  t.assertEquals(v.normalize("あ"), null);
  t.assertEquals(v.normalize(""), null);
});
Deno.test("validate", () => {
  const v = new AccountIDValidator();
  t.assertEquals(v.validate("123"), "123");
  //t.assertEquals(v.validate("０１２３"), "0123");
  t.assertEquals(v.validate("０あ１い２３"), "0123");
  t.assertEquals(v.validate("abc_def-ghi.kjl"), "abc_def-ghi.kjl");
  t.assertEquals(v.validate("たたた"), "");
});
