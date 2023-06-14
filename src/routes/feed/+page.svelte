<!-- <script>
	import { Img, Card } from 'flowbite-svelte';
</script>

<div class="flex flex-col flex-grow">
	<div class="flex flex-col flex-grow items-center justify-center py-20" />
</div> -->

<script>
	import { Activity, ActivityItem } from 'flowbite-svelte';
	let test_activities_map = [
		{ user: 'A User', specialty: 'Hair Stylist', location: 'Williamsburg', color: 'teal' },
		{ user: 'A User', specialty: 'Pumber', location: 'Los Angeles', color: 'pink' },
		{
			user: 'A User',
			specialty: 'Bike Mechanic',
			location: '1908 W Chicago Ave, Chicago, IL 60622',
			color: 'red'
		},
		{ user: 'Paul', specialty: 'Barber', location: 'NYC', color: 'blue' }
	];
	// now map each element to fit into the activity item
	let activities = test_activities_map.map((activity) => {
		let text_class = `font-bold text-ctpf-${activity.color}`;
		let specialty_class = `outline outline-ctpf-${activity.color} text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300`;
		let location_class = `bg-ctpf-${activity.color} text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300`;
		return {
			title: `<span class="${text_class}">${activity.user}</span> recommended a <span class="${specialty_class}">${activity.specialty}</span>in <span class="${location_class}">${activity.location}</span>`,
			date: 'just now',
			alt: 'image alt here',
			src: 'https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png'
		};
	});
</script>

<div class="flex flex-col flex-grow">
	<div class="flex flex-col flex-grow items-center justify-center py-20">
		<Activity>
			<ActivityItem {activities} />
		</Activity>
	</div>
</div>
