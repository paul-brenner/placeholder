<script>
	import MyNavbar from '/src/routes/MyNavbar.svelte';
	import { Label, Input, Helper } from 'flowbite-svelte';
	import { Alert } from 'flowbite-svelte';
	import { Envelope } from 'svelte-heros-v2';

	let names = ['Ryan Wegner', 'Paul Brenner ', 'Elizabeth Wegner', 'Mary Lee', 'Elizabeth Cutrone'];

	let submit_links = names.map((name) => {
		return {
			name: name.split(' ')[0] + ' ' + name.split(' ')[1][0],
			href:
				'https://airtable.com/shrAE34J3zD9D5NLp?prefill_Recommender=' +
				name.split(' ')[0] +
				'%20' +
				name.split(' ')[1] +
				'&hide_Recommender=true'
		};
	});

	let request_links = names.map((name) => {
		return {
			name: name.split(' ')[0] + ' ' + name.split(' ')[1][0],
			href:
				'https://airtable.com/shrrzGGbt2gfEdeF0?prefill_Requester=' +
				name.split(' ')[0] +
				'%20' +
				name.split(' ')[1] +
				'&hide_Requester=true'
		};
	});
</script>

<Alert class="mb-2">
	<svelte:fragment slot="icon">
		<Envelope class="text-blue-700 flex-shrink-0 w-5 h-5 mr-3" />
	</svelte:fragment>
	<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
</Alert>

<div class="flex flex-col flex-grow">
	<MyNavbar />
	<div class="flex flex-col flex-grow items-center justify-center py-20">
		<Label class="space-y-2">
			<span>Small input - left icon</span>
			<Input size="m">
				<svg
					slot="left"
					aria-hidden="true"
					class="w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path
						d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
					/></svg
				>
			</Input>
		</Label>
		<div class="mb-6">
			<Label for="success" color="green" class="block mb-2">Your name</Label>
			<Input id="success" color="green" placeholder="Success input" />
			<Helper class="mt-2" color="green"
				><span class="font-medium">Well done!</span> Some success message.</Helper
			>
		</div>
		<div class="mb-6">
			<Label for="error" color="red" class="block mb-2">Your name</Label>
			<Input id="success" color="red" placeholder="Success input" />
			<Helper class="mt-2" color="red"
				><span class="font-medium">Oh, snapp!</span> Some error message.</Helper
			>
		</div>
		<Label class="space-y-2">
			<span>Small input - left icon</span>
			<Input type="email" placeholder="name@flowbite.com" size="sm">
				<svg
					slot="left"
					aria-hidden="true"
					class="w-4 h-4"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path
						d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
					/></svg
				>
			</Input>
		</Label>
	</div>
</div>
