import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import "classnames";
import { C as Card } from "../../chunks/Card.js";
/* empty css                                                    */import { I as Img } from "../../chunks/Img.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col flex-grow"><div class="flex flex-col flex-grow items-center justify-center py-20">${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "text-center",
      size: "lg",
      padding: "xl"
    },
    {},
    {
      default: () => {
        return `<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Thank you for being part of the first testing phase of our idea.
			</h5>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">We’ve been thinking about how powerful referrals are when they come from a trusted friend or
				family member. Oftentimes, the best result comes from that close connection instead of the
				average opinion of the internet (Google or Yelp).
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">The product we have in mind enables you to not only leverage your network to find the best
				referrals, but also to supply your own recommendations and bring business to the providers
				you love.
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Right now, we’re onboarding alpha testers so they can share their recommendations. Here’s a
				list of ideas for inspiration, but we encourage you to recommend anything you yourself would
				want to discover.
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">We’re also asking testers to make requests for referrals anytime they’re looking for one
				during this phase, and you might just find one through us.
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Lastly, we need your feedback about anything and everything. What was it like to recommend a
				provider? What was it like to request one? How do you see yourself using a product like
				this, if at all? We want to hear it all.
			</p>`;
      }
    }
  )}</div>
	<div class="flex flex-col flex-grow items-center justify-center py-20"><a href="https://airtable.com/shrAE34J3zD9D5NLp?prefill_Recommender=Quick%20Phone&hide_Recommender=true">${validate_component(Img, "Img").$$render(
    $$result,
    {
      src: "/images/crow-crown.png",
      alt: "A Goldcrested Crow (wearing a crown)",
      alignment: "mx-auto",
      class: "rounded-lg"
    },
    {},
    {}
  )}</a></div></div>













`;
});
export {
  Page as default
};
