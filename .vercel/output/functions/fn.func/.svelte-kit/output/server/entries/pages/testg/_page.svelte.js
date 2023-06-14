import { c as create_ssr_component, d as compute_rest_props, i as setContext, a as add_attribute, s as spread, f as escape_object, g as escape_attribute_value, h as getContext, v as validate_component } from "../../../chunks/index.js";
import "@googlemaps/js-api-loader";
import classNames from "classnames";
/* empty css                                                       */import { L as Label } from "../../../chunks/Label.js";
import { I as Input } from "../../../chunks/Input.js";
import { S as Select } from "../../../chunks/Select.js";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "striped", "hoverable", "noborder", "shadow", "color", "customeColor"]);
  let { divClass = "relative overflow-x-auto" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { noborder = false } = $$props;
  let { shadow = false } = $$props;
  let { color = "default" } = $$props;
  let { customeColor = "" } = $$props;
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customeColor
  };
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.noborder === void 0 && $$bindings.noborder && noborder !== void 0)
    $$bindings.noborder(noborder);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customeColor === void 0 && $$bindings.customeColor && customeColor !== void 0)
    $$bindings.customeColor(customeColor);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("noborder", noborder);
  }
  {
    setContext("color", color);
  }
  return `<div${add_attribute("class", classNames(divClass, shadow && "shadow-md sm:rounded-lg"), 0)}><table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div>

`;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tableBodyClass = void 0 } = $$props;
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0)
    $$bindings.tableBodyClass(tableBodyClass);
  return `<tbody${add_attribute("class", tableBodyClass, 0)}>${slots.default ? slots.default({}) : ``}</tbody>

`;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theadClassfinal;
  let $$restProps = compute_rest_props($$props, ["theadClass", "defaultRow"]);
  let { theadClass = "text-xs uppercase" } = $$props;
  let { defaultRow = true } = $$props;
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  if ($$props.theadClass === void 0 && $$bindings.theadClass && theadClass !== void 0)
    $$bindings.theadClass(theadClass);
  if ($$props.defaultRow === void 0 && $$bindings.defaultRow && defaultRow !== void 0)
    $$bindings.defaultRow(defaultRow);
  theadClassfinal = classNames(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
  return `<thead${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(theadClassfinal)
      }
    ],
    {}
  )}>${defaultRow ? `<tr>${slots.default ? slots.default({}) : ``}</tr>` : `${slots.default ? slots.default({}) : ``}`}</thead>

`;
});
const TableHeadCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["padding"]);
  let { padding = "px-6 py-3" } = $$props;
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  return `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(padding, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th>

`;
});
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
    })}</div>
			<div class="w-full">${validate_component(Input, "Input").$$render(
      $$result,
      {
        class: "w-full",
        type: "text",
        id: "autocomplete",
        placeholder: "Who are you looking for",
        required: true
      },
      {},
      {}
    )}</div>
			${validate_component(Table, "Table").$$render($$result, { hoverable: true }, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Result Type`;
              }
            })}
					${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Result Value`;
              }
            })}`;
          }
        })}
				${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${``}`;
          }
        })}`;
      }
    })}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
