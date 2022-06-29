import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { crypto } from "https://deno.land/std@0.140.0/crypto/mod.ts";

serve((_req) => {
    const randomValues = crypto.getRandomValues(new Int8Array(3));
    return new Response(randomValues.toString(), {
      headers: { "content-type": "text/plain" },
    });
  });
