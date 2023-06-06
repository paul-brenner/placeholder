<script>
	import { Alert, Img, Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
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
		<NavLi
			href="https://www.google.com/search?q=goldcrest&tbm=isch"
			on:mouseover={handleMouseOver}
			on:mouseleave={handleMouseOut}
		>
			{bird_nerd}
		</NavLi>
	</NavUl>
</Navbar>
