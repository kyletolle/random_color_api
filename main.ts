import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { crypto } from "https://deno.land/std@0.140.0/crypto/mod.ts";

serve((_req) => {
    const [red, green, blue] = crypto.getRandomValues(new Uint8Array(3));
    const redHex = red.toString(16).toUpperCase();
    const greenHex = green.toString(16).toUpperCase();
    const blueHex = blue.toString(16).toUpperCase();
    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return new Response(hexColor, {
      headers: { "content-type": "text/plain" },
    });
  });
