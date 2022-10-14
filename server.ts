import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();

const FORM = `https://forms.gle/CEmZxWnvabUcVMJA9`;

app.use((ctx) => {
  ctx.response.redirect(FORM);
});

app.listen({ port: 8000 });
