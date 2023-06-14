import * as server from '../entries/pages/super-forms/_page.server.ts.js';

export const index = 13;
export const component = async () => (await import('../entries/pages/super-forms/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/super-forms/+page.server.ts";
export const imports = ["_app/immutable/nodes/13.cea32d86.js","_app/immutable/chunks/index.65d03eb6.js"];
export const stylesheets = [];
export const fonts = [];
