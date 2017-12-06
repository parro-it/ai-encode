import AsyncIterable from "asynciterable";
import { TextEncoder } from "util";

/**
 * Encode a String async iterable into a Buffer async iterable.
 * @param  {AsyncIterable} iterable The source iterable to encode. It must emit String instances
 * @return {AsyncIterable}          An async iterable that iterates over the encoded Buffer s
 */
export default function aiEncode(iterable) {
  const encoder = new TextEncoder();
  const generator = iterable[Symbol.asyncIterator] || iterable[Symbol.iterator];
  const iterator = generator.call(iterable);

  return new AsyncIterable(async (write, end) => {
    let item = {};
    while (!item.done) {
      item = await iterator.next();
      if (!item.done) {
        write(encoder.encode(item.value));
      }
    }
    end();
  });
}
