import { c as create_ssr_component, h as getContext, a as add_attribute, b as escape, d as compute_rest_props, i as setContext, v as validate_component, e as each } from "./index.js";
import classNames from "classnames";
import { F as Frame } from "./Frame.js";
const ListgroupItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = getContext("active") } = $$props;
  let { current = false } = $$props;
  let { disabled = false } = $$props;
  let { href = "" } = $$props;
  let { currentClass = "text-white bg-primary-700 dark:text-white dark:bg-gray-800" } = $$props;
  let { normalClass = "" } = $$props;
  let { disabledClass = "text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400" } = $$props;
  let { focusClass = "focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white" } = $$props;
  let { hoverClass = "hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white" } = $$props;
  let { itemDefaultClass = "py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg" } = $$props;
  const states = {
    current: currentClass,
    normal: normalClass,
    disabled: disabledClass
  };
  let state;
  let itemClass;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.currentClass === void 0 && $$bindings.currentClass && currentClass !== void 0)
    $$bindings.currentClass(currentClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0)
    $$bindings.normalClass(normalClass);
  if ($$props.disabledClass === void 0 && $$bindings.disabledClass && disabledClass !== void 0)
    $$bindings.disabledClass(disabledClass);
  if ($$props.focusClass === void 0 && $$bindings.focusClass && focusClass !== void 0)
    $$bindings.focusClass(focusClass);
  if ($$props.hoverClass === void 0 && $$bindings.hoverClass && hoverClass !== void 0)
    $$bindings.hoverClass(hoverClass);
  if ($$props.itemDefaultClass === void 0 && $$bindings.itemDefaultClass && itemDefaultClass !== void 0)
    $$bindings.itemDefaultClass(itemDefaultClass);
  state = disabled ? "disabled" : current ? "current" : "normal";
  itemClass = classNames(itemDefaultClass, states[state], active && state === "disabled" && "cursor-not-allowed", active && state === "normal" && hoverClass, active && state === "normal" && focusClass, $$props.class);
  return `${!active ? `<li${add_attribute("class", itemClass, 0)}>${slots.default ? slots.default({ item: $$props }) : ``}</li>` : `${href ? `<a${add_attribute("href", href, 0)} class="${"block " + escape(itemClass, true)}"${add_attribute("aria-current", current, 0)}>${slots.default ? slots.default({ item: $$props }) : ``}</a>` : `<button type="button" class="${"inline-flex relative items-center text-left " + escape(itemClass, true)}" ${disabled ? "disabled" : ""}${add_attribute("aria-current", current, 0)}>${slots.default ? slots.default({ item: $$props }) : ``}</button>`}`}

`;
});
const Listgroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["items", "active", "defaultClass"]);
  let { items = [] } = $$props;
  let { active = false } = $$props;
  let { defaultClass = "divide-y divide-gray-200 dark:divide-gray-600" } = $$props;
  let groupClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  {
    setContext("active", active);
  }
  groupClass = classNames(defaultClass, $$props.class);
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: active ? "div" : "ul" }, $$restProps, { rounded: true }, { border: true }, { class: groupClass }), {}, {
    default: () => {
      return `${items.length ? each(items, (item, index) => {
        return `${typeof item === "object" ? `${validate_component(ListgroupItem, "ListgroupItem").$$render($$result, Object.assign({}, { active }, item, { index }), {}, {
          default: () => {
            return `${slots.default ? slots.default({ item, index }) : ``}`;
          }
        })}` : `${validate_component(ListgroupItem, "ListgroupItem").$$render($$result, { active, index }, {}, {
          default: () => {
            return `${slots.default ? slots.default({ item, index }) : ``}`;
          }
        })}`}`;
      }) : `${slots.default ? slots.default({ item: items[0] }) : ``}`}`;
    }
  })}

`;
});
export {
  Listgroup as L
};
