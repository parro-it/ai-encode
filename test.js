import test from "tape-async";
import aiEncode from ".";
import { fs } from "ai-node";
import concat from "ai-concat";

const fixture = `${__dirname}/fixtures/test`;

test("exports a function", async t => {
  t.is(typeof fs.readFile, "function");
});

test("decode an iterable", async t => {
  const buffer = await concat.buff(aiEncode(fs.readFile(fixture, "utf8")));
  t.is(buffer.toString("utf8"), "test line 1\nline 2\n");
});
