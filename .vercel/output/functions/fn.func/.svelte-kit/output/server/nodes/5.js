import * as server from '../entries/pages/feed/_page.server.ts.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/feed/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/feed/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.68cc34b8.js","_app/immutable/chunks/index.651b1808.js"];
export const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
export const fonts = [];
