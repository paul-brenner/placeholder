import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "classnames";
/* empty css                                                       */import { N as Navbar, a as NavBrand, b as NavHamburger, c as NavUl, d as NavLi } from "../../../chunks/NavUl.js";
import { I as Img } from "../../../chunks/Img.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col flex-grow">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
    default: ({ hidden, toggle }) => {
      return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
        default: () => {
          return `${validate_component(Img, "Img").$$render(
            $$result,
            {
              src: "/images/crow-crown.png",
              alt: "A Goldcrested Crow (wearing a crown)",
              class: "rounded-lg",
              imgClass: "h-8"
            },
            {},
            {}
          )}
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white px-5">Goldcrested
			</span>`;
        }
      })}
		${validate_component(NavHamburger, "NavHamburger").$$render($$result, {}, {}, {})}
		${validate_component(NavUl, "NavUl").$$render($$result, { hidden }, {}, {
        default: () => {
          return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/", active: true }, {}, {
            default: () => {
              return `Home`;
            }
          })}
			${validate_component(NavLi, "NavLi").$$render($$result, { href: "/personal_links" }, {}, {
            default: () => {
              return `Personal Links`;
            }
          })}
			${validate_component(NavLi, "NavLi").$$render($$result, { href: "/inspiration" }, {}, {
            default: () => {
              return `Inspiration`;
            }
          })}
			${validate_component(NavLi, "NavLi").$$render($$result, { href: "/privacy" }, {}, {
            default: () => {
              return `Privacy`;
            }
          })}
			${validate_component(NavLi, "NavLi").$$render($$result, { href: "/contact" }, {}, {
            default: () => {
              return `Contact`;
            }
          })}
			${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "https://www.google.com/search?q=goldcrest&tbm=isch"
            },
            {},
            {
              default: () => {
                return `Goldcrest Image`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
