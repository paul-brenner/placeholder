import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "@googlemaps/js-api-loader";
import "classnames";
/* empty css                                                       */import { L as Label } from "../../../chunks/Label.js";
import { S as Select } from "../../../chunks/Select.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const newYorkCityBounds = {
    north: 40.917577,
    south: 40.477399,
    west: -74.25909,
    east: -73.700181
  };
  const laBounds = {
    north: 34.337306,
    south: 33.703652,
    west: -118.668175,
    east: -118.155289
  };
  const tokyoBounds = {
    north: 35.817813,
    south: 35.500974,
    west: 139.562483,
    east: 139.962483
  };
  const sfBounds = {
    north: 37.929823,
    south: 37.639829,
    west: -122.503081,
    east: -122.303081
  };
  const chicagoBounds = {
    north: 42.023131,
    south: 41.643131,
    west: -87.940101,
    east: -87.740101
  };
  let selected;
  let cities = [
    {
      value: newYorkCityBounds,
      name: "New York City"
    },
    { value: laBounds, name: "Los Angeles" },
    { value: tokyoBounds, name: "Tokyo" },
    { value: sfBounds, name: "San Francisco" },
    { value: chicagoBounds, name: "Chicago" }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (selected) {
        options.bounds = selected;
      }
    }
    $$rendered = `<div class="flex flex-col flex-grow"><div class="flex flex-col items-center justify-center py-20"><div class="w-2/3 mx-auto flex-col"><div class="w-full">${validate_component(Label, "Label").$$render($$result, { class: "w-full" }, {}, {
      default: () => {
        return `Find someone
					${validate_component(Select, "Select").$$render(
          $$result,
          {
            class: "mt-2 w-full",
            items: cities,
            placeholder: "Choose a city",
            value: selected
          },
          {
            value: ($$value) => {
              selected = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
