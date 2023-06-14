<script>
	import { Listgroup } from 'flowbite-svelte';

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

<div class="flex flex-col flex-grow" />

<div class="flex flex-col flex-grow items-center justify-center py-20">
	<div class="flex">
		<div class="mr-24">
			<h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">
				Recommendations
			</h3>
			<Listgroup active items={submit_links} let:item class="w-48">
				{item.name}
			</Listgroup>
		</div>
		<div>
			<h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">Requests</h3>
			<Listgroup active items={request_links} let:item class="w-48">
				{item.name}
			</Listgroup>
		</div>
	</div>
</div>
