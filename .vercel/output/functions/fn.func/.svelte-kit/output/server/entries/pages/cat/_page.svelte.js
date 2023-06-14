import { c as create_ssr_component, a as add_attribute, e as each, b as escape } from "../../../chunks/index.js";
import { variants } from "@catppuccin/palette";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected = "latte";
  return `${$$result.head += `<!-- HEAD_svelte-1vs43sh_START -->${$$result.title = `<title>Catppuccin + TailwindCSS!</title>`, ""}<!-- HEAD_svelte-1vs43sh_END -->`, ""}

<html lang="en"${add_attribute("class", selected, 0)}><body class="h-screen bg-base text-text"><div class="container max-w-lg mx-auto transition-colors space-y-2 py-2"><div class="space-y-2 text-center"><img class="mx-auto" src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo">
				<h1>Catppuccin for Tailwind CSS</h1>
				<div class="flex max-w-fit border rounded border-overlay0 items-center mx-auto"><span class="rounded-l whitespace-nowrap px-2">Current flavour:</span>
					<select class="focus:rounded-r focus:ring-pink focus:border-pink bg-overlay0 w-full p-1 text-text" name="colorscheme">${each(Object.keys(variants), (variant) => {
    return `<option${add_attribute("value", variant, 0)}>${escape(variant)}</option>`;
  })}</select></div></div>
			<div class="flex flex-wrap gap-2">${each(Object.keys(variants.latte), (color) => {
    return `<div${add_attribute("class", "flex items-center shadow-md rounded justify-center h-24 w-24 bg-" + color, 0)}><span class="bg-base/20 text-text rounded-lg p-1">${escape(color)}</span>
					</div>`;
  })}</div></div></body></html>`;
});
export {
  Page as default
};
