import { serve } from "https://deno.land/std@0.165.0/http/server.ts";
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";

serve(handler);
console.log("Server is running. Accesible at: http://localhost:8000");

const decoder = new TextDecoder("utf-8");

async function handler(_req: Request): Promise<Response> {
  const file = "./post/hello.md";
  const md = decoder.decode(await Deno.readFile(file));
  const parsed = Marked.parse(md);
  return new Response(JSON.stringify(parsed.meta), {
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}
