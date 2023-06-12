<script>
	import MyNavbar from './MyNavbar.svelte';
	import { Img, Card } from 'flowbite-svelte';
	import GooglePlacesAutocomplete from '@beyowi/svelte-google-places-autocomplete';
	import { GOOGLEPLACESAPIKEY } from '$env/static/public';

	const options = {
		fields: ['address_components', 'geometry'],
		types: ['(cities)']
	};
	const placeholder = 'New York City';

	// let locationName = localStorage.get('locationName') || '';
</script>

<div class="flex flex-col flex-grow">
	<MyNavbar />
	<div class="flex flex-col flex-grow items-center justify-center py-20">
		<Card class="text-center" size="lg" padding="xl">
			<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
				Thank you for being part of the first testing phase of our idea.
			</h5>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				We’ve been thinking about how powerful referrals are when they come from a trusted friend or
				family member. Oftentimes, the best result comes from that close connection instead of the
				average opinion of the internet (Google or Yelp).
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				The product we have in mind enables you to not only leverage your network to find the best
				referrals, but also to supply your own recommendations and bring business to the providers
				you love.
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				Right now, we’re onboarding alpha testers so they can share their recommendations. Here’s a
				list of ideas for inspiration, but we encourage you to recommend anything you yourself would
				want to discover.
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				We’re also asking testers to make requests for referrals anytime they’re looking for one
				during this phase, and you might just find one through us.
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				Lastly, we need your feedback about anything and everything. What was it like to recommend a
				provider? What was it like to request one? How do you see yourself using a product like
				this, if at all? We want to hear it all.
			</p>
		</Card>
	</div>
	<div class="flex flex-col flex-grow items-center justify-center py-20">
<a href="https://airtable.com/shrAE34J3zD9D5NLp?prefill_Recommender=Quick%20Phone&hide_Recommender=true">
    <Img
        src={'/images/crow-crown.png'}
        alt="A Goldcrested Crow (wearing a crown)"
        alignment="mx-auto"
        class="rounded-lg"
    />
</a>
	</div>
</div>

<!-- <GooglePlacesAutocomplete
	apiKey={googlePlacesApiKey}
	class="form-control"
	value={locationName}
/> -->

<!-- on:place_changed={onPlaceChanged}
	{options}
	on:ready={onReady}
	{placeholder} -->

<!-- <div class="p-8">
	<Alert>
		<span class="font-medium">Crow's gotta strut!</span>
	</Alert>
</div> -->

<!-- <iframe
	title="Airtable Form"
	class="airtable-embed"
	src="https://airtable.com/embed/shrM9IlNi9BONrY6l"
	frameborder="0"
	width="100%"
	height="533"
	style="background: transparent; border: 1px solid #ccc;"
/> -->

<!-- <script>
	import { Alert, Img, Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	let bird_nerd = 'Goldcrest Images';

	function handleMouseOver() {
		bird_nerd = 'See The Nerd Bird';
	}

	function handleMouseOut() {
		bird_nerd = 'Goldcrest Images';
	}
</script> -->

<!-- <Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Goldcrested
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/personal_links">Personal Links</NavLi>
		<NavLi href="/inspiration">Inspiration</NavLi>
		<NavLi href="/privacy">Privacy</NavLi>
		<NavLi href="/contact">Contact</NavLi>
		<NavLi href="/bird_nerd" on:mouseover={handleMouseOver} on:mouseleave={handleMouseOut}>
			{bird_nerd}
		</NavLi>
	</NavUl>
</Navbar> -->

<!-- <h1>SvelteKit contact form submission with Airtable</h1>

<p>Several ways to submit form data.</p>

<p>
	With an
	<a href="/event-handler">Event handler</a>
</p>

<p>
	With an
	<a href="/action">Action</a>
</p>

<p>
	With
	<a href="/super-forms">SvelteKit Superforms</a>
</p> -->
