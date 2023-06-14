<script>
	import { Img, Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	let bird_nerd = 'Goldcrest Images';

	function handleMouseOver() {
		bird_nerd = 'See The Nerd Bird';
	}

	function handleMouseOut() {
		bird_nerd = 'Goldcrest Images';
	}
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<!-- <Fa icon={faCrow} /> -->
		<Img
			src={'/images/crow-crown.png'}
			alt="A Goldcrested Crow (wearing a crown)"
			alignment="mx-auto"
			class="rounded-lg w-7"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white px-2">
			Goldcrested
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<!-- <NavLi href="/personal_links">Personal Links</NavLi> -->
		<NavLi href="/feed">Feed</NavLi>
		<NavLi href="/privacy">Privacy</NavLi>
		<!-- <NavLi href="/contact">Contact</NavLi> -->
		<NavLi
			href="https://www.google.com/search?q=goldcrest&tbm=isch"
			on:mouseover={handleMouseOver}
			on:mouseleave={handleMouseOut}
		>
			{bird_nerd}
		</NavLi>
	</NavUl>
</Navbar>
