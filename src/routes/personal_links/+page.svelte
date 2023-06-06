<script>
	import Navbar from '/src/routes/Navbar.svelte';
	import { Listgroup } from 'flowbite-svelte';
	let request_links = [
		{
			name: 'Ryan W',
			href: 'https://airtable.com/shrrzGGbt2gfEdeF0?prefill_Requester=Ryan%20Wegner&hide_Requester=true'
		},
		{
			name: 'Paul B',
			href: 'https://airtable.com/shrrzGGbt2gfEdeF0?prefill_Requester=Paul%20Brenner&hide_Requester=true'
		},
		{
			name: 'Elizabeth W',
			href: 'https://airtable.com/shrrzGGbt2gfEdeF0?prefill_Requester=Elizabeth%20Wegner&hide_Requester=true'
		},
		{
			name: 'Mary L',
			href: 'https://airtable.com/shrrzGGbt2gfEdeF0?prefill_Requester=Mary%20Lee&hide_Requester=true'
		},
		{
			name: 'Elizabeth C',
			href: 'https://airtable.com/shrrzGGbt2gfEdeF0?prefill_Requester=Elizabeth%20Cutrone&hide_Requester=true'
		}
	];
	let submit_links = [
		{
			name: 'Ryan W',
			href: 'https://airtable.com/shrAE34J3zD9D5NLp?prefill_Requester=Ryan%20Wegner&hide_Requester=true'
		},
		{
			name: 'Paul B',
			href: 'https://airtable.com/shrAE34J3zD9D5NLp?prefill_Requester=Paul%20Brenner&hide_Requester=true'
		},
		{
			name: 'Elizabeth W',
			href: 'https://airtable.com/shrAE34J3zD9D5NLp?prefill_Requester=Elizabeth%20Wegner&hide_Requester=true'
		},
		{
			name: 'Mary L',
			href: 'https://airtable.com/shrAE34J3zD9D5NLp?prefill_Requester=Mary%20Lee&hide_Requester=true'
		},
		{
			name: 'Elizabeth C',
			href: 'https://airtable.com/shrAE34J3zD9D5NLp?prefill_Requester=Elizabeth%20Cutrone&hide_Requester=true'
		}
	];
</script>

<div class="flex flex-col flex-grow">
	<Navbar />
</div>

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

