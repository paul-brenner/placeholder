import { c as create_ssr_component, a as add_attribute, e as each, b as escape, v as validate_component } from "../../../chunks/index.js";
import "classnames";
/* empty css                                                       */const Activity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { olClass = "relative border-l border-gray-200 dark:border-gray-700" } = $$props;
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  return `<ol${add_attribute("class", olClass, 0)}>${slots.default ? slots.default({}) : ``}</ol>

`;
});
const ActivityItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { activities } = $$props;
  if ($$props.activities === void 0 && $$bindings.activities && activities !== void 0)
    $$bindings.activities(activities);
  return `${each(activities, ({ title, date, src, alt, text }) => {
    return `<li class="mb-10 ml-6"><span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"><img class="rounded-full shadow-lg"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}></span>
    <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600"><div class="justify-between items-center mb-3 sm:flex"><time class="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">${escape(date)}</time>
        <div class="text-sm font-normal text-gray-500 lex dark:text-gray-300"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END -->
        </div></div>
      ${text ? `<div class="p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"><!-- HTML_TAG_START -->${text}<!-- HTML_TAG_END -->
        </div>` : ``}</div>
  </li>`;
  })}

`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activities = [
    {
      title: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: "just now",
      alt: "image alt here",
      src: "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png"
    },
    {
      title: "We don’t serve their kind here! What? Your droids. ",
      date: "2 hours ago",
      alt: "image alt here",
      src: "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png",
      text: "The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. "
    },
    {
      title: "They’ll have to wait outside. We don’t want them here. ",
      date: "1 day ago",
      alt: "image alt here",
      src: "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png"
    }
  ];
  return `



<div class="flex flex-col flex-grow"><div class="flex flex-col flex-grow items-center justify-center py-20">${validate_component(Activity, "Activity").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ActivityItem, "ActivityItem").$$render($$result, { activities }, {}, {})}`;
    }
  })}</div></div>`;
});
export {
  Page as default
};
