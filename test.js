import test from "tape-async";
import aiEncode from ".";

test("exports a function", async t => {
  t.is(typeof aiEncode, "function");
});
