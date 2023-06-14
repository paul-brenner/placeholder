import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
/* empty css                                                       */import { L as Listgroup } from "../../../chunks/Listgroup.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let names = [
    "Ryan Wegner",
    "Paul Brenner ",
    "Elizabeth Wegner",
    "Mary Lee",
    "Elizabeth Cutrone"
  ];
  let submit_links = names.map((name) => {
    return {
      name: name.split(" ")[0] + " " + name.split(" ")[1][0],
      href: "https://airtable.com/shrAE34J3zD9D5NLp?prefill_Recommender=" + name.split(" ")[0] + "%20" + name.split(" ")[1] + "&hide_Recommender=true"
    };
  });
  let request_links = names.map((name) => {
    return {
      name: name.split(" ")[0] + " " + name.split(" ")[1][0],
      href: "https://airtable.com/shrrzGGbt2gfEdeF0?prefill_Requester=" + name.split(" ")[0] + "%20" + name.split(" ")[1] + "&hide_Requester=true"
    };
  });
  return `<div class="flex flex-col flex-grow"></div>

<div class="flex flex-col flex-grow items-center justify-center py-20"><div class="flex"><div class="mr-24"><h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">Recommendations
			</h3>
			${validate_component(Listgroup, "Listgroup").$$render(
    $$result,
    {
      active: true,
      items: submit_links,
      class: "w-48"
    },
    {},
    {
      default: ({ item }) => {
        return `${escape(item.name)}`;
      }
    }
  )}</div>
		<div><h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">Requests</h3>
			${validate_component(Listgroup, "Listgroup").$$render(
    $$result,
    {
      active: true,
      items: request_links,
      class: "w-48"
    },
    {},
    {
      default: ({ item }) => {
        return `${escape(item.name)}`;
      }
    }
  )}</div></div></div>`;
});
export {
  Page as default
};
