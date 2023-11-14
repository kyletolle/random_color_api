import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

import { crypto } from "https://deno.land/std@0.140.0/crypto/mod.ts";

const toHex = (decimal: number) => decimal.toString(16).toUpperCase().padStart(2, '0')

const router = new Router();
router.get('/', (context) => {
  const [red, green, blue] = crypto.getRandomValues(new Uint8Array(3));
  const redHex = toHex(red);
  const greenHex = toHex(green)
  const blueHex = toHex(blue)
  const hexColor = `#${redHex}${greenHex}${blueHex}`;

  context.response.body = hexColor;
  context.response.headers.append('content-type', 'text/plain');
});

const app = new Application();
app.use(oakCors());
app.use(router.routes());

await app.listen({port: 8000})
