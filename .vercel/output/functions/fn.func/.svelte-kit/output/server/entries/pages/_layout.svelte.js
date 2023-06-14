import { c as create_ssr_component, v as validate_component, b as escape } from "../../chunks/index.js";
import "classnames";
/* empty css                                                    */import { N as Navbar, a as NavBrand, b as NavHamburger, c as NavUl, d as NavLi } from "../../chunks/NavUl.js";
import { I as Img } from "../../chunks/Img.js";
const app$1 = "";
const app = "";
const MyNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bird_nerd = "Goldcrest Images";
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
    default: ({ hidden, toggle }) => {
      return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
        default: () => {
          return `
		${validate_component(Img, "Img").$$render(
            $$result,
            {
              src: "/images/crow-crown.png",
              alt: "A Goldcrested Crow (wearing a crown)",
              alignment: "mx-auto",
              class: "rounded-lg w-7"
            },
            {},
            {}
          )}
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white px-2">Goldcrested
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
		
		${validate_component(NavLi, "NavLi").$$render(
            $$result,
            {
              href: "https://www.google.com/search?q=goldcrest&tbm=isch"
            },
            {},
            {
              default: () => {
                return `${escape(bird_nerd)}`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col flex-grow">${validate_component(MyNavbar, "MyNavbar").$$render($$result, {}, {}, {})}</div>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
