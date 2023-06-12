<script>
	import MyNavbar from '/src/routes/MyNavbar.svelte';
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';
	import { PUBLIC_GOOGLEPLACESAPIKEY } from '$env/static/public';

	import {
		Input,
		Label,
		Helper,
		Select,
		Badge,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	const newYorkCityBounds = {
		north: 40.917577,
		south: 40.477399,
		west: -74.25909,
		east: -73.700181
	};
	const laBounds = {
		north: 34.337306,
		south: 33.703652,
		west: -118.668175,
		east: -118.155289
	};
	const tokyoBounds = {
		north: 35.817813,
		south: 35.500974,
		west: 139.562483,
		east: 139.962483
	};
	const sfBounds = {
		north: 37.929823,
		south: 37.639829,
		west: -122.503081,
		east: -122.303081
	};
	const chicagoBounds = {
		north: 42.023131,
		south: 41.643131,
		west: -87.940101,
		east: -87.740101
	};

	let selected;
	let cities = [
		{ value: newYorkCityBounds, name: 'New York City' },
		{ value: laBounds, name: 'Los Angeles' },
		{ value: tokyoBounds, name: 'Tokyo' },
		{ value: sfBounds, name: 'San Francisco' },
		{ value: chicagoBounds, name: 'Chicago' }
	];

	// @ts-ignore
	// import { LatLngBounds } from '@googlemaps/google-maps-services-js';
	// @ts-ignore
	// import { LatLngLiteral } from '@googlemaps/google-maps-services-js/dist/common';

	let autocomplete;
	let output_result;
	let result_address;
	const keys_to_show = [
		'name',
		'formatted_address',
		'website',
		'vicinity',
		'url',
		'place_id',
		'formatted_phone_number',
		'types'
	];
	// types is an array to be dealt with
	const options = {
		// componentRestrictions: { country: 'us' },
		strictBounds: false,
		bounds: selected
	};

	onMount(() => {
		const loader = new Loader({
			apiKey: PUBLIC_GOOGLEPLACESAPIKEY,
			version: 'weekly',
			libraries: ['places']
		});

		loader.loadCallback((e) => {
			if (e) {
				console.log(e);
			} else {
				autocomplete = new google.maps.places.Autocomplete(
					document.getElementById('autocomplete'),
					options
				);

				autocomplete.addListener('place_changed', onPlaceChanged);
			}
		});

		function onPlaceChanged() {
			output_result = autocomplete.getPlace();

			// console.log(output_result);
			// console.log(JSON.stringify(output_result));
		}
	});
</script>

<div class="flex flex-col flex-grow">
	<MyNavbar />
	<div class="flex flex-col items-center justify-center py-20">
		<div class="w-2/3 mx-auto flex-col">
			<div class="w-full">
				<Label class="w-full">
					Find someone
					<Select
						class="mt-2 w-full"
						items={cities}
						bind:value={selected}
						placeholder="Choose a city"
					/>
				</Label>
			</div>
			<div class="w-full">
				<Input
					class="w-full"
					type="text"
					id="autocomplete"
					placeholder="Who are you looking for"
					required
				/>
			</div>
			<Table hoverable={true}>
				<TableHead>
					<TableHeadCell>Result Type</TableHeadCell>
					<TableHeadCell>Result Value</TableHeadCell>
				</TableHead>
				<TableBody>
					{#if output_result}
						{#each Object.entries(output_result) as [key, value]}
							{#if keys_to_show.includes(key)}
								{#if key === 'types'}
									<TableBodyRow>
										<TableBodyCell>{key}</TableBodyCell>
										<TableBodyCell>
											{#each value.filter((v) => v != 'point_of_interest' && v !== 'establishment') as temp_value}
												{temp_value}
											{/each}
										</TableBodyCell>
									</TableBodyRow>
								{:else}
									<TableBodyRow>
										<TableBodyCell>{key}</TableBodyCell>
										<TableBodyCell>{value}</TableBodyCell>
									</TableBodyRow>
								{/if}
							{/if}
						{/each}
					{/if}
				</TableBody>
			</Table>
		</div>
	</div>
</div>
