<script lang="ts">
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

	interface Bounds {
		north: number;
		south: number;
		west: number;
		east: number;
	}

	const newYorkCityBounds: Bounds = {
		north: 40.917577,
		south: 40.477399,
		west: -74.25909,
		east: -73.700181
	};
	const laBounds: Bounds = {
		north: 34.337306,
		south: 33.703652,
		west: -118.668175,
		east: -118.155289
	};
	const tokyoBounds: Bounds = {
		north: 35.817813,
		south: 35.500974,
		west: 139.562483,
		east: 139.962483
	};
	const sfBounds: Bounds = {
		north: 37.929823,
		south: 37.639829,
		west: -122.503081,
		east: -122.303081
	};
	const chicagoBounds: Bounds = {
		north: 42.023131,
		south: 41.643131,
		west: -87.940101,
		east: -87.740101
	};

	let selected: string;

	interface City {
		value: Bounds;
		name: string;
	}

	let cities: City[] = [
		{ value: newYorkCityBounds, name: 'New York City' },
		{ value: laBounds, name: 'Los Angeles' },
		{ value: tokyoBounds, name: 'Tokyo' },
		{ value: sfBounds, name: 'San Francisco' },
		{ value: chicagoBounds, name: 'Chicago' }
	];

	let autocomplete: google.maps.places.Autocomplete;
	let output_result: google.maps.places.PlaceResult;

	const fields: Array<string> = [
		'name',
		'formatted_address',
		'website',
		'vicinity',
		'url',
		'place_id',
		'formatted_phone_number',
		'types'
	];

	$: if (selected) {
		options.bounds = selected;
	}

	interface AutocompleteOptions {
		componentRestrictions?: { country: string };
		strictBounds?: boolean;
		bounds?: google.maps.LatLngBounds | google.maps.LatLngBoundsLiteral;
		fields: Array<string>;
	}

	const options: AutocompleteOptions = {
		// componentRestrictions: { country: 'us' },
		strictBounds: false,
		bounds: selected,
		fields: fields
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
			// filter output_results.types array to remove establishment and point_of_interest
			let output_types_filtered: Array<string> = output_result.types.filter(
				(v) => v != 'point_of_interest' && v !== 'establishment'
			);
			// if output_types_filtered length is greater than 1, join the array with a comma
			if (output_types_filtered.length > 1) {
				output_result.types = output_types_filtered.join(', ');
			} else {
				output_result.types = output_types_filtered;
			}
		}
	});

	$: if (autocomplete) {
		autocomplete.setOptions(options);
		console.log(options);
	}
</script>

<div class="flex flex-col flex-grow">
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
							<TableBodyRow>
								<TableBodyCell>{key}</TableBodyCell>
								<TableBodyCell>{value}</TableBodyCell>
							</TableBodyRow>
						{/each}
					{/if}
				</TableBody>
			</Table>
		</div>
	</div>
</div>
