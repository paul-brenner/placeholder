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
<script>
	import Navbar from './Navbar.svelte';
	import { Img } from 'flowbite-svelte';
</script>

<Navbar />
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
<div class="flex flex-col flex-grow items-center justify-center py-20">
	<Img
		src={'/images/crow-crown.png'}
		alt="A Goldcrested Crow (wearing a crown)"
		alignment="mx-auto"
		class="rounded-lg"
	/>
</div>
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
