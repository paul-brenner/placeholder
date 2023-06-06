<script>
	import {
		Img,
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Heading,
		P,
		Card
	} from 'flowbite-svelte';
</script>

<div class="flex flex-col flex-grow">
	<Navbar let:hidden let:toggle>
		<NavBrand href="/">
			<Img
				src={'/images/crow-crown.png'}
				alt="A Goldcrested Crow (wearing a crown)"
				class="rounded-lg"
				imgClass="h-8"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white px-5">
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
			<NavLi href="https://www.google.com/search?q=goldcrest&tbm=isch">Goldcrest Image</NavLi>
		</NavUl>
	</Navbar>
</div>
