import * as server from '../entries/pages/action/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/action/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/action/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.bc3cf146.js","_app/immutable/chunks/index.65d03eb6.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.462450b0.js"];
export const stylesheets = [];
export const fonts = [];
