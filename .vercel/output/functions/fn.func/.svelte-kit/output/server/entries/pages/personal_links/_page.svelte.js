import { c as create_ssr_component, d as compute_rest_props, v as validate_component, a as add_attribute, m as createEventDispatcher, o as add_classes, l as compute_slots, s as spread, f as escape_object, g as escape_attribute_value } from "../../../chunks/index.js";
import classNames from "classnames";
import { T as ToolbarButton } from "../../../chunks/ToolbarButton.js";
import { F as Frame } from "../../../chunks/Frame.js";
/* empty css                                                       */import { L as Label } from "../../../chunks/Label.js";
import { I as Input } from "../../../chunks/Input.js";
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name"]);
  let { name = "Close" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render(
    $$result,
    Object.assign({}, { name }, $$restProps, {
      class: classNames("ml-auto", $$props.class)
    }),
    {},
    {
      default: ({ svgSize }) => {
        return `<svg${add_attribute("class", svgSize, 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
      }
    }
  )}

`;
});
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["dismissable", "accent"]);
  let $$slots = compute_slots(slots);
  let { dismissable = false } = $$props;
  let { accent = false } = $$props;
  createEventDispatcher();
  let hidden = false;
  let divClass;
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.accent === void 0 && $$bindings.accent && accent !== void 0)
    $$bindings.accent(accent);
  divClass = classNames("p-4 text-sm", accent && "border-t-4 ", hidden, $$props.class);
  {
    {
      $$restProps.color = $$restProps.color ?? "blue";
      $$restProps.rounded = $$restProps.rounded ?? !accent;
    }
  }
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: divClass }, { role: "alert" }), {}, {
    default: () => {
      return `<div class="flex items-center">${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : ``}
    <div${add_classes(($$slots.icon ? "ml-3" : "").trim())}>${slots.default ? slots.default({}) : ``}</div>

    ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          class: "-mx-1.5 -my-1.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}</div>
  ${slots.extra ? slots.extra({}) : ``}`;
    }
  })}

`;
});
const Helper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["helperClass", "color"]);
  let { helperClass = "text-xs font-normal text-gray-500 dark:text-gray-300" } = $$props;
  let { color = "gray" } = $$props;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  if ($$props.helperClass === void 0 && $$bindings.helperClass && helperClass !== void 0)
    $$bindings.helperClass(helperClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<p${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(helperClass, colorClasses[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>

`;
});
const Envelope = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "viewBox", "role", "strokeWidth", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { viewBox = "0 0 24 24" } = $$props;
  let { role = "img" } = $$props;
  let { strokeWidth = "1.5" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  if (variation === "mini") {
    size = "20";
    viewBox = "0 0 20 20";
  }
  let { ariaLabel = "envelope" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      {
        "stroke-width": escape_attribute_value(strokeWidth)
      }
    ],
    {}
  )}>${variation === "outline" ? `<path d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99271C21.75 7.77405 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9694 11.5439 13.9694 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77405 2.25 6.99271V6.75"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path d="M3 4C1.89543 4 1 4.89543 1 6V7.16147L9.44098 11.382C9.79289 11.5579 10.2071 11.5579 10.559 11.382L19 7.16147V6C19 4.89543 18.1046 4 17 4H3Z"${add_attribute("fill", color, 0)}></path>
    <path d="M19 8.83853L11.2298 12.7236C10.4556 13.1107 9.54436 13.1107 8.77016 12.7236L1 8.83853V14C1 15.1046 1.89543 16 3 16H17C18.1046 16 19 15.1046 19 14V8.83853Z"${add_attribute("fill", color, 0)}></path>` : `<path d="M1.5 8.6691V17.25C1.5 18.9069 2.84315 20.25 4.5 20.25H19.5C21.1569 20.25 22.5 18.9069 22.5 17.25V8.6691L13.5723 14.1631C12.6081 14.7564 11.3919 14.7564 10.4277 14.1631L1.5 8.6691Z"${add_attribute("fill", color, 0)}></path>
    <path d="M22.5 6.90783V6.75C22.5 5.09315 21.1569 3.75 19.5 3.75H4.5C2.84315 3.75 1.5 5.09315 1.5 6.75V6.90783L11.2139 12.8856C11.696 13.1823 12.304 13.1823 12.7861 12.8856L22.5 6.90783Z"${add_attribute("fill", color, 0)}></path>`}`}</svg>

`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let names = [
    "Ryan Wegner",
    "Paul Brenner ",
    "Elizabeth Wegner",
    "Mary Lee",
    "Elizabeth Cutrone"
  ];
  names.map((name) => {
    return {
      name: name.split(" ")[0] + " " + name.split(" ")[1][0],
      href: "https://airtable.com/shrAE34J3zD9D5NLp?prefill_Recommender=" + name.split(" ")[0] + "%20" + name.split(" ")[1] + "&hide_Recommender=true"
    };
  });
  names.map((name) => {
    return {
      name: name.split(" ")[0] + " " + name.split(" ")[1][0],
      href: "https://airtable.com/shrrzGGbt2gfEdeF0?prefill_Requester=" + name.split(" ")[0] + "%20" + name.split(" ")[1] + "&hide_Requester=true"
    };
  });
  return `${validate_component(Alert, "Alert").$$render($$result, { class: "mb-2" }, {}, {
    icon: () => {
      return `${validate_component(Envelope, "Envelope").$$render(
        $$result,
        {
          class: "text-blue-700 flex-shrink-0 w-5 h-5 mr-3"
        },
        {},
        {}
      )}
	`;
    },
    default: () => {
      return `<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
`;
    }
  })}

<div class="flex flex-col flex-grow"><div class="flex flex-col flex-grow items-center justify-center py-20">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
    default: () => {
      return `<span>Small input - left icon</span>
			${validate_component(Input, "Input").$$render($$result, { size: "m" }, {}, {
        left: () => {
          return `<svg slot="left" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>`;
        }
      })}`;
    }
  })}
		<div class="mb-6">${validate_component(Label, "Label").$$render(
    $$result,
    {
      for: "success",
      color: "green",
      class: "block mb-2"
    },
    {},
    {
      default: () => {
        return `Your name`;
      }
    }
  )}
			${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "success",
      color: "green",
      placeholder: "Success input"
    },
    {},
    {}
  )}
			${validate_component(Helper, "Helper").$$render($$result, { class: "mt-2", color: "green" }, {}, {
    default: () => {
      return `<span class="font-medium">Well done!</span> Some success message.`;
    }
  })}</div>
		<div class="mb-6">${validate_component(Label, "Label").$$render(
    $$result,
    {
      for: "error",
      color: "red",
      class: "block mb-2"
    },
    {},
    {
      default: () => {
        return `Your name`;
      }
    }
  )}
			${validate_component(Input, "Input").$$render(
    $$result,
    {
      id: "success",
      color: "red",
      placeholder: "Success input"
    },
    {},
    {}
  )}
			${validate_component(Helper, "Helper").$$render($$result, { class: "mt-2", color: "red" }, {}, {
    default: () => {
      return `<span class="font-medium">Oh, snapp!</span> Some error message.`;
    }
  })}</div>
		${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
    default: () => {
      return `<span>Small input - left icon</span>
			${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "email",
          placeholder: "name@flowbite.com",
          size: "sm"
        },
        {},
        {
          left: () => {
            return `<svg slot="left" aria-hidden="true" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>`;
          }
        }
      )}`;
    }
  })}</div></div>`;
});
export {
  Page as default
};
