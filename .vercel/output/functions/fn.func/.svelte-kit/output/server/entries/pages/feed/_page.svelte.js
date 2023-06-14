import { c as create_ssr_component, d as add_attribute, f as each, e as escape, v as validate_component } from "../../../chunks/index.js";
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
  let test_activities_map = [
    {
      user: "A User",
      specialty: "Hair Stylist",
      location: "Williamsburg",
      color: "teal"
    },
    {
      user: "A User",
      specialty: "Pumber",
      location: "Los Angeles",
      color: "pink"
    },
    {
      user: "A User",
      specialty: "Bike Mechanic",
      location: "1908 W Chicago Ave, Chicago, IL 60622",
      color: "red"
    },
    {
      user: "Paul",
      specialty: "Barber",
      location: "NYC",
      color: "blue"
    }
  ];
  let activities = test_activities_map.map((activity) => {
    let text_class = `font-bold text-ctpf-${activity.color}`;
    let specialty_class = `outline outline-ctpf-${activity.color} text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300`;
    let location_class = `bg-ctpf-${activity.color} text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300`;
    return {
      title: `<span class="${text_class}">${activity.user}</span> recommended a <span class="${specialty_class}">${activity.specialty}</span>in <span class="${location_class}">${activity.location}</span>`,
      date: "just now",
      alt: "image alt here",
      src: "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png"
    };
  });
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
