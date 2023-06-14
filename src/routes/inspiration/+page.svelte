<script>
	import { Listgroup } from 'flowbite-svelte';

	let list1 = ['Architect', 'Babysitter', 'Car Broker', 'Contractor', 'Dentist'];
	let list2 = ['Dentist', 'Doctor', 'Dry Cleaner', 'Handyman', 'Housekeeper', 'Interior Designer'];
	let list3 = [
		'Landscape/Gardener',
		'Masseuse',
		'Parenting Coach',
		'Physical Therapist',
		'Plumber'
	];
	let list4 = [
		'Private Chef',
		'Psychic',
		'Realtor',
		'Therapist (MFT, Ph.D., etc.)',
		'Yoga Instructor'
	];
	let list5 = [
		'Electrician',
		'Financial Advisor',
		'Hair Stylist',
		'Personal Trainer',
		'Weightlifting Coach'
	];
	let list6 = [
		'Personal Assistant',
		'Personal Shopper',
		'Accountant',
		'Photographer',
		'Piano Teacher'
	];
</script>

<div class="flex flex-col flex-grow" />

<div class="flex flex-col flex-grow items-center justify-center py-20">
	<div class="flex justify-between w-2/3 max-w-screen-lg">
		<div>
			<Listgroup items={list1} let:item class="w-48">
				{item}
			</Listgroup>
		</div>
		<div>
			<Listgroup items={list2} let:item class="w-48">
				{item}
			</Listgroup>
		</div>
		<div>
			<Listgroup items={list3} let:item class="w-48">
				{item}
			</Listgroup>
		</div>
	</div>
</div>

<div class="flex flex-col flex-grow items-center justify-center py-20">
	<div class="flex justify-between w-2/3 max-w-screen-lg">
		<div>
			<Listgroup items={list4} let:item class="w-48">
				{item}
			</Listgroup>
		</div>
		<div>
			<Listgroup items={list5} let:item class="w-48">
				{item}
			</Listgroup>
		</div>
		<div>
			<Listgroup items={list6} let:item class="w-48">
				{item}
			</Listgroup>
		</div>
	</div>
</div>
