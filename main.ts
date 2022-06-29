import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { crypto } from "https://deno.land/std@0.140.0/crypto/mod.ts";

const toHex = decimal => decimal.toString(16).toUpperCase().padStart(2, '0')

serve((_req) => {
    const [red, green, blue] = crypto.getRandomValues(new Uint8Array(3));
    const redHex = toHex(red);
    const greenHex = toHex(green)
    const blueHex = toHex(blue)
    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return new Response(hexColor, {
      headers: { "content-type": "text/plain" },
    });
  });
