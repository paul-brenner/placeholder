<script>
	import MyNavbar from '/src/routes/MyNavbar.svelte';
	import { Card } from 'flowbite-svelte';
</script>

<div class="flex flex-col flex-grow">
	<MyNavbar />
	<div class="flex flex-col flex-grow items-center justify-center py-20">
		<Card class="text-center" size="lg" padding="xl">
			<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Privacy Statement</h5>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				This only works if we protect your privacy and your data so that you know you can trust us.
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				All of your data is private during this early proof of concept phase. Only Paul and Ryan
				will be able to view your entries. We will ask your permission before sharing any of your
				recommendations and will explain at that time exactly what we want to share.
			</p>
			<p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
				You will have the opportunity to remove all data you have provided when we advance to the
				next phase. Your recommendation strength will always be private and not visible to users or
				providers.
			</p>
		</Card>
	</div>
</div>
