import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
/* empty css                                                       */import { L as Listgroup } from "../../../chunks/Listgroup.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let list1 = ["Architect", "Babysitter", "Car Broker", "Contractor", "Dentist"];
  let list2 = [
    "Dentist",
    "Doctor",
    "Dry Cleaner",
    "Handyman",
    "Housekeeper",
    "Interior Designer"
  ];
  let list3 = [
    "Landscape/Gardener",
    "Masseuse",
    "Parenting Coach",
    "Physical Therapist",
    "Plumber"
  ];
  let list4 = [
    "Private Chef",
    "Psychic",
    "Realtor",
    "Therapist (MFT, Ph.D., etc.)",
    "Yoga Instructor"
  ];
  let list5 = [
    "Electrician",
    "Financial Advisor",
    "Hair Stylist",
    "Personal Trainer",
    "Weightlifting Coach"
  ];
  let list6 = [
    "Personal Assistant",
    "Personal Shopper",
    "Accountant",
    "Photographer",
    "Piano Teacher"
  ];
  return `<div class="flex flex-col flex-grow"></div>

<div class="flex flex-col flex-grow items-center justify-center py-20"><div class="flex justify-between w-2/3 max-w-screen-lg"><div>${validate_component(Listgroup, "Listgroup").$$render($$result, { items: list1, class: "w-48" }, {}, {
    default: ({ item }) => {
      return `${escape(item)}`;
    }
  })}</div>
		<div>${validate_component(Listgroup, "Listgroup").$$render($$result, { items: list2, class: "w-48" }, {}, {
    default: ({ item }) => {
      return `${escape(item)}`;
    }
  })}</div>
		<div>${validate_component(Listgroup, "Listgroup").$$render($$result, { items: list3, class: "w-48" }, {}, {
    default: ({ item }) => {
      return `${escape(item)}`;
    }
  })}</div></div></div>

<div class="flex flex-col flex-grow items-center justify-center py-20"><div class="flex justify-between w-2/3 max-w-screen-lg"><div>${validate_component(Listgroup, "Listgroup").$$render($$result, { items: list4, class: "w-48" }, {}, {
    default: ({ item }) => {
      return `${escape(item)}`;
    }
  })}</div>
		<div>${validate_component(Listgroup, "Listgroup").$$render($$result, { items: list5, class: "w-48" }, {}, {
    default: ({ item }) => {
      return `${escape(item)}`;
    }
  })}</div>
		<div>${validate_component(Listgroup, "Listgroup").$$render($$result, { items: list6, class: "w-48" }, {}, {
    default: ({ item }) => {
      return `${escape(item)}`;
    }
  })}</div></div></div>`;
});
export {
  Page as default
};
